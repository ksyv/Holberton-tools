# Guide d'utilisation de `Readme_holbie_scrapper`

Ce document explique la procédure complète pour partir d'un clone du dépôt et générer le `README.md` à partir du fichier HTML du projet.

## 1. Se placer dans le bon dossier

Ouvre un terminal et va dans le dossier du projet :

```bash
cd /home/ksyv/Holberton-tools/Readme_holbie_scrapper
```

Le script `extract.py` lit `projet.html` et écrit le fichier `README.md` dans le dossier courant. Il faut donc lancer les commandes depuis `Readme_holbie_scrapper`.

## 2. Créer un environnement virtuel

Crée un environnement virtuel Python isolé :

```bash
python3 -m venv .venv
```

Active ensuite l'environnement :

```bash
source .venv/bin/activate
```

Quand l'environnement est activé, tu dois voir `(.venv)` au début de la ligne du terminal.

## 3. Installer les dépendances

Installe les paquets nécessaires avec `requirements.txt` :

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

La dépendance principale est `beautifulsoup4`.

## 4. Générer le README

Lance le script :

```bash
python3 extract.py
```

Si tout se passe bien, le terminal affiche :

```text
README.md généré avec succès!
```

Le fichier `README.md` est alors créé ou mis à jour dans le dossier `Readme_holbie_scrapper`.

## 5. Vérifier le résultat

Ouvre le fichier généré pour vérifier son contenu :

```bash
ls -l README.md
```

Tu peux aussi l’ouvrir directement dans VS Code ou avec n’importe quel éditeur.

## Dépannage rapide

Si tu obtiens l'erreur `ModuleNotFoundError: No module named 'bs4'`, cela veut dire que les dépendances ne sont pas installées dans l'environnement actif. Active le venv avec `source .venv/bin/activate`, puis relance :

```bash
pip install -r requirements.txt
```

## 6. Si tu veux générer un README à partir d'un autre HTML

Le script appelle actuellement :

```python
generer_readme("projet.html")
```

Si tu veux utiliser un autre fichier HTML, remplace ce nom par le fichier voulu, puis relance :

```bash
python3 extract.py
```

## 7. Désactiver l'environnement virtuel

Une fois terminé :

```bash
deactivate
```

## Résumé rapide

```bash
cd /home/ksyv/Holberton-tools/Readme_holbie_scrapper
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 extract.py
```

Après ça, ton `README.md` est prêt.