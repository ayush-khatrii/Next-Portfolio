"use client";
import { contactMe } from "@/constants";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";

const Contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content, fromName, fromEmail
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      const data = await response.json();
      toast.success("Message sent successfully✅");
      setFromName("");
      setFromEmail("");
      setContent("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

      <section className="max-w-5xl py-20 mx-auto">
        <div className="text-center py-10 w-10/12 mx-auto text-zinc-300 font-bold px-3 lg:px-0 text-2xl lg:text-4xl">
          <h1 className=''>
            Get in touch with me
          </h1>
        </div>
        <div className="px-10 flex flex-wrap flex-shrink-0 justify-center items-center text-center gap-3">
          {
            contactMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move from 50px below
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.2 }} // Adjust timing and easing
              >
                <div className="flex cursor-pointer justify-center items-center text-center flex-col">

                  <a href={item.link && item.link} id={item.name} target="_blank" rel="noopener noreferrer">
                    <div key={index} className="bg-gradient-to-r hover:text-violet-600 transition duration-300 ease-out from-zinc-950 to-black p-5 border border-zinc-700 rounded-lg">
                      {item.icon}
                    </div>
                  </a>
                  <label htmlFor={item.name} className="font-medium text-lg text-zinc-300">{item.name}</label>
                </div>
              </motion.div>
            ))
          }
        </div >
      </section >
      <p className="text-center text-lg opacity-50 py-5">Copyright &copy; {new Date().getFullYear()} Ayush Khatri</p>
    </>
  );
}

export default Contact;
