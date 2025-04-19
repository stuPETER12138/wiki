from nasa_apod import apod
from rich import print
import os

KEY = "DEMO_KEY"
MD_NAME = "apod.md"
MD_DIR = os.path.join(os.path.dirname(__file__), "../docs/explore/aerospace")

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
        picture_data['explanation']
    )
    print("\nAPOD image and markdown file generated successfully!\n")
except Exception as e:
    print(f"💔 {e} ! \n")
