# Hello, Agent

## WHAT is Agent

AGENT = LLM + Planning +Tool use + Feedback

智能体是一个能够感知环境并在环境中自主行动以实现特定目标的系统。它具有以下几个关键特征：
1. 自主性：智能体可以在没有直接人为干预的情况下运作，能够自行决策和行动。
2. 响应性：能够感知环境并对环境变化做出及时响应。
3. 主动性：不仅被动响应环境,还可以主动采取行动来实现目标。
4. 社交能力：能够与其他智能体或人类进行交互和协作。

在实现方面，现代智能体通常基于以下技术：
- 大语言模型（LLM）作为认知和决策的核心
- 规划系统用于制定行动计划
- 记忆系统存储相关信息和经验
- 工具使用能力来扩展行动范围

## HOW to use Agent

### Principles

在设计智能体时，我们首先要明确其**目标导向性**，即智能体的每个行为都应该服务于预定的目标。这种目标导向不仅体现在最终结果上，还需要贯穿整个执行过程中。同时，智能体的设计应该遵循**模块化**原则，将不同功能划分为独立的模块，既保证了代码的可维护性，也提高了系统的灵活性。

一个典型的智能体包含三个核心部分：
- 感知模块：处理输入信息
- 决策模块：制定行动计划
- 执行模块：实施具体行动

智能体的设计应该采用迭代开发的方式。首先实现基本功能，然后通过不断的测试和反馈来完善系统。在此过程中，要注重收集和分析性能数据，根据实际运行情况调整设计参数和策略。这种渐进式的开发方法可以帮助我们建立一个更加稳健和高效的智能体系统。

### Messages

当你和朋友聊天、在网上搜索信息或是对手机语音助手说“帮我查一下天气”时，其实你都在向某个“代理者（Agent）”发送一条“信息（Message）”。这里的“代理者”既可以是一个人，也可以是一个能执行指令的智能程序或系统，而“信息”则是你传递的指令、问题或数据。在日常生活中，这种信息交互常常不易察觉，但在计算机科学、人工智能和自动化任务中，“Agent的Message”是一个至关重要的基础概念。

简单来说，Agent 的 Message 就是指系统中“智能体”或“代理者”之间互相传递的指令或数据包。

> 以 CAMEL 系统的 BaseMessage 类为例
> 
> 创建并使用 Message

```python
from PIL import Image
from io import BytesIO
import requests

# 下载一张图片并创建一个 PIL Image 对象
url = "https://raw.githubusercontent.com/camel-ai/camel/master/misc/logo_light.png"
response = requests.get(url)
img = Image.open(BytesIO(response.content))

# 创建包含图片的用户消息
image_message = BaseMessage(
    role_name="User_with_image",
    role_type=RoleType.USER,
    content="Here is an image",
    meta_dict={},
    image_list=[img]  # 将图片列表作为参数传入
)

print(image_message)

>>>
BaseMessage(role_name='User_with_image', role_type=<RoleType.USER: 'user'>, meta_dict={}, content='Here is an image', video_bytes=None, image_list=[<PIL.PngImagePlugin.PngImageFile image mode=RGBA size=3520x720 at 0x1DDFF8E88F0>], image_detail='auto', video_detail='low', parsed=None)
```

```python
from camel.messages import BaseMessage

# 创建用户消息
user_msg = BaseMessage.make_user_message(
    role_name="User_1",
    content="Hi, what can you do?"
)

# 创建助手消息
assistant_msg = BaseMessage.make_assistant_message(
    role_name="Assistant_1",
    content="I can help you with various tasks."
)

print("User Message:", user_msg)
print("Assistant Message:", assistant_msg)
```

**ChatAgent** 是 CAMEL 系统中负责对话处理与智能回应的组件。当你将 BaseMessage 对象传递给 ChatAgent 时，ChatAgent 将根据系统和用户消息的内容，生成具有上下文感知的回复。

### Memory

在 Agent 系统中，Memory 模块是一个关键的组件，其主要功能是存储与检索信息，以支持agent 的学习和决策过程。Memory 模块通常包括以下几个核心功能：

1. 信息储存：能够高效存储多种形式的数据，包括事实、事件、规则和上下文信息，以便在需要时快速访问。
2. 信息检索：支持根据特定查询或上下文快速检索相关信息，帮助agent在需要时做出准确的判断。
3. 记忆更新：能够根据新的信息和经验动态更新存储内容，以反映环境或任务的变化。
4. 记忆管理：包括老化机制和优先级管理，确保较重要的信息能够长期保留，而不再需要的信息可以被有效清除，以优化存储资源的使用。

## WOW, Multiple Agent

多智能体（Multiple Agent）由多个相互作用的智能体组成，每个智能体都有自己的目标和策略。这些智能体可以相互通信、协作或竞争，以实现更复杂的行为和决策。

- 特点：
    - 协作：智能体之间可以协作，共同解决问题。
    - 竞争：智能体之间也可以存在竞争关系，如在拍卖或游戏场景中。
    - 自主性：每个智能体都有自己的决策过程，保持一定程度的自主性。
    - 复杂性：多智能体系统的设计与分析比单一智能体系统更复杂，因为需要考虑智能体之间的交互和协调。
    - 鲁棒性：多智能体系统通常具有更好的鲁棒性，因为系统的稳定性和效能不完全依赖于单一决策者。 

> CAMEL（Communicative Agents for "Mind" Exploration of Large Language Models）是一个开源的多智能体框架，专注于构建基于大语言模型的智能体交互系统。该框架通过角色扮演和结构化对话机制，实现智能体之间的有效协作。
> 
> 在 CAMEL 框架中，ChatAgent 是最基础的智能体单元，负责处理对话逻辑和任务执行。而 RolePlaying 和 Workforce 则是多智能体系统，用于协调多个智能体的协作。
> 
> - [论文](https://ghli.org/camel.pdf)
>
> - [项目主页](https://www.camel-ai.org/) 

在 CAMEL 中主要是多智能体的实现主要是通过角色扮演`Role-Playing`的方式，让智能体扮演特定的角色，并拥有相应角色的专业知识背景。这些智能体通过对话和合作来共同完成任务。

## 参考资料

[CAMEL Multi-Agent Tutorial](https://fmhw1n4zpn.feishu.cn/docx/AF4XdOZpIo6TOaxzDK8cxInNnCe)