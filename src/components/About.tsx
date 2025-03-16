"use client"
import { motion } from "motion/react";
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"

// CURRENT_DATES
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

// BIRTH_DATES
const birthDay = 15;
const birthMonth = 2;
const birthYear = 2003;

let age = currentYear - birthYear;

if (currentMonth < birthMonth || currentMonth === birthMonth && currentDay < birthDay) age--;


const About = () => {
  return (
    <div className="pt-10 py-5">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className="text-xl md:text-3xl font-bold my-2">About me</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
        className=" font-light text-foreground/80 leading-relaxed text-base">
        Hello ji kya haal chal😁? Myself <span className="font-semibold">Ayush Khatri</span> a {age} year old passioante Full-stack web developer.
        I love to build cool stuffs, you can checkout my projects on
        <span className="inline-flex gap-2 items-center pl-2">
          <a href="https://github.com/ayush-khatrii" target="_blank" className="opacity-100 text-primary inline-flex items-center gap-2 hover:underline cursor-pointer">
            Github
          </a>
          <FiExternalLink className="text-primary" />
        </span>
        . Always exploring new technologies to build better applications⚡
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.09 }}
      >
        <Link
          href="/about"
          className="text-primary my-3 inline-flex items-center gap-2 hover:underline cursor-pointer">
          Know more about me <FiExternalLink className="text-primary " />
        </Link>
      </motion.div>
    </div>
  )
}

export default About