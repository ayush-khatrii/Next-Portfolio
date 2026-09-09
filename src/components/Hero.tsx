"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magic-card";

const socials = [
  { name: "X", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/ayush.khatrii",
  },
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ayushkhatrii",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? reducedMotionVariants
    : itemVariants;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-0 items-center justify-center px-4 py-10 sm:min-h-[calc(100svh-var(--header-height,0px))] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center text-center"
      >
        <motion.div
          variants={variants}
          className="mb-6 flex max-w-full justify-center sm:mb-8 lg:mb-10"
        >
          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-dotted border-border/70 bg-background/70 px-3 py-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.08em] text-muted-foreground backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:text-[10px] sm:tracking-[0.13em]">
            <Code2
              className="size-3 shrink-0 text-primary sm:size-3.5"
              aria-hidden="true"
            />

            <span className="min-w-0">Fullstack Developer / India</span>

            <span
              aria-hidden="true"
              className="relative flex size-1.5 shrink-0 sm:size-2"
            >
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex size-full rounded-full bg-primary" />
            </span>
          </div>
        </motion.div>

        <motion.h1
          id="hero-title"
          variants={variants}
          className="max-w-full text-balance text-[clamp(2rem,10vw,6.75rem)] font-medium leading-[1.05] tracking-[-0.065em] text-foreground"
        >
          Ayush Khatri
          <span
            aria-hidden="true"
            className="animate-pulse text-primary motion-reduce:animate-none"
          >
            _
          </span>
        </motion.h1>

        <motion.p
          variants={variants}
          className="mt-5 font-italic max-w-[30ch] text-pretty text-[11px] leading-[1.8] text-muted-foreground min-[375px]:text-xs sm:mt-7 sm:max-w-[42ch] sm:text-sm md:text-base lg:text-lg"
        >
          Engineering{" "}
          <span className="font-medium text-foreground">
            functional, modern and fast web applications
          </span>{" "}
          and solid backend services.
        </motion.p>

        <motion.div
          variants={variants}
          className="mt-6 flex w-full max-w-xs flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:max-w-none sm:gap-3"
        >
          <Button
            asChild
            variant="default"
            size="lg"
          // className="min-h-11 flex-1 gap-2 px-4 text-xs sm:flex-none sm:px-6 sm:text-sm [&_svg]:size-3.5 sm:[&_svg]:size-4"
          >
            <Link href="/projects">
              Explore
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
          // className="min-h-11 flex-1 gap-2 px-4 text-xs sm:flex-none sm:px-6 sm:text-sm [&_svg]:size-3.5 sm:[&_svg]:size-4"
          >
            <a href="/resume-ak.pdf" target="_blank" rel="noopener noreferrer">
              Résumé
              <ArrowDown aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={variants}
          className="mt-8 grid w-full max-w-xs grid-cols-2 border-y border-dotted border-border/60 sm:mt-10 sm:max-w-2xl sm:grid-cols-4 lg:mt-12"
        >
          {socials.map(({ name, icon: Icon, url }, index) => (
            <MagicCard
              key={name}
              gradientSize={140}
              gradientColor="color-mix(in srgb, var(--primary) 14%, transparent)"
              gradientFrom="var(--primary)"
              gradientTo="var(--ring)"
              gradientOpacity={5}
              className={`min-w-full rounded-none border-0 ${index % 2 !== 0
                ? "border-l border-dotted border-border/50"
                : ""
                } ${index > 1
                  ? "border-t border-dotted border-border/50 sm:border-t-0"
                  : ""
                } ${index > 0
                  ? "sm:border-l sm:border-dotted sm:border-border/50"
                  : ""
                }`}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:min-h-14 sm:px-6 sm:text-xs motion-reduce:transition-none"
              >
                <Icon
                  className="size-3.5 shrink-0 text-foreground sm:size-4"
                  aria-hidden="true"
                />

                <span>{name}</span>

                <ArrowUpRight
                  className="absolute right-1.5 size-3 opacity-40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:right-2.5 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </MagicCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;