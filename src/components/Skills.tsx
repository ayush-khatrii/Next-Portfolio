"use client";

import { skills } from "@/constants";
import { Badge } from "./ui/badge";
import { motion } from "motion/react"

const Skills = () => {
  return (
    <section className="py-10">
      <h1 className="text-xl md:text-3xl font-bold my-3">Skills</h1>
      <div>
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h1 className="text-base my-4 opacity-80">{skillCategory?.category}</h1>
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {skillCategory?.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Badge variant="secondary" className="rounded-md text-sm border text-foreground/85">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            <div className="border-b border-foreground/15 border-dashed mt-3" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
