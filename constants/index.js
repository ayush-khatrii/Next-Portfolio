import { IoLogoCss3, IoLogoGithub, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiMinutemailer, SiMongodb, SiNextdotjs, SiSocketdotio, SiTypescript } from "react-icons/si";
import { SiShadcnui, SiExpress, SiAppwrite } from "react-icons/si";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { VscJson, VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFramerLogoFill } from "react-icons/pi";

export const projectsData = [
  {
    title: "Discuss-It Chat App",
    description: "Discuss-It is a chat app that lets users message in real time, manage friend requests, share files, and create groups. It's designed to make communication easy and interactive. Stay connected and collaborate with ease!",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://discussitt.vercel.app",
    githubLink: "https://github.com/ayush-khatrii/discussIt",
    stack: [
      {
        icon: <FaReact size={20} />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={20} />,
        name: "Node.js",
      },
      {
        icon: <SiMongodb size={20} />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress size={20} />,
        name: "Express",
      },
      {
        icon: <BiLogoTailwindCss size={20} />,
        name: "tailwindcss",
      },
      {
        icon: <SiSocketdotio size={20} />,
        name: "socketio",
      }
    ],
  },
  {
    title: "Night Node",
    description: "NightNode - Color Theme for VS Code",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://marketplace.visualstudio.com/items?itemName=AyushKhatri.nightnode",
    githubLink: "https://github.com/ayush-khatrii/night-node",
    stack: [
      {
        icon: <VscJson size={20} />,
        name: "json",
      }
    ]
  },
  {
    title: "Hotel Booking App",
    description: " Developed a fullstack booking website allowing users to create accounts, search and book rooms, and make          payments using the Razorpay API.",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://marutihotel.netlify.app",
    githubLink: "https://github.com/ayush-khatrii/hotel-project-FinalYear",
    stack: [
      {
        icon: <FaReact size={20} />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={20} />,
        name: "Node.js",
      },
      {
        icon: <SiMongodb size={20} />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress size={20} />,
        name: "Express",
      },
      {
        icon: <BiLogoTailwindCss size={20} />,
        name: "tailwindcss",
      }
    ],
  },
  {
    title: "A.I Saas Landing Page",
    description: "CodeX is a sleek, responsive SaaS landing page built with React, Next.js, Tailwind CSS, and shadcn/ui—showcasing my front-end skills with dynamic, interactive design.",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://codex-saas.vercel.app/",
    githubLink: "https://github.com/ayush-khatrii/saas-ui",
    stack: [
      {
        icon: <SiNextdotjs size={20} />,
        name: "Nextjs",
      },
       {
        icon: <FaReact size={20} />,
        name: "Reactjs",
      },
      {
        icon: <BiLogoTypescript size={20} />,
        name: "Typescript",
      },
      {
        icon: <PiFramerLogoFill size={20} />,
        name: "Framer-Motion",
      },
      {
        icon: <SiShadcnui size={20} />,
        name: "shadcn-ui",
      },
    ]
  },
];
export const frontendTechStack = [
  {
    src: <IoLogoHtml5 size={50} />,
    name: "Html",
  },
  {
    src: <IoLogoJavascript size={50} />,
    name: "Javascript",
  },
  {
    src: <IoLogoCss3 size={50} />,
    name: "Css",
  },
  {
    src: <FaReact size={50} />,
    name: "React.js",
  },
  {
    src: <FaBootstrap size={50} />,
    name: "Bootstrap",
  },
  {
    src: <SiTypescript size={50} />,
    name: "Typescript",
  },
  {
    src: <SiShadcnui size={50} />,
    name: "ShadCn UI",
  },

];
export const backendTechStack = [
  {
    src: <IoLogoNodejs size={50} />,
    name: "Node.js",
  },
  {
    src: <SiExpress size={50} />,
    name: "Express.js",
  },
  {
    src: <BiLogoMongodb size={50} />,
    name: "MongoDB",
  },
  {
    src: <SiNextdotjs size={50} />,
    name: "Nextjs",
  },
  {
    src: <VscVscode size={50} />,
    name: "VS Code",
  },
  {
    src: <IoLogoGithub size={50} />,
    name: "GitHub",
  },
  {
    src: <SiAppwrite size={50} />,
    name: "Appwrite",
  },

];
export const experience = [
  {
    id: "mgcorp",
    label: "Preeti Agri Farms",
    position: "Frontend Developer",
    link: "#",
    date: "Jun - July 2024",
    techStack: ["Next.js", "Javascript", "Tailwind CSS"],
    content: `Developed a responsive business website from scratch using Next.js, ShadCN UI, and Tailwind CSS, featuring a product showcase with a list of all products and individual product pages. Optimized for SEO and integrated Google Analytics for tracking. Deployed the website on Vercel,ensuring seamless accessibility and performance.`
  },
];
export const contactMe = [
  {
    name: "Email",
    link: "mailto:khatriayush2003@gmail.com",
    icon: <SiMinutemailer size={50} />,
  },
  {
    name: "Insta",
    link: "https://instagram.com/ayush.khatrii",
    icon: <IoLogoInstagram size={50} />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ayushkhatrii",
    icon: <IoLogoLinkedin size={50} />,
  },
  {
    name: "x",
    link: "https://x.com/khatri_ayush15",
    icon: <RiTwitterXLine size={50} />,
  },
  {
    name: "Github",
    link: "https://github.com/ayush-khatrii",
    icon: <IoLogoGithub size={50} />,
  },

]
