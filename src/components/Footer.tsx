"use client";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Button } from "./ui/button";

const socials = [
  { name: "GitHub", icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "Twitter", icon: <FaXTwitter className="w-6 h-6" />, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: <FaInstagram className="w-6 h-6" />, url: "https://www.instagram.com/ayush.khatrii" },
];

const Footer = () => {
  return (
    <div className="relative w-full">
      <footer className="relative w-full border-border/40 overflow-hidden pb-10">
        <div className="flex flex-col items-center justify-center px-6 gap-6 text-center relative z-10">
          <TextHoverEffect text="Ayush Khatri" />
          <div className="flex items-center gap-6">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-200"
                whileHover={{ scale: 1.3, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <motion.p
            className="text-sm text-muted-foreground/70 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            © {new Date().getFullYear()} Ayush Khatri — Crafted with ❤️ and curiosity.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
