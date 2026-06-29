import json
import re

from bs4 import BeautifulSoup, NavigableString, Tag

def generer_readme(fichier_html):
    """
    Génère un README.md a partir du HTML du projet.
    """
    try:
        with open(fichier_html, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except FileNotFoundError:
        print(f"Erreur: Le fichier '{fichier_html}' n'a pas été trouvé.")
        return
    except Exception as e:
        print(f"Erreur lors de la lecture du fichier HTML: {e}")
        return

    soup = BeautifulSoup(html_content, 'html.parser')
    readme_content = []

    def clean_project_title(raw_title):
        title = raw_title.strip()
        title = title.split('|', 1)[0].strip()
        title = re.sub(r'^Project:\s*', '', title)
        return title

    def extract_project_markdown():
        markdown_script = soup.select_one('div.project-description-markdown script.project-markdown-data')
        if not markdown_script or not markdown_script.string:
            return ''

        try:
            markdown_text = json.loads(markdown_script.string)
        except json.JSONDecodeError:
            markdown_text = markdown_script.string.strip().strip('"')

        markdown_text = markdown_text.replace('\r\n', '\n').strip()
        markdown_lines = markdown_text.splitlines()

        while markdown_lines and not markdown_lines[0].strip():
            markdown_lines.pop(0)

        if markdown_lines and markdown_lines[0].lstrip().startswith('!['):
            markdown_lines.pop(0)

        while markdown_lines and not markdown_lines[0].strip():
            markdown_lines.pop(0)

        return '\n'.join(markdown_lines).strip()

    def render_inline(node):
        if isinstance(node, NavigableString):
            return str(node)

        if not isinstance(node, Tag):
            return ''

        if node.name == 'br':
            return '\n'

        if node.name == 'code':
            return f"`{node.get_text(strip=True)}`"

        if node.name in ('strong', 'b'):
            return f"**{render_children(node).strip()}**"

        if node.name in ('em', 'i'):
            return f"*{render_children(node).strip()}*"

        if node.name == 'a':
            return node.get_text(' ', strip=True)

        return render_children(node)

    def render_children(node):
        parts = []
        for child in node.children:
            if isinstance(child, NavigableString):
                parts.append(str(child))
            else:
                parts.append(render_inline(child))
        return ''.join(parts)

    def render_block(node, indent_level=0):
        if isinstance(node, NavigableString):
            text = str(node).strip()
            return f"{text}\n\n" if text else ''

        if not isinstance(node, Tag):
            return ''

        if node.name in ('p',):
            text = render_children(node).strip()
            text = re.sub(r'\s+', ' ', text)
            return f"{text}\n\n" if text else ''

        if node.name in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            level = int(node.name[1])
            text = render_children(node).strip()
            return f"{'#' * level} {text}\n\n" if text else ''

        if node.name == 'ul':
            items = []
            for li in node.find_all('li', recursive=False):
                item_text = render_children(li).strip()
                if item_text:
                    items.append('  ' * indent_level + f"* {item_text}")
            return '\n'.join(items) + ('\n\n' if items else '')

        if node.name == 'ol':
            items = []
            for index, li in enumerate(node.find_all('li', recursive=False), start=1):
                item_text = render_children(li).strip()
                if item_text:
                    items.append('  ' * indent_level + f"{index}. {item_text}")
            return '\n'.join(items) + ('\n\n' if items else '')

        if node.name == 'pre':
            code_block = node.find('code')
            code_text = code_block.get_text() if code_block else node.get_text()
            language = ''
            if code_block:
                for class_name in code_block.get('class', []):
                    if class_name.startswith('language-'):
                        language = class_name.split('-', 1)[1]
                        break
            return f"```{language}\n{code_text.strip()}\n```\n\n"

        if node.name == 'blockquote':
            text = render_children(node).strip()
            if not text:
                return ''
            return '\n'.join(f"> {line}" for line in text.splitlines()) + '\n\n'

        if node.name == 'div':
            return ''.join(render_block(child, indent_level) for child in node.children)

        return render_children(node)

    def extract_task_cards():
        return [
            card for card in soup.select('div.task-card')
            if card.select_one('.task-description-content')
        ]

    def extract_task_title(task_card):
        title_node = task_card.select_one('h3.panel-title > span')
        if title_node:
            title = title_node.get_text(' ', strip=True)
        else:
            title_node = task_card.select_one('h3.panel-title')
            title = title_node.get_text(' ', strip=True) if title_node else 'Untitled task'

        return re.sub(r'^\d+\.\s*', '', title)

    def extract_task_body(task_card):
        content = task_card.select_one('.task-description-content')
        if not content:
            return ''

        body = ''.join(render_block(child) for child in content.children).strip()
        return f"{body}\n\n" if body else ''

    # --- 1. Bannière  ---
    readme_content.append('<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>\n\n')

    # --- 2. Titre du Projet  ---
    titre_source = soup.title.get_text(strip=True) if soup.title else "Titre du Projet (à remplacer)"
    titre_projet = clean_project_title(titre_source)
    readme_content.append(f"# {titre_projet}\n\n")

    # --- 3. Sommaire  ---
    readme_content.append("## Table of Contents :\n\n")
    tasks = extract_task_cards()
    for i, task in enumerate(tasks):
        task_title = extract_task_title(task)
        readme_content.append(f"  - [{i}. {task_title}](#subparagraph{i})\n")

    # --- 4. Description du projet  ---
    project_markdown = extract_project_markdown()
    if project_markdown:
        readme_content.append(project_markdown)
        readme_content.append("\n\n")

    # --- 5. Consignes des Tâches ---
    readme_content.append("\n## Task\n")

    for i, task in enumerate(tasks):
        task_title = extract_task_title(task)
        readme_content.append(f"### {i}. {task_title} <a name='subparagraph{i}'></a>\n\n")
        readme_content.append(extract_task_body(task))

        readme_content.append("---\n\n")

    # --- 6. Authors ---
    readme_content.append("\n## Authors\n")
    readme_content.append("Ksyv - [GitHub Profile](https://github.com/ksyv)\n")

    # --- Écriture du fichier README.md ---
    with open("README.md", "w", encoding="utf-8") as f:
        f.write("".join(readme_content))

    print("README.md généré avec succès!")

generer_readme("projet.html") 