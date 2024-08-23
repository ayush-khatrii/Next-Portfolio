"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { projectsData } from "@/constants";
import { CardSpotlight } from "./ui/card-spotlight";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "@nextui-org/react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    // image:
    //   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    // image:
    //   "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    // image:
    //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    // image:
    //   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    // image:
    //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    // image:
    //   "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export default function Projects() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-20 bg-zinc-950">
      <h1 className='text-center text-gray-300 font-bold text-2xl pb-10'>Projects</h1>
      <div className="grid grid-col-1 lg:grid-cols-3 px-10 gap-5 ">
        {
          projectsData.map((item, index) => (
            <CardSpotlight className="cursor-pointer bg-zinc-950">
              <div className="relative">
                <h1 className="text-xl text-left text-zinc-300 font-bold">{item.title}</h1>
                <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.description}</p>
                <div className="flex justify-between items-center text-center">
                  <div className="my-5 flex justify-start text-center items-center gap-1">{item.stack.map((skill) => (
                    <span key={skill.name} className="bg-zinc-800 p-2 border border-zinc-600 rounded-full">{skill.icon}</span>
                  ))}
                  </div>
                </div>
                <div className="flex justify-end items-center text-center gap-3">
                  <Button variant="ghost" radius="sm">
                    <a target="_blank" href={item.liveLink}>
                      Visit
                    </a>
                  </Button>
                  <Button variant="ghost" radius="sm">
                    <a target="_blank" href={item.githubLink}>
                      Github
                    </a>
                  </Button>
                </div>
              </div>
            </CardSpotlight>
          ))
        }
      </div >
    </div >
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
