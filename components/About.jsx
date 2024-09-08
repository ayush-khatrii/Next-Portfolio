"use client"
import { Tabs, Tab, Button, Chip } from "@nextui-org/react";
import { BackgroundBeamsWithCollision } from "./ui/beams-collitions";
const About = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <section id="about" className="py-20 max-w-4xl px-5 mx-auto dark:text-white flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <div className="absoulte mb-8 md:mb-0 md:mr-10 brightness-50 hover:brightness-100 hover:-translate-y-4 transition-all ease-in-out object-cover grayscale hover:grayscale-0 border-2 ">
            <img
              width={500}
              src="https://res.cloudinary.com/chatappmern/image/upload/v1719329984/portfolio/profile/wo9dmqoqsxwgdulgwb8m.jpg"
              alt="Profile"
              className="object-cover z-50"
            />
          </div>
          <div className="flex flex-col justify-start items-start md:items-start px-2 w-full">
            <Tabs variant="underlined" className="w-full">
              <Tab key="about_me" title="About" className="text-xl">
                <div className="flex flex-col justify-start items-start text-left w-full">
                  <span className="font-medium text-xl">Hello myself,</span>
                  <h1 className="bg-gradient-to-b text-zinc-300 text-4xl font-extrabold ">Ayush Khatri</h1>
                  <Chip radius="sm" color="default" variant="faded" size="lg" className="p-1 mt-2 mb-1 font-medium text-lg">Full Stack Developer</Chip>
                  <div className="text-left mt-4 text-gray-200">
                    Hello, I'm Ayush Khatri with a BCA graduation, a Full Stack Web Developer with a strong focus on the MERN stack, Next.js, and React.js. I've created several projects that showcase my expertise in JavaScript, demonstrating my ability to build dynamic and responsive web applications. Passionate about learning and implementing new technologies, I strive to deliver high-quality, innovative solutions.
                  </div>
                </div>
              </Tab>
            {/* <Tab key="education" title="Education" className="text-xl">
                <div className="text-left w-full">
                  Lorem ipsum dolor sit amet,
                </div>
              </Tab> */}
            </Tabs>
            <div className="flex lg:justify-center justify-start items-center text-xl gap-5 mb-5">
              <a target="_blank" href="https://cloud.appwrite.io/v1/storage/buckets/66d756750000be0fadfe/files/66dd3ce8002acd932015/view?project=667d662c00150cd5c52c&project=667d662c00150cd5c52c&mode=admin">
                 <Button radius="sm" size="lg" className="bg-zinc-900 text-xl font-medium">
                   Resume
                 </Button>
              </a>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default About;
