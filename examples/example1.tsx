/**
 * 这个组件故意违反了 Material Design 3 的多项设计规范。
 * 用于测试 DesignRepair 工具的修复能力。
 */
import React from 'react';

// 简单的 SVG 图标组件
function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  )
}

function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-4 font-sans">
      {/* 违反点 1: Top App Bar 
        - 标题字号过小，不符合 MD3 Headline 规范
        - 阴影过重，MD3 倾向于使用 Surface Tones 而不是深阴影
        - 按钮太挤
      */}
      <header className="bg-white shadow-2xl flex items-center justify-between px-2 py-1 mb-8">
        <div className="flex items-center gap-1">
          <button className="text-gray-400">
            <MenuIcon />
          </button>
          <h1 className="text-base font-bold text-gray-400">Task Manager</h1>
        </div>
        <div className="flex gap-1">
          <button className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-sm">Profile</button>
        </div>
      </header>

      <main className="max-w-md mx-auto space-y-4">
        
        {/* 违反点 2: Card 组件
          - 圆角不一致 (rounded-sm)
          - 内部边距 (padding) 太小
          - 颜色对比度极低 (text-gray-300 on white)
        */}
        <div className="bg-white p-2 rounded-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-black">Project Alpha Launch</h2>
              <p className="text-xs text-gray-300 mt-1">Due date: Tomorrow</p>
            </div>
            {/* 违反点: 图标按钮没有 aria-label，且点击区域太小 */}
            <button className="text-gray-300 hover:text-gray-500">
              <MoreIcon />
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-400 leading-tight">
              We need to finalize the marketing assets and push the code to production environment by 5 PM.
            </p>
          </div>

          {/* 违反点 3: 按钮 (Buttons)
            - 高度仅 h-6 (24px)，远低于 MD3 要求的 48dp 触控目标
            - 两个主要操作放在一起，层级不分明
            - 间距极小 (gap-1)
          */}
          <div className="flex justify-end gap-1 mt-4">
            <button className="h-6 px-2 bg-gray-200 text-gray-600 text-[10px] uppercase rounded-none">
              Ignore
            </button>
            <button className="h-6 px-2 bg-blue-500 text-white text-[10px] uppercase rounded-none shadow-lg">
              Complete Task
            </button>
          </div>
        </div>

        {/* 违反点 4: 列表项 (List)
          - 极细的分割线颜色
          - 文字和图标没有对齐
        */}
        <div className="bg-white rounded-lg p-0 overflow-hidden">
          <div className="p-2 border-b border-gray-100 flex items-center">
            <div className="w-4 h-4 bg-red-200 mr-1"></div>
            <span className="text-gray-500 text-sm">High Priority</span>
          </div>
          <div className="p-2 border-b border-gray-100 flex items-center">
            <div className="w-4 h-4 bg-green-200 mr-1"></div>
            <span className="text-gray-500 text-sm">Low Priority</span>
          </div>
        </div>

        {/* 违反点 5: FAB (Floating Action Button) 误用
          - MD3 规定 FAB 应该放在屏幕右下角或底部导航栏上方
          - 这里把 FAB 放到了流式布局中间，且尺寸奇怪 (w-10 h-10)
          - 使用了矩形圆角 (rounded-lg) 而不是 MD3 的标准形状
        */}
        <div className="flex justify-center mt-8">
          <button className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-xl">
            <PlusIcon />
          </button>
        </div>

      </main>
    </div>
  );
}