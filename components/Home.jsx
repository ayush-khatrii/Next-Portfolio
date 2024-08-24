import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import Header from "@/components/Navbar";
export default function HomePage() {

  const words = ["Web Developer", "Video Editor"];

  return (
    <>
      <div className="absolute w-full z-50">
        <Header />
      </div>
      <div className="h-screen flex justify-center items-center  max-w-full mx-auto pt-5 text-center dark:bg-grid-white/[0.07] bg-grid-black/[0.1] z-10 relative">
        <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex  justify-center items-center flex-col">
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
          <p className="pt-2 lg:w-1/2 px-8  dark:text-zinc-400 text-zinc-800 font-medium text-center text-lg sm:text-2xl">
            Passionate about learning new techs, creating new projects, building web apps that always impress.
          </p>
          <div className="flex justify-center items-center text-xl gap-3 mt-5">
            <a href="#about">
              <Button radius="sm" variant="solid" size="lg" className="dark:bg-zinc-300 dark:text-black bg-zinc-900 text-white text-xl font-medium">Explore</Button>
            </a>
            <a target="_blank" href="https://ayushkhatri.hashnode.dev">
              <Button radius="sm" size="lg"
                variant="bordered"
                className="font-medium text-xl"
              >Blog</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
