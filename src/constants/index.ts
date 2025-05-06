import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import stackwaveImage from "../assets/stackwace.png";
import clarityImage from "../assets/1.png";
import annovaImage from "../assets/Annova.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Web Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Tech Enthusiast", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  
  {
    name: "Stackwave",
    description:
      "A full-stack Q&A platform inspired by Stack Overflow. Features include secure authentication, upvoting, and a built-in AI assistant for code-related queries. Built with React, Node.js, and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: stackwaveImage,
    sourceCodeLink: "https://github.com/Adit122022/StackWave2",
  },
  {
    name: "Clarity AI",
    description:
      "A sleek, responsive image enhancer using the PicWish API. Allows users to upscale and improve image quality instantly. Developed with React and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "axios", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: clarityImage,
    sourceCodeLink:
      "https://github.com/Adit122022/YT-Study/tree/main/FRONTEND_PROJECTS/ImageInhancer",
  },
  {
    name: "Annova Chat App",
    description:
      "A modern real-time chat app with user authentication, profile management, theming, and image sharing. Built with React, Zustand, and Socket.IO for seamless communication.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "zustand", color: "pink-text-gradient" },
    ],
    image: annovaImage,
    sourceCodeLink: "https://github.com/Adit122022/ANNOVA_CHAT_APP",
  },
];


export { services, technologies, experiences, testimonials, projects };
