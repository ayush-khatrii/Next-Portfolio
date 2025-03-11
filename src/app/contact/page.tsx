"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Copy, Send } from "lucide-react";
import { toast } from "sonner";

const EMAIL_ADDRESS = "ayushkhatri.dev@gmail.com";

const Contact = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    toast.success("Email address copied!")
  };


  return (
    <section className="py-10">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.09 }}
          className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="">Have a question or want to work together? Drop me a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label
                htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label htmlFor="email" className="block text-sm font-medium  mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                rows={5}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <Button
                type="submit"
                className="font-bold w-full"
              >
                Send Message
              </Button>
            </motion.div>
          </form>

          <div className="flex flex-col items-center text-center sm:flex-row justify-between gap-3 border-t border-foreground/10 pt-4">
            <p className="text-sm text-foreground/80">
              Or reach me directly at: <span className="text-foreground">{EMAIL_ADDRESS}</span>
            </p>
            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
              className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmailToClipboard}
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;