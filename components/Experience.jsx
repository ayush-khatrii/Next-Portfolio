"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, link } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { experience } from "@/constants";

export default function Experience() {
  return (
    <section className="overflow-hidden py-20">
      <h1 className='text-center text-gray-300 font-bold text-2xl py-10 '>Work Experience</h1>
      <div className="flex max-w-4xl mx-auto flex-col">
        {/* Large screen */}
        <div className="hidden sm:flex">
          <Tabs aria-label="Dynamic tabs" items={experience} color="default" variant="light" isVertical>
            {(item) => (
              <Tab key={item.id} title={item.label} className="bg-transparent">
                <Card className="bg-treansparent cursor-pointer ">
                  <CardBody>
                    <div>
                      <h1 className=" text-left sm:text-2xl mb-2 flex gap-2 sm:text-center items-center font-extrabold ">{item.position}
                        <span>
                          <p className="text-gray-600 text-xl font-semibold">{item.date}</p>
                        </span> </h1>
                      <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.content}</p>
                      <div color="secondary">
                        {
                          item.techStack.map((tech, index) => (
                            <Chip variant="bordered" key={index} className="m-1 font-medium">{tech}</Chip>
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
          <Tabs items={experience} variant="light" color="default" isVertical={false}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card className="bg-treansparent cursor-pointer ">
                  <CardBody>
                    <div>
                      <h1 className=" text-left sm:text-2xl mb-2 flex gap-2 sm:text-center items-center font-extrabold ">{item.position}
                        <span>
                          <p className="text-gray-600 text-xl font-semibold">{item.date}</p>
                        </span> </h1>
                      <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.content}</p>
                      <div color="secondary">
                        {
                          item.techStack.map((tech, index) => (
                            <Chip variant="bordered" key={index} className="m-1 font-medium">{tech}</Chip>
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