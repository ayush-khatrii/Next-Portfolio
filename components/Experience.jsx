"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, link } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { experience } from "@/constants";

export default function Experience() {
  return (
    <section className="overflow-hidden h-1/2 sm:h-auto my-40">
      <h1 className='text-center text-gray-300 font-bold text-2xl py-10 '>Work Experience</h1>
      <div className="flex max-w-4xl mx-auto flex-col">
        {/* Large screen */}
        <div className="hidden sm:flex">
          <Tabs aria-label="Dynamic tabs" items={experience} variant="light" isVertical>
            {(item) => (
              <Tab key={item.id} title={item.label} className="bg-transparent">
                <Card className="bg-treansparent cursor-pointer ">
                  <CardBody>
                    <div>
                      <h1 className="bg-gradient-to-b text-left sm:text-2xl mb-2 flex gap-2 sm:text-center items-center font-extrabold from-violet-600 to-purple-800 bg-clip-text text-transparent">{item.position}
                        {/* <a href={item.link}> {item.label} </a> */}
                        <span>
                          <p className="text-gray-600 text-xl font-semibold">{item.date}</p>
                        </span> </h1>
                      <p className="text-gray-200 sm:text-xl text-base mb-2">{item.content}</p>
                      <div color="secondary">
                        {
                          item.techStack.map((tech, index) => (
                            <Chip key={index} className="m-1 bg-gradient-to-tr font-medium  from-purple-950 to-violet-800 text-white shadow-lg">{tech}</Chip>
                          ))
                        }
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
        {/* Large screen */}
        <div className="sm:hidden flex px-2">
          <Tabs items={experience} variant="light" isVertical={false}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card className="bg-transparent">
                  <CardBody>
                    <div>
                      <h1 className="text-2xl sm:text-2xl flex gap-2 text-left sm:text-center items-center font-extrabold text-violet-600 bg-clip-text text-transparent">{item.position}
                        {/* <a href={item.link} className=""> {item.label} </a> */}
                      </h1>
                      <span className="">
                        <p className="text-gray-600 my-1 text-xl font-semibold"> {item.date}</p>
                      </span>
                      <p className="text-gray-200 text-xl font-normal my-2 leading-relaxed sm:text-base">{item.content}</p>
                      <div color="secondary">
                        {
                          item.techStack.map((tech, index) => (
                            <Chip key={index} className="m-1 bg-gradient-to-tr font-medium text-lg from-purple-950 to-violet-800 text-white shadow-lg">{tech}</Chip>
                          ))
                        }
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
}