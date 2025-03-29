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
