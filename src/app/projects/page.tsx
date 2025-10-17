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
			<div className="grid grid-cols-1 gap-4">
				{project.map((item, idx) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: idx * 0.2 }}
						key={idx}
						className="rounded-md overflow-hidden border border-foreground/15 flex flex-col"
					>
						<div className="p-5 flex flex-col flex-grow">
							<h2 className="text-xl font-medium mb-1">{item.title}</h2>

							<p className="text-base line-clamp-2 font-normal text-muted-foreground mb-6 flex-grow">
								{item.desc}
							</p>
							<motion.div
								key={idx}
								className="flex flex-wrap gap-2 mb-6"
							>
								{item.techStack &&
									item.techStack.map((tech, techIdx) => (
										<motion.div
											key={techIdx}
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: techIdx * 0.1 }}
										>
											<Badge variant="secondary" className="text-xs border text-foreground/85">
												{tech}
											</Badge>
										</motion.div>
									))}
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
								className="flex gap-3">
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
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>
		</section >
	);
};

export default Page;
