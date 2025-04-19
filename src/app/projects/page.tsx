"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { project } from "@/constants";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  return (
    <section className="py-5 md:py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className="text-xl md:text-3xl font-bold mb-10"
      >
        All Projects
      </motion.h1>
      <Accordion type="multiple">
        {project.map((proj, idx) => (
          <AccordionItem value={proj.title} key={idx}>
            <AccordionTrigger>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.09 }}
                className="md:text-xl cursor-pointer text-base font-normal">{proj.title}</motion.h1>
            </AccordionTrigger>
            <AccordionContent>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.09 }}
                className="font-light text-foreground/80 leading-relaxed text-base md:text-lg">{proj.desc}</motion.p>

              <div className="flex flex-col-reverse md:flex-row md:justify-between items-start md:items-center gap-3 my-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.09 }}
                  className="flex gap-3">
                  {proj.liveLink && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                    >
                      <a className="flex gap-1 items-center" href={proj.liveLink}>
                        <FiLink className="h-4 w-4" />
                        Website
                      </a>
                    </Button>
                  )}
                  {proj.githubLink && (
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                    >
                      <a className="flex gap-1 items-center" href={proj.githubLink}>
                        <FaGithub className="h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </motion.div>
                <div className="flex items-center max-w-xl flex-wrap gap-3 my-5 md:my-0">
                  {proj.techStack.map((stack, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.02 }}
                    >
                      <Badge
                        key={i}
                        variant="secondary"
                      >
                        {stack}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section >
  );
};

export default Page;
