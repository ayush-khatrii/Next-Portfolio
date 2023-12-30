"use client";
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import { source_code_pro } from "@/fonts/font";
import { Container, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const allCommands = [
	{ heading: "Available Commands" },
	{ name: "about", desc: "about myself" },
	{ name: "projects", desc: "my projects" },
	{ name: "date", desc: "get todays date" },
	{ name: "time", desc: "get time" },
	{ name: "reload", desc: "reload page" },
	{ name: "clear", desc: "clears the terminal" },
];

const executeReload = () => {
	window.location.reload();
};

const Terminal = () => {
	return (
		<section
			id='terminal'
			className={` my-10 mx-10 ${source_code_pro.className}`}
		>
			<Heading align='center' mb='5' size='7'>
				Terminal
			</Heading>
			<Container size={"4"}>
				<TerminalContextProvider>
					<div className='border w-full mx-auto shadow-sm outline-none h-[25rem] text-xs '>
						<ReactTerminal
							welcomeMessage={
								<div>
									<Text color='gray' size={{ initial: "2" }}>
										Hello! Type `start` to get started.
									</Text>
								</div>
							}
							commands={{
								about: (
									<span className='text-base py-3'>
										My name is Ayush Khatri . I'm a BCA student who loves
										building web apps with latest technologies. My portfolio
										showcases various cool projects!", projects:
									</span>
								),

								projects: (
									<span className='text-base py-3'>
										I have built many projects with Javascript , React js ,Next
										js etc . You can checkout <Link href='#projects'>here</Link>
									</span>
								),
								date: <p>{"Today is " + new Date().toDateString()}</p>,
								time: <p>{"Time : " + new Date().toLocaleTimeString()}</p>,
								reload: executeReload,
								start: allCommands.map((item, index) => (
									<div key={index} className='text-sm pt-1'>
										<span size={"2"}>{item.heading}</span>
										<span size={"3"} className='text-green-500'>
											{item.name} :{" "}
											<span className='text-gray-300'>{item.desc} </span>
										</span>
									</div>
								)),
							}}
							themes={{
								darkDefault: {
									themeBGColor: "",
									themeToolbarColor: "",
									themeColor: "#fff",
									themePromptColor: "#3cd68b",
								},
							}}
							theme='darkDefault'
						></ReactTerminal>
					</div>
				</TerminalContextProvider>
			</Container>
		</section>
	);
};

export default Terminal;
