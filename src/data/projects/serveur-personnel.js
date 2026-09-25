import exampleImage from "../../../images/exemple.png";

const serveurPersonnel = {
  slug: "serveur-personnel",
  name: "Serveur personnel auto-hébergé",
  shortDescription:
    "Mise en place et administration d’un serveur Linux pour héberger des services et des sites web personnels.",
  date: "2024 – aujourd’hui",
  tags: ["Debian", "Docker", "Traefik", "Nginx", "SSH"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed erat consequat tincidunt.",
  images: [exampleImage],
  youtubeURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
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
};

export default serveurPersonnel;
