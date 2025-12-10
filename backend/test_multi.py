import os
import json
from pydantic import BaseModel
from typing import Optional
import asyncio
import csv
from core.analysis_components import analysis_components
from core.analysis_groups import analysis_groups
from core.analysis_utils import repair_to_full_code, repair_to_full_code_multi
import datetime


class FileContext(BaseModel):
    file_name: str
    file_dir: str
    file_content: str
    # 修改 1: 明确允许 None 类型
    root_directory: Optional[str] = None
    example_content: Optional[str] = None
    # 修改 2: 补上缺失的字段，防止报 "extra fields not permitted"
    load_files: Optional[str] = None



def process_file(file_dir, file_name, root_directory=None, example=None):
    """
    processes files
    """
    file_path = os.path.join(file_dir, file_name)
    with open(file_path, "r") as file:
        file_content = file.read()

    example_content = None
    if example:
        example_path = os.path.join(root_directory, "./" + example)
        try:
            with open(example_path, "r") as example_file:
                example_content = example_file.read()
        except FileNotFoundError:
            print(f"Could not find example file at {example_path}")
            return

    ctx = FileContext(
        file_name=file_name,
        file_dir=file_dir,
        file_content=file_content,
        root_directory=root_directory,
        example_content=example_content,
    )
    return ctx


def process_file_multi(file_dir, file_name_list, testname, root_directory=None, example=None):
    """
    processes files
    """
    file_content = ""
    for file_name in file_name_list:
        file_path = os.path.join(file_dir, file_name)
        with open(file_path, "r") as file:
            file_content_single = file.read()
            file_content += file_name + ":\n"
            file_content += file_content_single
            file_content += "\n"

    example_content = None
    if example:
        example_path = os.path.join(root_directory, "./" + example)
        try:
            with open(example_path, "r") as example_file:
                example_content = example_file.read()
        except FileNotFoundError:
            print(f"Could not find example file at {example_path}")
            return

    now = datetime.datetime.now()
    timestamp = now.strftime("%Y%m%d_%H%M%S")
    folder_name = f"log/{timestamp}_{testname}"

    ctx = FileContext(
        file_name= folder_name,
        load_files = str(file_name_list),
        file_dir=file_dir,
        file_content=file_content,
        root_directory=root_directory,
        example_content=example_content,
    )
    return ctx

def load_component_guidelines(file_path):
    with open(file_path, "r") as f:
        return json.load(f)
    


def load_system_level_guidelines(file_path):
    data_by_property_and_constraint = {}  # based on property constraint

    with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            # print(row[0:5])
            if row[0] == 'material_design_section':
                continue
            if len(row) != 6:
                print(f"Invalid row number: {row}")
                continue

            # check system_design_aspect
            if row[1] not in ["Structure","Flow","Layout","Implement","Label","Text","Color","Typography","Shape","Icon","Elevation"]:
                print(f"Invalid row High_Level_Subclasses: {row}")
                continue

            # check property
            if row[2] not in ["Group", "Clickable", "Spacing", "Platform","Label","Text","Color","all elements","Icon"]:
                print(f"Invalid row property: {row}")
                continue

            # check constraint
            if row[3] not in ["soft","hard"]:
                print(f"Invalid row constraint: {row}")
                continue

            # init
            if row[2] not in data_by_property_and_constraint:
                data_by_property_and_constraint[row[2]] = {"soft": [], "hard": []}

            # save by property constraint
            data_by_property_and_constraint[row[2]][row[3]].append(row)

    return data_by_property_and_constraint


if __name__ == "__main__":
    # 注意结尾加上 \src\components
    file_dir = r"C:\Users\15139\Desktop\calculator\src\component"
    
    # 2. 指定要修复的核心组件文件
    # 我们把计算器的显示屏、按钮面板、按钮本体、以及主 App 容器都修一遍
    file_name_list = [
        "Button.js", 
        "ButtonPanel.js", 
        "Display.js", 
        "App.js" 
    ]
    
    testname = "calculator_repair"

    # page to be tested
    pageurl = "http://localhost:3000"

    comp_guidelines_path = r"..\library\component_knowledge_base.json" # component guideline file
    system_level_guidelines_path = r"..\library\system_design_knowledge_base.csv" # system level guideline file

    ctx = process_file_multi(file_dir, file_name_list, testname)
    
    # make log folder
    if not os.path.exists(ctx.file_name):
        os.makedirs(ctx.file_name)
    
    # a.components detect and repair
    comp_guidelines = load_component_guidelines(comp_guidelines_path)
    comp_suggestions = asyncio.run(analysis_components(ctx, comp_guidelines))

    # b.groups detect and repair
    system_level_guidelines = load_system_level_guidelines(system_level_guidelines_path)
    property_suggestions = asyncio.run(analysis_groups(ctx, system_level_guidelines, pageurl))

    # c.repair
    asyncio.run(repair_to_full_code_multi(ctx, comp_suggestions, property_suggestions, ctx.file_name))

    