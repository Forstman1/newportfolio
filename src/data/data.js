import transcendance from '../assets/transcendance.png';
import sohube from '../assets/sohube.png';
import inception from '../assets/inception.webp';
import minishell from '../assets/minishell.jpg';

export const projects = [
    {
        title: 'PING PONG GAME',
        tags: ['Mongo', 'NestJs', 'NextJs', 'Node'],
        description: "This is a ping pong game that I made with my friends. It's a simple game that you can play with your friends. ",
        image: transcendance,
        code: 'github.com',
    },
    {
        title: 'SOHUBE',
        tags: ['Mongo', 'NestJs', 'ReactJs', 'Node'],
        description: 'this is a social media app that I made. It is a simple social media app that you can share your thoughts with your friends.',
        image: sohube,
        code: 'github.com',
    },
        {
          title: "Inception",
          description: "This project aims to broaden knowledge of system administration by using Docker. virtualize several Docker images, creating them in new personal virtual machine",
          image: inception,
          github: "https://github.com/Forstman1/inception-42"
        },
        // {
        //   title: "Webserv",
        //   Description: "This project is about writing your own HTTP server. it can be tested in actual browser. HTTP is one of the most used protocols on the internet",
        //   image: webserv,
        //   github: "https://github.com/Forstman1/Webserv_42"
        // },
        // {
        //   title: "Containers",
        //   Description: "This project aims implementing a few container types of the C++ standard template library. Vector, Stack, Map",
        //   image: containers,
        //   github: "https://github.com/Forstman1/FT_containers"
        // },
        {
          title: "Minishell",
          description: "This project is about creating a simple shell. yes, my own little bash.",
          image: minishell,
          github: "https://github.com/Forstman1/Minishell"
        },
        {
          title: "Philosophers",
          description: "This project aims to broaden knowledge of threading a process. learn how to create thread and discovring mutexes in C",
          image: "https://www.thecrazyprogrammer.com/wp-content/uploads/2017/06/Dining-Philosophers-Problem.png",
          github: "https://github.com/Forstman1/Philosophers-42"
        },
        {
          title: "Cub3d",
          description: "This project is inspired by the world-famous wolfenstein 3d game, wish was first FPS ever, it enable to explore ray-casting world.",
          image: "https://www.gamereactor.fr/media/59/_3865963.png",
          github: "https://github.com/Forstman1/cub3D_42"
        },
]