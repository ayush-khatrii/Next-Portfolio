"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Button } from "@nextui-org/react";
import { projectsData } from "@/constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (

    <div className="py-20">
      <h1 className='text-center text-gray-300 font-bold text-2xl pb-10'>Projects</h1>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

      <div className="grid grid-col-1 lg:grid-cols-3 px-10 gap-5 ">
        {
          projectsData.map((item, index) => (
            <>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move from 50px below
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.5 }} // Adjust timing and easing
              >
                <CardSpotlight className="h-full w-auto cursor-pointer bg-black" key={index}>
                  <div className="relative">
                    <h1 className="text-xl text-left text-zinc-300 font-bold">{item.title}</h1>
                    <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.description}</p>
                    <div className="flex justify-between items-center text-center">
                      <div className="my-5 flex justify-start text-center items-center gap-1">{item.stack && item.stack.map((skill) => (
                        <span key={skill.name} className="bg-zinc-800 p-2 border border-zinc-600 rounded-full">{skill.icon}</span>
                      ))}
                      </div>
                    </div>
                    <div className="flex mt-5 justify-end items-center text-center gap-3">
                      <a target="_blank" href={item.liveLink}>
                        <Button variant="ghost" radius="sm">
                           Visit
                        </Button>
                      </a>
                      <a target="_blank" href={item.githubLink}>
                         <Button variant="ghost" radius="sm">
                            Github
                         </Button>
                      </a>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            </>
          ))
        }
      </div >
    </div >
  );
}
