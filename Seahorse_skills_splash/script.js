// --- 1. Données initiales (simule la base de données) ---
let students = [
  { name: 'Florian', cohorte: 27, passages: 10 },
  { name: 'Guillaume', cohorte: 27, passages: 20 },
  { name: 'Heytem', cohorte: 27, passages: 0 },
  { name: 'Loic', cohorte: 27, passages: 20 },
  { name: 'Lucas', cohorte: 27, passages: 0 },
  { name: 'Mathieu', cohorte: 27, passages: 20 },
  { name: 'Mathis', cohorte: 27, passages: 20 },
  { name: 'Melissa', cohorte: 27, passages: 10 },
  { name: 'Valentin', cohorte: 27, passages: 10 },
  { name: 'Yanis', cohorte: 27, passages: 0 },
  { name: 'Zaccaria', cohorte: 27, passages: 0 },
  { name: 'Yassin', cohorte: 27, passages: 20 },
  { name: 'Alison', cohorte: 28, passages: 0 },
  { name: 'Amar', cohorte: 28, passages: 0 },
  { name: 'Carlos', cohorte: 28, passages: 0 },
  { name: 'Cesar', cohorte: 28, passages: 0 },
  { name: 'Damien', cohorte: 28, passages: 0 },
  { name: 'Eugenio', cohorte: 28, passages: 0 },
  { name: 'Giosue', cohorte: 28, passages: 0 },
  { name: 'Gwen', cohorte: 28, passages: 0 },
  { name: 'Houcine', cohorte: 28, passages: 0 },
  { name: 'Hugo', cohorte: 28, passages: 0 },
  { name: 'Kenzo', cohorte: 28, passages: 0 },
  { name: 'Laetitia', cohorte: 28, passages: 0 },
  { name: 'Lena', cohorte: 28, passages: 0 },
  { name: 'Maxim', cohorte: 28, passages: 0 },
  { name: 'Sara', cohorte: 28, passages: 0 },
  { name: 'Valentin', cohorte: 28, passages: 0 }
];

const challengeTypes = ['Question', 'Manual Review', 'Whiteboard'];

const questionsByCohorte = {
  'all': [],
  '26': [], 
  '27': [
    "Que signifie l'acronyme OOP ?",
    "Définissez le concept de classe.",
    "Qu'est-ce qu'une instance ?",
    "Quelle est la différence entre une classe, un objet et une instance ?",
    "Qu'est-ce qu'une méthode en Python ?",
    "Expliquez le rôle de la méthode `__init__`.",
    "À quoi sert le mot-clé `self` en Python ?",
    "Quelle est la différence entre un attribut et une propriété en Python ?",
    "À quoi sert l'attribut spécial `__dict__` en Python ?",
    "Expliquez le rôle et l'utilité de la fonction `getattr()`.",
    "Quelle est la fonction de la méthode `__str__` en Python ?",
    "Quelle est la fonction de la méthode `__repr__` en Python ?",
    "Quelle est la différence entre une méthode d'instance, une méthode de classe et une méthode statique en Python ?",
    "Quelle est la différence entre un attribut de classe et un attribut d'instance ?",
    "Décrivez la hiérarchie des structures de données de listes en Python.",
    "Est-il possible d'implémenter des piles et des files avec des listes en Python ?",
    "Comment peut-on créer une liste vide en Python ?",
    "Comment ajouter un élément à la fin d'une liste ?",
    "Comment fusionner deux listes en une seule ?",
    "Comment trouver l'index d'un élément spécifique dans une liste ?",
    "Comment supprimer un élément spécifique d'une liste par sa valeur ?",
    "Comment récupérer une sous-liste (de 22 à 24 inclus) à partir d'une liste `my_list` contenant 10 nombres de 20 à 29 ?",
    "Comment compter le nombre d'occurrences d'un élément spécifique dans une liste ?",
    "Qu'est-ce qu'une donnée mutable en Python ?",
    "Qu'est-ce qu'une donnée immuable en Python ?",
    "Les listes sont-elles des types de données mutables en Python ?",
    "Les tuples sont-ils des types de données immuables en Python ?",
    "Comment accéder à un élément d'un tuple ?",
    "Comment peut-on modifier la valeur d'un tuple ?",
    "Si vous avez le tuple `my_tuple = (10, 20)`, comment le déstructurer pour assigner ses valeurs aux variables `x` et `y` ?",
    "Quelle est l'abstraction de structure de données d'un dictionnaire ?",
    "Les dictionnaires sont-ils des types de données immuables en Python ?",
    "Comment rechercher une donnée spécifique dans un dictionnaire ?",
    "En termes simples, qu'est-ce qu'un dictionnaire ?",
    "Comment ajouter une nouvelle paire clé-valeur à un dictionnaire ?",
    "Quelle méthode peut-on utiliser pour récupérer la valeur d'une clé d'un dictionnaire en toute sécurité ?",
    "Que fait le mot-clé `del` lorsqu'il est utilisé avec un dictionnaire ?",
    "Comment vérifier si une clé existe dans un dictionnaire ?",
    "Que se passe-t-il si vous tentez d'accéder à une clé qui n'existe pas dans un dictionnaire ?",
    "Qu'est-ce qu'un ensemble (`set`) en Python ?",
    "Les ensembles sont-ils des types de données mutables ou immuables ?",
    "Comment créer un ensemble vide en Python ?",
    "Comment ajouter et retirer un élément d'un ensemble ?",
    "Qu'est-ce qu'une intersection entre deux ou plusieurs ensembles, et comment l'obtenir ?",
    "Qu'est-ce qu'une union entre deux ou plusieurs ensembles, et comment l'obtenir ?",
    "Un ensemble peut-il contenir des éléments de différents types de données ?",
    "Qu'est-ce qu'une fonction `lambda` en Python ?",
    "Créez une fonction `lambda` qui multiplie deux nombres.",
    "Dans quel cas utilise-t-on une fonction `lambda` ?",
    "Que sont les fonctions `map`, `reduce` et `filter` ?",
    "Existe-t-il une boucle `do...while` en Python ?",
    "Qu'est-ce qu'une `docstring` et comment l'écrire ?",
    "Existe-t-il une structure `switch...case` en Python ?",
    "Comment écrire une fonction en Python qui gère différents cas à l'aide de conditions `if`, `elif` et `else` ?",
    "Quelle est la différence entre `import module` et `from module import *` ?",
    "Quelle est l'extension de fichier correcte pour les fichiers Python ?",
    "Que fait le mot-clé `break` ?",
    "Que fait le mot-clé `continue` ?",
    "Que fait le mot-clé `pass` en Python ?",
    "Qu'est-ce que la fonction `range` en Python et quels sont ses paramètres ?",
    "Que renvoie une fonction qui ne contient pas d'instruction `return` ?",
    "Qu'est-ce qu'une `f-string` en Python et comment l'utiliser ?",
    "Peut-on incrémenter ou décrémenter en Python en utilisant `++` ou `--` ?",
    "En termes simples, qu'est-ce qu'un module en Python ?",
    "Qu'est-ce qu'un `traceback` en Python ?",
    "Comment empêcher le code d'un script d'être exécuté lorsqu'il est importé ?",
    "Qu'est-ce que JSON ?",
    "Que signifie l'acronyme JSON ?",
    "Qu'est-ce que la sérialisation ?",
    "Qu'est-ce que la désérialisation ?",
    "Quelle est la différence entre les méthodes `json.dump()` et `json.dumps()` ?",
    "Quelle est la différence entre `json.load()` et `json.loads()` ?",
    "Que sont les `kwargs` et `args` et pourquoi les utilise-t-on avec des fonctions ?",
    "Que signifie API ?",
    "Qu'est-ce que le protocole HTTP ?",
    "Quelle est la différence entre HTTP et HTTPS ?",
    "Quel protocole HTTPS utilise-t-il pour la sécurité ?",
    "Quelles sont les principales caractéristiques d'une API REST ?",
    "Qu'est-ce que l'authentification ?",
    "Que représente chacun de ces codes de statut HTTP : 100, 200, 300, 400, 500 ?",
    "Peut-on tester n'importe quel type de requête HTTP (GET, POST, DEL...) directement depuis la barre d'adresse du navigateur ?",
    "Qu'est-ce qu'un serveur web ?",
    "Qu'est-ce que Flask ?",
    "Quelles sont les principales composantes d'une requête HTTP ?",
    "Quelles sont les principales composantes d'une réponse HTTP ?",
  ],
  '28': [
    "Qu'est-ce qu'Emacs et Vim ?",
    "Qu'est-ce que Git ?",
    "Qu'est-ce que GitHub ?",
    "Quelle est la différence entre Git et GitHub ?",
    "Les commandes `git add...` et `git commit...` sont-elles suffisantes pour pousser du code sur GitHub ?",
    "Parmi les messages suivants, lesquels sont les meilleurs messages de commit :\n- aaaaaa\n- Add the README.md file with the project description and a summary of the used commands.\n- please work\n- add files\n- Update the command argument on the file to output the correct format.",
    "Pour vous renseigner sur une nouvelle commande Linux, quelle est la première chose à faire ?",
    "Expliquez la commande `man`.",
    "Comment chercher un mot-clé sur la page `man` d'une commande Linux ?",
    "Est-il possible de faire un `git push` sans avoir fait un nouveau commit ?",
    "Que signifie RTFM ?",
    "Que fait la commande `cd -` ?",
    "Que se passe-t-il si l'on tape `cd` sans argument ?",
    "Quelle est la caractéristique spéciale des fichiers cachés sous Linux ?",
    "Qu'est-ce que Linux ?",
    "Qu'est-ce que Ubuntu ?",
    "Quelle est la différence entre Linux et Ubuntu ?",
    "Comment copier plusieurs fichiers en même temps avec la commande `cp` ?",
    "Qu'est-ce que le dossier `/tmp` sous le système Linux ?",
    "Quelle est la différence entre un chemin absolu et un chemin relatif sous Linux ?",
    "Comment peut-on facilement identifier un chemin absolu ?"
  ]
};

const projectsByCohorte = {
  'all': [],
  '27': [
    {
      name: 'Python - Hello World',
      tasks: Array.from({ length: 6 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - If/else, loop, function',
      tasks: Array.from({ length: 13 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - Data structure: lists, tuples',
      tasks: Array.from({ length: 13 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - Data structure: Set, Dictionaries',
      tasks: Array.from({ length: 13 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - Exceptions',
      tasks: Array.from({ length: 7 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - classes and Objects',
      tasks: Array.from({ length: 7 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - More Classes and Objects',
      tasks: Array.from({ length: 10 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - Input/Output',
      tasks: Array.from({ length: 13 }, (_, i) => `Tâche ${i}`)
    },
    {
      name: 'Python - Serialization',
      tasks: Array.from({ length: 4 }, (_, i) => `Tâche ${i}`)
    }
  ],
  '28': [
    // La liste des projets de la cohorte 28 est vide pour l'instant
  ]
};

// --- 2. Initialisation et gestion des données dans localStorage ---
function initializeData() {
  const storedData = localStorage.getItem('seahorseSkillSplashData');
  if (storedData) {
    students = JSON.parse(storedData);
  } else {
    localStorage.setItem('seahorseSkillSplashData', JSON.stringify(students));
  }
}

function saveData() {
  localStorage.setItem('seahorseSkillSplashData', JSON.stringify(students));
}

// --- 3. Fonction de tirage au sort (logique du coeur) ---
function performDraw() {
  const selectedCohorte = document.getElementById('cohorte-select').value;
  let filteredStudents = students;
  if (selectedCohorte !== 'all') {
    filteredStudents = students.filter(student => student.cohorte === parseInt(selectedCohorte));
  }
  
  if (filteredStudents.length === 0) {
    return null;
  }
  
  const totalPassages = filteredStudents.reduce((sum, student) => sum + student.passages, 0);
  const weights = filteredStudents.map(student => (totalPassages + 1) - student.passages);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const randomIndex = Math.random() * totalWeight;

  let chosenStudent = null;
  let accumulatedWeight = 0;
  for (let i = 0; i < filteredStudents.length; i++) {
    accumulatedWeight += weights[i];
    if (randomIndex < accumulatedWeight) {
      chosenStudent = filteredStudents[i];
      break;
    }
  }

  if (chosenStudent) {
    const studentIndex = students.findIndex(s => s.name === chosenStudent.name);
    students[studentIndex].passages++;
    saveData();
  }

  const studentCohorte = chosenStudent ? chosenStudent.cohorte : 'all';
  
  const availableProjects = projectsByCohorte['all'].concat(projectsByCohorte[studentCohorte] || []);
  const availableQuestions = questionsByCohorte['all'].concat(questionsByCohorte[studentCohorte] || []);

  const chosenChallengeType = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
  let challengeContent = '';

  if (chosenChallengeType === 'Question') {
    challengeContent = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  } else if (chosenChallengeType === 'Manual Review' || chosenChallengeType === 'Whiteboard') {
    const project = availableProjects[Math.floor(Math.random() * availableProjects.length)];
    const task = project.tasks[Math.floor(Math.random() * project.tasks.length)];
    challengeContent = `Projet : ${project.name} - Tâche : ${task}`;
  }

  return { student: chosenStudent, challenge: { type: chosenChallengeType, content: challengeContent } };
}

// --- 4. Affichage du résultat et déclenchement ---
function updateDisplay(result) {
  const studentDisplay = document.getElementById('drawn-student-display');
  const challengeTypeDisplay = document.getElementById('drawn-challenge-type-display');
  const challengeDisplay = document.getElementById('drawn-challenge-display');

  const finalStudentName = result.student ? result.student.name : 'Erreur lors du tirage';
  const finalChallengeContent = result.challenge.content;
  const finalChallengeType = result.challenge.type;

  const allStudents = students.map(s => s.name);
  const allChallengeTypes = challengeTypes;
  const allAvailableChallenges = questionsByCohorte[result.student.cohorte].concat(
    projectsByCohorte[result.student.cohorte].map(p => p.name + ' - Tâche X')
  );

  const animationDuration = 2000;
  const delayBetweenSteps = 1000;

  const animateElement = (element, dataArray, finalValue, duration, delay) => {
    setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < duration) {
          element.textContent = dataArray[Math.floor(Math.random() * dataArray.length)];
          requestAnimationFrame(animate);
        } else {
          element.textContent = finalValue;
        }
      };
      animate();
    }, delay);
  };

  animateElement(studentDisplay, allStudents, `Élève tiré : ${finalStudentName}`, animationDuration, 0);
  animateElement(challengeTypeDisplay, allChallengeTypes, `Type de défi : ${finalChallengeType}`, animationDuration, delayBetweenSteps);
  animateElement(challengeDisplay, allAvailableChallenges, `${finalChallengeContent}`, animationDuration, delayBetweenSteps * 2);
}

// Lier le bouton à la fonction de tirage
document.addEventListener('DOMContentLoaded', () => {
  initializeData();
  const drawButton = document.getElementById('draw-button');
  drawButton.addEventListener('click', () => {
    const result = performDraw();
    if (result) {
      updateDisplay(result);
    } else {
      alert("Aucun élève dans cette cohorte ne peut être tiré au sort.");
    }
  });
});