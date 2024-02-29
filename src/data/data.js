import transcendance from "../assets/transcendance.png";
import sohube from "../assets/sohube.png";
import inception from "../assets/inception.webp";
import minishell from "../assets/minishell.jpg";
import webserv from "../assets/webserv.jpeg";
import containers from "../assets/containers.png";
import { Icons } from "../components/icons";

export const projects = [
  {
    title: "PING PONG GAME",
    tags: ["Mongo", "NestJs", "NextJs", "Node"],
    description:
      "This is a ping pong game that I made with my friends. It's a simple game that you can play with your friends. ",
    image: transcendance,
    link: "https://github.com/Forstman1/ft_transcendence",
  },
  {
    title: "SOHUBE",
    tags: ["Mongo", "NestJs", "ReactJs", "Node"],
    description:
      "this is a social media app that I made. It is a simple social media app that you can share your thoughts with your friends.",
    image: sohube,
    link: "https://github.com",
  },
  {
    title: "Inception",
    description:
      "This project aims to broaden knowledge of system administration by using Docker. virtualize several Docker images, creating them in new personal virtual machine",
    image: inception,
    link: "https://github.com/Forstman1/inception-42",
  },
  {
    title: "Webserv",
    description:
      "This project is about writing your own HTTP server. it can be tested in actual browser. HTTP is one of the most used protocols on the internet",
    image: webserv,
    link: "https://github.com/Forstman1/Webserv_42",
  },
  {
    title: "Containers",
    description:
      "This project aims implementing a few container types of the C++ standard template library. Vector, Stack, Map",
    image: containers,
    link: "https://github.com/Forstman1/FT_containers",
  },
  {
    title: "Minishell",
    description:
      "This project is about creating a simple shell. yes, my own little bash.",
    image: minishell,
    link: "https://github.com/Forstman1/Minishell",
  },
  {
    title: "Philosophers",
    description:
      "This project aims to broaden knowledge of threading a process. learn how to create thread and discovring mutexes in C",
    image:
      "https://www.thecrazyprogrammer.com/wp-content/uploads/2017/06/Dining-Philosophers-Problem.png",
    link: "https://github.com/Forstman1/Philosophers-42",
  },
  {
    title: "Cub3d",
    description:
      "This project is inspired by the world-famous wolfenstein 3d game, wish was first FPS ever, it enable to explore ray-casting world.",
    image: "https://www.gamereactor.fr/media/59/_3865963.png",
    link: "https://github.com/Forstman1/cub3D_42",
  },
];

export const skills = [
  {
    title: "Docker",
    image: "https://cdn.svgporn.com/logos/docker-icon.svg",
    link: "https://www.docker.com/",
  },

  {
    title: "Git",
    image: "https://cdn.svgporn.com/logos/git-icon.svg",
    link: "https://git-scm.com/",
  },
  {
    title: "React",
    image: "https://cdn.svgporn.com/logos/react.svg",
    link: "https://reactjs.org/",
  },
  {
    title: "Node",
    image: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
    link: "https://nodejs.org/en/",
  },
  {
    title: "Typescript",
    image: "https://cdn.svgporn.com/logos/typescript-icon.svg",
    link: "https://www.typescriptlang.org/",
  },
];

export const info = {
  title: "Mobile Developer",
  name: "Sami Hafid",
  description:
    "I am a full-stack developer with a passion for creating innovative solutions. I am proficient in a variety of programming languages and have experience working with a range of frameworks and libraries. I am a quick learner and a team player, and I am always looking for opportunities to expand my skill set and take on new challenges. I am currently seeking a position as a full-stack developer where I can contribute to a dynamic team and make a meaningful impact.",
  email: "sami.hafid.hs@gmail.com",
  location: "Morocco, Casa",
  socials: [
    {
      link: "https://x.com",
      icon: Icons.twitter,
    },
    {
      link: "https://instagram.com/sami._.hafid",
      icon: Icons.instagram,
    },
    {
      link: "https://www.github.com/Forstman1",
      icon: Icons.github,
    },
    {
      link: "https://www.linkedin.com/in/sami-hafid-b551a3195/",
      icon: Icons.linkedin,
    },
  ],
};

export const educationInfo = [
  {
    title: "1337",
    date: "2021 - 2024",
    description:
      "I am a student at 1337, a coding school that is part of 42 network that offers a unique and innovative approach to learning. I am currently working on a variety of projects and honing my skills in a range of programming languages and technologies.",
  },
  {
    title: "University Hassan 2",
    date: "2019 - 2021",
    description: "I studied Economie  at University Hassan 2 in Morocco for 2 years. I learned a lot about economics and finance, and I developed a strong foundation in these subjects",
  },
  {
    title: "High School",
    date: "2016 - 2019",
    description:
      "I completed my high school education at a local high school in Morocco. I studied a range of subjects and developed a strong foundation in mathematics and science.",
  },
];

export const workInfo = [
  {
    title: "Mobile Developer Intern",
    company: "Agenz",
    date: "2024 - Present",
    description:
      "I am currently working as an intern mobile developer at Agenz, a leading software development company. I am responsible for developing and maintaining mobile applications using react native and other technologies.",
  },
  {
    title: "Freelance Work",
    date: "2023 - 2024",
    description:
      "I have worked as a freelance developer on a variety of projects. I have experience working with clients to develop custom solutions and deliver high-quality code.",
  },
];
