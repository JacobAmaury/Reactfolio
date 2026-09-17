export const profile = {
  name: "Amaury Jacob-Piacentini",
  shortName: "Amaury Jacob",
  tagline: "Étudiant en systèmes intelligents — IA, robotique et traitement du signal",
  intro:
    "Je développe des projets à l’interface entre logiciel, intelligence artificielle, électronique et systèmes embarqués. Je m’intéresse particulièrement à la robotique, au traitement d’images et de données ainsi qu’au développement Python et C/C++.",
  email: "Amaury_Francois.Jacob@etu.sorbonne-universite.fr",
  github: "https://github.com/JacobAmaury",
};

export const education = [
  {
    period: "2026 – 2027",
    title: "M2 Systèmes Intelligents",
    place: "Sorbonne Université",
    description:
      "Approfondissement en intelligence artificielle, robotique, interaction humain-machine, traitement d’images et de signaux.",
  },
  {
    period: "2025 – 2026",
    title: "M1 Systèmes Intelligents",
    place: "Sorbonne Université",
    description:
      "Formation en conception et développement de systèmes intelligents : IA, apprentissage profond, traitement d’images, de sons et du langage, robotique et interaction humain-machine.",
  },
  {
    period: "2023 – 2025",
    title: "Licence EEA",
    place: "Sorbonne Université",
    description:
      "Licence Électronique, Énergie Électrique et Automatique.",
  },
  {
    period: "2022 – 2023",
    title: "L2 Physique",
    place: "Sorbonne Université",
    description:
      "Formation en physique fondamentale et appliquée, combinant théorie et pratique.",
  },
  {
    period: "2020 – 2022",
    title: "Classe préparatoire TPC",
    place: "Lycée d’Arsonval — Saint-Maur-des-Fossés",
    description:
      "Formation intensive en physique, chimie et mathématiques.",
  },
];

export const skillGroups = [
  {
    title: "Développement",
    description:
      "Développement principalement en Python et C/C++, avec une attention portée à la structure du code, à l’intégration avec des systèmes existants et aux outils de développement sous Linux.",
    skills: ["Python", "C", "C++", "JavaScript", "React", "Git"],
  },
  {
    title: "Intelligence artificielle & données",
    description:
      "Traitement statistique des données, apprentissage automatique et profond, avec une application particulière au traitement d’images et à l’analyse de signaux.",
    skills: ["Deep Learning", "CNN", "TensorFlow", "NumPy", "Pandas", "Traitement d’image"],
  },
  {
    title: "Robotique & systèmes embarqués",
    description:
      "Développement de systèmes mêlant logiciel et matériel : microcontrôleurs, robotique, électronique et traitement de signaux.",
    skills: ["ROS", "Microcontrôleurs", "Arduino", "VHDL", "Électronique", "Systèmes embarqués"],
  },
  {
    title: "Systèmes & outils",
    description:
      "Utilisation quotidienne de Linux, Git et Docker pour le développement, les tests et l’auto-hébergement de services.",
    skills: ["Linux", "Docker", "Traefik", "Nginx", "SSH", "Fusion 360"],
  },
];

export const projects = [
  {
    slug: "stage-lip6",
    name: "Stage LIP6 — Analyse de textures en VHDL",
    shortDescription:
      "Implémentation en VHDL d’algorithmes d’analyse de textures initialement développés en C.",
    date: "Juin – août 2024",
    tags: ["C", "VHDL", "Traitement d’image", "FPGA"],
    githubRepositoryURL: "",
    externalURL: "",
    context:
      "Stage de développement réalisé au LIP6 dans le cadre d’un projet de recherche lié à l’analyse d’images.",
    objective:
      "Transposer vers une implémentation matérielle des algorithmes d’analyse de textures utilisant des matrices de co-occurrence.",
    work: [
      "Étude de l’algorithme de référence développé en C.",
      "Implémentation des traitements en VHDL.",
      "Adaptation des calculs aux contraintes d’une architecture matérielle.",
      "Validation du comportement de l’implémentation.",
    ],
    results:
      "Cette expérience m’a permis de travailler à l’interface entre traitement d’image, développement bas niveau et architecture matérielle.",
  },
  {
    slug: "serveur-personnel",
    name: "Serveur personnel auto-hébergé",
    shortDescription:
      "Mise en place et administration d’un serveur Linux pour héberger des services et des sites web personnels.",
    date: "2024 – aujourd’hui",
    tags: ["Debian", "Docker", "Traefik", "Nginx", "SSH"],
    githubRepositoryURL: "",
    externalURL: "",
    context:
      "Projet personnel visant à disposer d’une infrastructure auto-hébergée pour différents services et expérimentations.",
    objective:
      "Mettre en place une infrastructure simple, maintenable et sécurisée pour héberger plusieurs applications derrière un reverse proxy.",
    work: [
      "Administration d’un serveur Linux.",
      "Déploiement d’applications avec Docker et Docker Compose.",
      "Mise en place de Traefik comme reverse proxy.",
      "Configuration du HTTPS et des noms de domaine.",
      "Administration à distance via SSH.",
    ],
    results:
      "Le serveur héberge notamment des sites web et différents services personnels. Ce portfolio est lui-même déployé sur cette infrastructure.",
  },
  {
    slug: "instruments-midi",
    name: "Instruments MIDI avec Arduino",
    shortDescription:
      "Conception de contrôleurs MIDI physiques permettant de piloter des logiciels de production musicale.",
    date: "2024",
    tags: ["Arduino", "C/C++", "MIDI", "Électronique"],
    githubRepositoryURL: "",
    externalURL: "",
    context:
      "Projet personnel mêlant musique, électronique et programmation embarquée.",
    objective:
      "Créer des interfaces physiques personnalisées capables de contrôler des logiciels de production musicale comme Ableton Live.",
    work: [
      "Conception de l’interface matérielle.",
      "Programmation du microcontrôleur.",
      "Gestion des entrées physiques et génération de messages MIDI.",
      "Tests avec un logiciel de production musicale.",
    ],
    results:
      "Le projet a permis de réaliser des contrôleurs adaptés à mes besoins et d’approfondir ma pratique des microcontrôleurs et de l’électronique.",
  },
  {
    slug: "ia-echecs",
    name: "IA pour jouer aux échecs",
    shortDescription:
      "Développement en Python d’une première IA appliquée au jeu d’échecs.",
    date: "2023",
    tags: ["Python", "TensorFlow", "IA"],
    githubRepositoryURL: "",
    externalURL: "",
    context:
      "Projet personnel réalisé pour expérimenter l’apprentissage automatique sur un problème de décision.",
    objective:
      "Construire une première application d’intelligence artificielle capable d’interagir avec un environnement de jeu d’échecs.",
    work: [
      "Développement du projet en Python.",
      "Utilisation de TensorFlow.",
      "Expérimentation autour de la représentation d’un état de jeu et de la prise de décision.",
    ],
    results:
      "Ce projet a constitué une première mise en pratique de l’intelligence artificielle avant mon orientation vers les systèmes intelligents.",
  },
];
