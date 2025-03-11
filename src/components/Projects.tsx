"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { project } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { motion } from "framer-motion";  // ✅ Use Framer Motion
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-10">
      <div>
        <h1 className="text-3xl font-bold my-2 mb-10">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.slice(0, 3).map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
            key={idx}
            className="rounded-md overflow-hidden border border-foreground/15 flex flex-col"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={item.image || "https://placehold.co/1280x720/1a1a1a/ffffff?text=Project"}
                alt={`${item.title}-thumbnail`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg font-medium mb-1">{item.title}</h2>

              <p className="text-sm line-clamp-2 leading-relaxed font-light opacity-80 mb-6 flex-grow">
                {item.desc}
              </p>

              {/* ✅ Fix: Animate Tech Stack Properly */}
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.1, duration: 0.3 },
                  },
                  exit: { opacity: 0, y: 10 },
                }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {item.techStack &&
                  item.techStack.map((tech, techIdx) => (
                    <motion.div
                      key={techIdx}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 10 },
                      }}
                    >
                      <Badge variant="outline" className="rounded-md text-xs border text-foreground/85">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
              </motion.div>

              <div className="flex gap-3">
                {item.liveLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                      <FiLink className="h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
                {item.githubLink && (
                  <Button variant="default" size="sm" asChild>
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Button asChild variant="link" className="my-5 px-0 group">
        <Link href="/projects">
          View all <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-150" />
        </Link>
      </Button>
    </section>
  );
};

export default Projects;
