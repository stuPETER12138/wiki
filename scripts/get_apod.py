from nasa_apod import apod
from rich import print
import os
import urllib.request

KEY = "DEMO_KEY"
IMAGE_TITLE = "apod.jpg"
IMAGE_DIR = os.path.join(os.path.dirname(__file__), "../docs/public")
MD_NAME = "apod.md"
MD_DIR = os.path.join(os.path.dirname(__file__), "../docs/explore/aerospace")

def download_image(url):
    urllib.request.urlretrieve(url, os.path.join(IMAGE_DIR, IMAGE_TITLE))

def generate_md_file(title, hdurl, explanation, copyright):
    content = f"""# {title}

![{title}]({hdurl})

![APOD](../../../docs/public/apod.jpg)

## Explanation:
    
{explanation}
    
---

**copyright**: {copyright}
"""
    with open(os.path.join(MD_DIR, MD_NAME), "w", encoding="utf-8") as f:
        f.write(content)
    
try:
    apod_service = apod.APODService(KEY)
    picture_data = apod_service.get_picture()
    print(picture_data)
    download_image(picture_data['hdurl'])
    generate_md_file(
        picture_data['title'],
        picture_data['hdurl'],
        picture_data['explanation'],
        picture_data['copyright']
    )
    print("\nAPOD image and markdown file generated successfully!\n")
except Exception as e:
    print(f"{e} ! \n")
