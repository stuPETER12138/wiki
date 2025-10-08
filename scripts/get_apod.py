from pathlib import Path
import argparse
from nasa_apod import apod
from openai import OpenAI
from rich import print


parser = argparse.ArgumentParser()
parser.add_argument(
    "--model_api_key",
    type=str,
    default="",
    help="ModelScope API Key",
)   
args = parser.parse_args()
MODEL_API_KEY = args.model_api_key
KEY = "DEMO_KEY"
MD_DIR = Path(__file__).parent.parent / "docs" / "explore" / "aerospace"
apod_service = apod.APODService(KEY)
picture = apod_service.get_picture()
print(picture)


# get the copyright
try:
    copyright = picture["copyright"]
except Exception:
    print("\n No Copyright! \n")
    copyright = "Not Found"
# get the title
title = picture["title"]
# get the date
date = picture["date"]
# get the explanation
explanation = ""
content_url = ""
if picture["media_type"] == "image":
    try:
        url = picture["hdurl"]
    except Exception:
        print("\n No hdurl! \n")
        url = picture["url"]
    content_url = f"\n![]({url})\n"
elif picture["media_type"] == "video":
    url = picture["url"]
    content_url = f"\n@[youtube]({url})\n"
else:
    print("\n No image or video! \n")

client = OpenAI(
    base_url="https://api-inference.modelscope.cn/v1/",
    api_key=MODEL_API_KEY,  # ModelScope Token
)

# set extra_body for thinking control
extra_body = {
    # enable thinking, set to False to disable
    "enable_thinking": True,
    # use thinking_budget to contorl num of tokens used for thinking
    # "thinking_budget": 4096
}

response = client.chat.completions.create(
    model="Qwen/Qwen3-235B-A22B-Instruct-2507",  # ModelScope Model-Id
    messages=[
        {
            "role": "system",
            "content": """作为专业英语翻译处理助手，请严格遵循以下步骤执行：
# 文本分析

- 识别并提取文本中的专业术语以及生僻词汇【CET 4 级及以上】

# 翻译处理

- 对筛选出的目标词汇进行准确中文翻译，普通词汇不做任何处理

- 采用`英文原词（中文翻译）`的格式进行原位标注，确保括号使用中文全角格式（）。例如：“ APOD（每日天文一图）”

- 当再次遇到前文已经翻译过某目标词汇时，跳过这次遇到的目标词语，不再重复翻译

- 保留原始文本的排版和段落结构，保持原文标点符号体系不变

# 输出要求：

仅返回处理后的最终文本

禁止添加解释说明

维持原始文本换行和缩进格式""",
        },
        {"role": "user", "content": picture["explanation"]},
    ],
    stream=True,
    extra_body=extra_body,
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)
    for chunk in response:
        try:
            content = chunk.choices[0].delta.content
        except Exception:
            content = None
        if content:
            print(content, end='', flush=True)
            explanation += content

# write the content to the markdown file
content = f"""# {title}

Data: {date}

Copyright: {copyright}
{content_url}
## Explanation
    
{explanation}
"""

with open(Path(MD_DIR)/"apod.md", "w", encoding="utf-8") as f:
    f.write(content)


print("\n\n 😋 APOD image and markdown file generated successfully! \n\n")
