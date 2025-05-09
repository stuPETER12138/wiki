# UV

## 安装

[Installation | uv](https://docs.astral.sh/uv/getting-started/installation/)

## 项目管理

初始化

```bash
uv init [project_name]
cd [project_name]

# run a script
uv run main.py
```

管理依赖

```bash
uv add [dependency]

uv remove [dependency]

# view the dependency tree of the project
uv tree
```

## 手动管理虚拟环境

创建虚拟环境

```bash
uv venv --python [python_version]
```

包管理

`pip` -> `uv pip`

```bash
uv pip install [dependency]

uv pip uninstall [dependency]

uv pip list

uv pip show [dependency]

uv pip list

uv pip tree
```

## 使用工具

```bash
uvx ruff
```

