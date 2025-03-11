import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BorderBeam } from "./magicui/border-beam";
import Socials from "./Socials";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-hidden py-10">
      <div className="">
        <div className="relative flex justify-center flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <Dialog>
              <DialogTrigger asChild className="cursor-pointer">
                <div className="relative w-28 h-28 md:w-32 md:h-32 border border-opacity-25 border-watercolor-200 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="profile-pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover -bottom-10 rotate-3 left-1 absolute scale-150"
                  />
                  <BorderBeam duration={8} size={100} />
                </div>
              </DialogTrigger>
              <DialogContent className="z-[200]">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <DialogHeader>Profile Pic</DialogHeader>
                <div className="">
                  <img
                    src="profile-pic.png"
                    alt="me-img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </DialogContent>

            </Dialog>
            <div className="flex justify-center items-center mt-4 flex-col">
              <Badge variant="outline" className="mb-4 px-3 text-xs font-light py-1 bg-primary/10">
                <motion.span
                  animate={{ opacity: [0.03, 1, 0.03] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="mr-2 text-primary"
                >
                  <Sparkles size={16} />
                </motion.span>
                Available for new projects
              </Badge>
              <h1 className="text-primary tracking-tighter text-3xl md:text-5xl font-semibold opacity-85">
                Ayush Khatri
              </h1>
              <p className="mt-1 opacity-50 text-sm md:text-lg font-normal mb-4">FullStack Developer</p>
            </div>
          </div>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Hero;
