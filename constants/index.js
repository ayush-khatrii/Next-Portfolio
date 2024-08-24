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

export const projectsData = [
  {
    title: "Discuss-It Chat App",
    description: "Developed a fullstack booking website allowing users to create accounts, search and book rooms, and make          payments using the Razorpay API.",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://github.com/ayush-khatrii",
    githubLink: "https://ayushkhatri.site",
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
    description: "Dark mode reimagined with Node.js colors — NightNode",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://github.com/ayush-khatrii",
    githubLink: "https://ayushkhatri.site",
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
    liveLink: "https://github.com/ayush-khatrii",
    githubLink: "https://ayushkhatri.site",
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
    date: "May - June 2024",
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