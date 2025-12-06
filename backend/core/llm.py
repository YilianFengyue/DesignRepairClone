from typing import Awaitable, Callable, List
from openai import AsyncOpenAI
from openai.types.chat import ChatCompletionMessageParam, ChatCompletionChunk

MODEL_GPT_4_VISION = "anthropic/claude-sonnet-4.5"
MODEL_GPT_4 = "anthropic/claude-sonnet-4.5"
MODEL_GPT_4_TURBO = "anthropic/claude-sonnet-4.5"
# anthropic/claude-sonnet-4.5
# google/gemini-3-pro-preview

async def stream_openai_response(
    messages: List[ChatCompletionMessageParam],
    api_key: str,
    temperature: float,
    functions: List[dict] | None,
    base_url: str | None,
    callback: Callable[[str], Awaitable[None]],
    model: str | None = None,
) -> str:
    #client = AsyncOpenAI(api_key=api_key, base_url=base_url)
    # 如果没传 base_url，就强制使用 OpenRouter
    if base_url is None:
        base_url = "https://openrouter.ai/api/v1"

    client = AsyncOpenAI(
        api_key=api_key, 
        base_url=base_url,
        default_headers={
            "HTTP-Referer": "http://localhost:3000", # OpenRouter 要求的 Referer
            "X-Title": "DesignRepair Reproduction"   # OpenRouter 要求的 Title
        }
    )
    if model is None:
        model = MODEL_GPT_4

    # Base parameters
    params = {"model": model, "messages": messages, "stream": True, "timeout": 600, "temperature": temperature}

    # Add 'max_tokens' only if the model is a GPT4 vision model
    if model == MODEL_GPT_4_VISION:
        params["max_tokens"] = 4096
    
    # Add function calling
    if functions is not None:
        # 旧代码: params["functions"] = functions
        # 旧代码: params["function_call"] = {"name": functions[0]["name"]}
        
        # 新代码: 构造 tools 格式
        params["tools"] = [
            {
                "type": "function",
                "function": func
            } for func in functions
        ]
        # 新代码: 强制使用第一个工具 (Tool Choice)
        params["tool_choice"] = {
            "type": "function",
            "function": {"name": functions[0]["name"]}
        }

    stream = await client.chat.completions.create(**params)  # type: ignore
    full_response = ""
    async for chunk in stream:  # type: ignore
        #assert isinstance(chunk, ChatCompletionChunk)
        if functions is not None:
            # === 修改开始：适配 tools 的流式响应 ===
            content = ""
            # 优先检查新的 tool_calls
            if chunk.choices and chunk.choices[0].delta.tool_calls:
                tool_call = chunk.choices[0].delta.tool_calls[0]
                if tool_call.function and tool_call.function.arguments:
                    content = tool_call.function.arguments
            
            # 兼容性兜底：万一某些非主流模型还在发 function_call
            elif chunk.choices and chunk.choices[0].delta.function_call:
                content = chunk.choices[0].delta.function_call.arguments or ""
        else:
            content = chunk.choices[0].delta.content or ""
            
        full_response += content
        # print(content) # 可以取消注释调试
        await callback(content)

    await client.close()

    return full_response