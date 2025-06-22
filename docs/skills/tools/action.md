# GitHub Action

我第一次接触到 GitHub Action 是为该博客[部署网站](https://github.com/stuPETER12138/stuPETER12138.github.io)的时候，第二次接触是在自动更新我的 [GitHub profile](https://github.com/stuPETER12138) 的时候。那时候都是直接套用别人的模板，因此，我觉得有必要系统地学习一下它的工作方式。

> GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 你可以创建工作流，以便在推送更改到存储库时运行测试，或将合并的拉取请求部署到生产环境。

## 工作流

**工作流**是一个可配置的自动化过程，它将运行一个或多个作业。

### 创建工作流

在一个 repo 中，工作流文件放在 `.github/workflows` 目录下，文件必须使用 `.yml` 或 `.yaml` 作为文件扩展名。 YAML 通常是用于配置文件的标记语言。

 一个仓库可以有多个工作流，每个工作流都可以执行一组不同的任务，例如：

- 构建和测试拉取请求
- 在每次创建发布时，部署应用程序
- 每当创建新提议时，添加标签

### 基础语法

- **name**

    工作流的名称。

- **run-name**

    从工作流生成的工作流运行的名称。

- **on**

    用于定义哪些事件可以触发工作流运行。如果指定多个活动类型，则只需要发生其中一种事件活动类型就可触发工作流。

    [触发工作流的事件 - GitHub 文档](https://docs.github.com/zh/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#scheduled-events)

- **permisions**

    可以使用 `permissions` 修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便只授予所需的最低访问权限。

- **env**

    可用于工作流中所有作业的步骤的变量的 `map`。

- **defaults**

    使用 `defaults` 创建将应用于工作流中所有作业的默认设置的 `map`。

- **jobs**

    工作流运行由一个或多个 `jobs` 组成，默认情况下并行运行。

### 工作流模板

GitHub 为各种语言和工具提供工作流模板。 在仓库中设置工作流程时，GitHub 会分析仓库中的代码，并根据仓库中的语言和框架推荐工作流程。 例如，如果使用 Node.js，则 GitHub 将建议使用工作流模板文件来安装 Node.js 包并运行测试。 可以搜索和筛选以查找相关的工作流模板。



> [GitHub Actions 文档 - GitHub 文档](https://docs.github.com/zh/actions)