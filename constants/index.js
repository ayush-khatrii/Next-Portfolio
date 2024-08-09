import { IoLogoCss3, IoLogoGithub, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiShadcnui, SiExpress, SiAppwrite } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export const projectsData = [
  {
    title: "Full Stack Hotel Booking Web App",
    description: "Ayush Khatri",
    src: "https://placehold.co/400",
    ctaText: "Visit",
    liveLink: "https://ui.aceternity.com/templates",
    repoText: "Code",
    githubLink: "https://ui.aceternity.com/templates",
    stack: ["React.js", "Javascript", "MongoDB", "Express.js", "Node.js", "Razorpay"],
    content: () => {
      return (
        <p className="text-xl">
          Developed a fullstack booking website allowing users to create accounts, search and book rooms, and make
          payments using the Razorpay API.
          Integrated features such as user authentication, account management, and a comprehensive search functionality for
          finding available rooms.
          Implemented an admin dashboard for managing bookings, users, and rooms, providing comprehensive tools for
          administrative tasks.
          Added a feature for end users to review rooms, enhancing user engagement and providing valuable feedback for
          room management.
        </p>
      );
    },
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