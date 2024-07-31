import About from "@/pages/About";
import Experience from "@/pages/Experience";
import HomePage from "@/pages/Home";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
export default function page() {

  return (
    <>
      <div className="">
        <HomePage />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
