"""
同步博客到 README.md
"""
import os
import re
import glob
from pathlib import Path

# 项目根目录
ROOT_DIR = Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# docs目录
DOCS_DIR = ROOT_DIR / 'docs'
# README文件路径
README_PATH = ROOT_DIR / 'README.md'

# 博客分类映射（根据config.mts中的配置）
CATEGORY_MAP = {
    'skills': '技能与工具',
    'ml': '机器学习',
    'explore': '自由探索',
    'thoughts': '归途思语'
}

# 忽略的目录
IGNORE_DIRS = ['.vitepress', 'public', 'images']
# 忽略的文件
IGNORE_FILES = ['index.md']

def extract_title(content):
    """从markdown内容中提取标题"""
    # 尝试匹配YAML front matter中的title
    yaml_match = re.search(r'^---\s*\n.*?title:\s*"?([^"\n]+)"?.*?\n---', content, re.DOTALL)
    if yaml_match:
        return yaml_match.group(1).strip()
    
    # 尝试匹配第一个标题
    title_match = re.search(r'^\s*#\s+(.+)$', content, re.MULTILINE)
    if title_match:
        return title_match.group(1).strip()
    
    return None

def get_blog_entries():
    """获取所有博客条目"""
    entries = []
    
    # 遍历docs目录下的所有markdown文件
    for md_file in glob.glob(str(DOCS_DIR / '**' / '*.md'), recursive=True):
        md_path = Path(md_file)
        
        # 跳过忽略的目录和文件
        if any(ignore_dir in str(md_path) for ignore_dir in IGNORE_DIRS) or md_path.name in IGNORE_FILES:
            continue
        
        # 读取文件内容
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"无法读取文件 {md_file}: {e}")
            continue
        
        # 提取标题
        title = extract_title(content)
        if not title:
            title = md_path.stem  # 如果无法提取标题，使用文件名
        
        # 获取分类（基于目录结构）
        relative_path = md_path.relative_to(DOCS_DIR)
        category = relative_path.parts[0] if len(relative_path.parts) > 0 else 'uncategorized'
        
        # 获取URL路径（相对于docs目录）
        url_path = str(relative_path).replace('\\', '/')
        url_path = url_path[:-3]  # 移除.md后缀
        
        entries.append({
            'title': title,
            'category': category,
            'url_path': url_path,
            'full_path': md_file
        })
    
    return entries

def generate_toc(entries):
    """生成目录"""
    toc = []
    toc.append("## 博客内容")
    toc.append("")
    
    # 按分类组织条目
    categories = {}
    for entry in entries:
        category = entry['category']
        if category not in categories:
            categories[category] = []
        categories[category].append(entry)
    
    # 生成分类目录
    for category, category_entries in sorted(categories.items()):
        category_name = CATEGORY_MAP.get(category, category)
        toc.append(f"### {category_name}")
        toc.append("")
        
        # 按标题排序
        category_entries.sort(key=lambda x: x['title'])
        
        for entry in category_entries:
            toc.append(f"- [{entry['title']}](https://stupeter12138.github.io/{entry['url_path']})")
        
        toc.append("")
    
    return "\n".join(toc)

def update_readme():
    """更新README.md文件"""
    # 读取当前README内容
    try:
        with open(README_PATH, 'r', encoding='utf-8') as f:
            current_content = f.read()
    except Exception as e:
        print(f"无法读取README文件: {e}")
        current_content = ""
    
    # 提取README的头部内容
    header_match = re.search(r'## 博客大纲', current_content, re.DOTALL)
    header = current_content[:header_match.start()] if header_match else ""
    
    # 获取博客条目并生成目录
    entries = get_blog_entries()
    toc = generate_toc(entries)
    
    # 组合新的README内容
    new_content = f"{header}\n{toc}"
    
    # 写入README文件
    try:
        with open(README_PATH, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"README.md 已更新，共同步了 {len(entries)} 篇博客文章")
    except Exception as e:
        print(f"无法写入README文件: {e}")

if __name__ == "__main__":
    update_readme()