"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
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
      toast.error("Something went wrong: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-5xl my-20 mx-auto">
      <h1 className='text-center text-gray-300 font-bold text-2xl py-10'>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-5 max-w-5xl mx-auto">
          <input
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            autoComplete="on"
            className="w-full p-3 bg-neutral-950 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            autoComplete="on"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            className="w-full p-3  bg-neutral-950 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="email"
            placeholder="Enter your Email"
          />
          <textarea
            autoComplete="on"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full bg-neutral-950 p-3 text-2xl border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter your message"
            rows="5"
          ></textarea>
          <Button
            type="submit"
            radius="sm"
            size="lg"
            isLoading={isLoading}
            disabled={isLoading}
            className="bg-gradient-to-tr font-medium text-xl from-purple-950 to-violet-800 text-white"
          >
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
