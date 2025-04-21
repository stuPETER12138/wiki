from openai import OpenAI
from rich import print
import sys

explanation = "Is this one galaxy or two? Although it looks like one, the answer is two. One path to this happening is when a small galaxy collides with a larger galaxy and ends up in the center. But in the featured image, something more rare is going on. Here, the central light-colored elliptical galaxy is much closer than the blue and red-colored spiral galaxy that surrounds it. This can happen when near and far galaxies are exactly aligned, causing the gravity of the near galaxy to pull the light from the far galaxy around it in an effect called gravitational lensing. The featured galaxy double was taken by the Webb Space Telescope and shows a complete Einstein ring, with great detail visible for both galaxies. Galaxy lenses like this can reveal new information about the mass distribution of the foreground lens and the light distribution of the background source."

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1/',
    api_key=sys.argv[1], # ModelScope Token
)

response = client.chat.completions.create(
    model='deepseek-ai/DeepSeek-V3-0324', # ModelScope Model-Id
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

print(response.choices[0].message.content)
