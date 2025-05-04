import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
      "A full-stack Q&A platform inspired by Stack Overflow. Users can post questions, submit answers, and interact with a community. Includes authentication, voting, and a generative AI agent for smart code suggestions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: web,
    sourceCodeLink: "https://github.com/Adit122022/StackWave2",
  },
  {
    name: "Clarity AI",
    description:
      "Responsive image enhancement tool using React and Tailwind CSS. Integrated PicWish AI API for automatic image upscaling and quality enhancement.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "axios", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: mobile,
    sourceCodeLink: "https://github.com/Adit122022/YT-Study/tree/main/FRONTEND_PROJECTS/ImageInhancer",
  },
  {
    name: "Annova Chat App",
    description:
      "A real-time chat application built with React, Zustand, and Socket.IO. Features include authentication, profile management, theme switching, and image sharing via Cloudinary.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "zustand", color: "pink-text-gradient" },
    ],
    image: backend,
    sourceCodeLink: "https://github.com/Adit122022/ANNOVA_CHAT_APP",
  },
];

export { services, technologies, experiences, testimonials, projects };
