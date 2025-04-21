from nasa_apod import apod
from openai import OpenAI
from rich import print
import os
import sys


MOEL_KEY = sys.argv[1]
KEY = "DEMO_KEY"
MD_NAME = "apod.md"
MD_DIR = os.path.join(os.path.dirname(__file__), "../docs/explore/aerospace")


def get_explanation(explanation, model_key=MOEL_KEY):
    client = OpenAI(
        base_url='https://api-inference.modelscope.cn/v1/',
        api_key=model_key,
    )

    response = client.chat.completions.create(
        model='deepseek-ai/DeepSeek-V3-0324',
        messages=[
            {
                'role': 'system',
                'content':  """作为专业英语翻译处理助手，请严格遵循以下步骤执行：
# 文本分析

- 识别并提取文本中的专业术语以及生僻词汇【CEFR B2 级以上】

# 翻译处理

- 对筛选出的目标词汇进行准确中文翻译，普通词汇不做任何处理

- 采用（中文翻译）的格式进行原位标注，确保括号使用中文全角格式（）

- 保留原始文本的排版和段落结构，保持原文标点符号体系不变

# 输出要求：

仅返回处理后的最终文本

禁止添加解释说明

维持原始文本换行和缩进格式"""
            },
            {
                'role': 'user',
                'content': explanation
            }
        ],
        stream=False,
        temperature=0.7,
    )
    explanation = response.choices[0].message.content

    return explanation

def generate_md_file(title, date, hdurl, explanation):
    content = f"""# {title}

Data: {date}

![{title}]({hdurl})

## Explanation
    
{explanation}

"""
    with open(os.path.join(MD_DIR, MD_NAME), "w", encoding="utf-8") as f:
        f.write(content)
    
try:
    apod_service = apod.APODService(KEY)
    picture_data = apod_service.get_picture()
    print(picture_data)
    generate_md_file(
        picture_data['title'],
        picture_data['date'],
        picture_data['hdurl'],
        get_explanation(picture_data['explanation'])
    )
    print("\nAPOD image and markdown file generated successfully!\n")
except Exception as e:
    print(f"💔 {e} ! \n")
