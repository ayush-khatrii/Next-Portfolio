"use client"
import { Tabs, Tab, Button } from "@nextui-org/react";
const About = () => {
  return (
    <section id="about" className="my-10 max-w-4xl px-5 mx-auto dark:text-white flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
      <div className="absoulte mb-8 md:mb-0 md:mr-10 brightness-50 hover:brightness-100 hover:-translate-y-4 transition-all ease-in-out object-cover grayscale hover:grayscale-0 border-2 ">
        <img
          width={500}
          src="https://res.cloudinary.com/chatappmern/image/upload/v1719329984/portfolio/profile/wo9dmqoqsxwgdulgwb8m.jpg"
          alt="Profile"
          className="object-cover z-50"
        />
      </div>
      <div className="flex flex-col justify-start items-center md:items-start w-full">
        <Tabs variant="underlined" className="w-full">
          <Tab key="about_me" title="About" className="text-xl">
            <div className="flex flex-col justify-start items-start text-left w-full">
              <span className="font-medium text-xl">Hello myself,</span>
              {/* <h1 className="font-bold text-[#8426ff] text-3xl">Ayush Khatri</h1> */}
              <h1 className="bg-gradient-to-b text-4xl font-extrabold from-violet-600 to-purple-950 bg-clip-text text-transparent">Ayush Khatri</h1>

              <div className="text-left mt-4 text-gray-200">
                Hello, I'm Ayush Khatri with a BCA graduation, a Full Stack Web Developer with a strong focus on the MERN stack, Next.js, and React.js. I've created several projects that showcase my expertise in JavaScript, demonstrating my ability to build dynamic and responsive web applications. Passionate about learning and implementing new technologies, I strive to deliver high-quality, innovative solutions.
              </div>
            </div>
          </Tab>
          <Tab key="education" title="Education" className="text-xl">
            <div className="text-left w-full">
              Lorem ipsum dolor sit amet,
            </div>
          </Tab>
        </Tabs>
        <div className="flex justify-center items-center text-xl gap-5 mb-5">
          <h1>My Links </h1>
          <Button radius="full" size="lg" className="bg-gradient-to-tr font-medium  from-purple-950 to-violet-800 text-white shadow-lg">Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
