import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import Header from "@/components/Navbar";
export default function HomePage() {

  const words = ["Web Developer", "Video Editor"];

  return (
    <>
      <Header />
      <div className="h-screen dark:bg-grid-white/[0.07] bg-grid-black/[0.1] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex pt-[12rem] justify-center items-center flex-col">
          <button className="bg-[#030013] relative no-underline group cursor-pointer shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2  justify-center items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span className="text-xl">
                Editor Portfolio
              </span>
              <FaAngleRight className="relative top-[2px]" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <p className="text-6xl sm:text-9xl font-black relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 ">
            Ayush Khatri
          </p>
          <p className="pt-2 w-fit px-8 sm:w-5/12 dark:text-gray-100 font-medium text-center text-foreground text-lg sm:text-2xl">
            Passionate about learning new techs, creating new projects, building web apps that always impress.
          </p>
          <div className="flex justify-center items-center text-xl gap-3 mt-5">
            <a href="#about">
              <Button radius="full" size="lg" variant="shadow" className="bg-gradient-to-tr font-medium text-xl from-purple-950 to-violet-800 text-white shadow-lg">Explore</Button>
            </a>
            <a target="_blank" href="https://ayushkhatri.hashnode.dev">
              <Button radius="full" size="lg" className="dark:bg-white dark:text-black font-medium text-xl">Blog</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
