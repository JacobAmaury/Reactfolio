import { projects as originalProjects } from "./projects";
import { featuredProjects } from "./projects-featured";
export const projects = [
  ...featuredProjects,
  ...originalProjects.filter((project) =>
    !featuredProjects.some((featured) => featured.slug === project.slug)
  ),
];

export const profile = {
  name: "Amaury Jacob-Piacentini",
  shortName: "Amaury Jacob",
  tagline: "Intelligent Systems student — AI, robotics, and signal processing",
  intro:
    "I build projects at the intersection of software, artificial intelligence, electronics, and embedded systems. I'm particularly interested in robotics, image and data processing, and Python and C/C++ development.",
  email: "Amaury_Francois.Jacob@etu.sorbonne-universite.fr",
  github: "https://github.com/JacobAmaury",
};

export const education = [
  {
    period: "2026 – 2027",
    title: "MSc in Intelligent Systems (second year)",
    place: "Sorbonne Université",
    description:
      "Advanced studies in artificial intelligence, robotics, human-computer interaction, image processing, and signal processing.",
  },
  {
    period: "2025 – 2026",
    title: "MSc in Intelligent Systems (first year)",
    place: "Sorbonne Université",
    description:
      "Study of intelligent systems design and development, including AI, deep learning, image, audio, and language processing, robotics, and human-computer interaction.",
  },
  {
    period: "2023 – 2025",
    title: "Bachelor's degree in Electrical Engineering, Energy, and Automation",
    place: "Sorbonne Université",
    description:
      "Undergraduate studies in electronics, electrical energy, and automation.",
  },
  {
    period: "2022 – 2023",
    title: "Second-year undergraduate studies in Physics",
    place: "Sorbonne Université",
    description:
      "Studies in fundamental and applied physics, combining theory and practice.",
  },
  {
    period: "2020 – 2022",
    title: "TPC preparatory program",
    place: "Lycée d’Arsonval — Saint-Maur-des-Fossés",
    description:
      "Intensive studies in physics, chemistry, and mathematics.",
  },
];

export const skillGroups = [
  {
    title: "Software Development",
    description:
      "Primarily develop in Python and C/C++, with a focus on code structure, integration with existing systems, and Linux development tools.",
    skills: ["Python", "C", "C++", "JavaScript", "React", "Git"],
  },
  {
    title: "Artificial Intelligence & Data",
    description:
      "Statistical data processing, machine learning, and deep learning, with a particular focus on image processing and signal analysis.",
    skills: ["Deep Learning", "CNNs", "TensorFlow", "NumPy", "Pandas", "Image Processing"],
  },
  {
    title: "Robotics & Embedded Systems",
    description:
      "Develop systems that combine software and hardware, including microcontrollers, robotics, electronics, and signal processing.",
    skills: ["ROS", "Microcontrollers", "Arduino", "VHDL", "Electronics", "Embedded Systems"],
  },
  {
    title: "Systems & Tools",
    description:
      "Daily use of Linux, Git, and Docker for development, testing, and self-hosting services.",
    skills: ["Linux", "Docker", "Traefik", "Nginx", "SSH", "Fusion 360"],
  },
];

