# Python's best friend

> [TOML：为人而生的配置文件格式。](https://toml.io/cn/)

```toml
# hello_toml.toml
# 键值对
int1 = 1
flt1 = 1.0e-2
bool1 = true
key = "value"
str = "Roses are red\nViolets are blue"
array = [[1, 2, 3.0], [4.0, 5, 6]]
# 字面量字符串
winpath  = 'C:\Users\nodejs\templates'
# 表
[table]
key1 = "hello"
key2 = "world"

```

```python
# hello_toml
import tomllib
from rich import print as rprint

with open("./hello_toml.toml", "rb") as f:
    data = tomllib.load(f)
    rprint(data)

"""
{
    'int1': 1,
    'flt1': 0.01,
    'bool1': True,
    'key': 'value',
    'str': 'Roses are red\nViolets are blue',
    'array': [[1, 2, 3.0], [4.0, 5, 6]],
    'winpath': 'C:\\Users\\nodejs\\templates',
    'table': {'key1': 'hello', 'key2': 'world'}
}
"""

```

