"use client";
import React from "react";
import { work } from "@/constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="w-full py-5">
      <h1 className="text-3xl font-bold my-2 mb-10">Work Experience</h1>
      <div className="border-l flex justify-center items-center relative h-fit py-5 border-foreground/10">
        <div>
          {work.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="relative ml-5 py-2"
            >
              <div className="w-4 h-4 -ml-5 absolute -left-2 border border-primary bg-background rounded-full">
                <div className="bg-primary border absolute top-[2.9px] left-[2.9px] w-2 h-2 rounded-full">
                </div>
              </div>

              <span className="dark:font-thin tracking-tight text-sm opacity-50">{item.date}, {item.location}</span>
              <h1 className="font-semibold text-lg">{item.position}</h1>
              <span className="font-normal text-base opacity-80">{item.title}</span>
              <p className="py-3 font-light text-sm md:text-base opacity-80 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
