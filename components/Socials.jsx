
"use client"
import { FaGithub, FaLinkedin, RiTwitterXLine, FaInstagram } from "react-icons/fa";
const Socials = () => {
  const socialsData = [
    { icon: <FaGithub />, url: "https://github.com/ayush-khatrii" },
    { icon: <FaInstagram />, url: "https://github.com/ayush-khatrii" },
    { icon: <FaLinkedin />, url: "https://github.com/ayush-khatrii" },
    { icon: <RiTwitterXLine />, url: "https://github.com/ayush-khatrii" },
  ];
  return (
    <section>
      {socialsData.map((item, index) => (
        <></>
      ))}
    </section>
  )
}

export default Socials;