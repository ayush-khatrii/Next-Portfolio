"use client";

import { Button, Card, Container } from "@radix-ui/themes";
import { Link, Text } from "@radix-ui/themes";
import { Video, ArrowDown } from "lucide-react";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";

export default () => {
	return (
		<>
			<Container size={"4"} className={`pt-40  h-screen z-40 `}>
				<div className=' mx-auto flex items-center justify-center  overflow-hidden md:flex md:px-8'>
					<div className='  px-4 mx-auto flex flex-col justify-center items-center sm:max-w-lg md:px-0 lg:max-w-5xl'>
						<h1
							color='gray'
							className=' text-center font-thin  md:text-4xl  text-2xl '
						>
							Hi! I am
						</h1>
						<Text
							color='gray'
							highContrast
							className='text-center text-4xl sm:text-7xl lg:text-7xl font-semibold'
						>
							Ayush Khatri
						</Text>
						<Link className='flex justify-center items-center '>
							<Typewriter
								options={{
									strings: ["Web Developer", "Coder", "Video Editor"],
									autoStart: true,
									loop: true,
								}}
							/>
						</Link>
						{/* Socials D*/}
						<div className='mt-5'>
							<Socials />
						</div>
						{/* Call To Action */}
						<div className='cta mt-3  flex items-center md:flex-row md:w-2/6   justify-center flex-col sm:gap-y-0 gap-3 '>
							<Button
								href='#about'
								asChild
								size='3'
								my={"3"}
								variant='solid'
								className='w-full md:w-auto'
							>
								<a>Explore</a>
							</Button>
							<Button
								asChild
								size='3'
								variant='surface'
								color='gray'
								className='group relative'
							>
								<a className='flex items-center'>
									<Video className='transition-transform transform translate-x-0 group-hover:scale-90' />
									Editing Portfolio
								</a>
							</Button>
						</div>
						{/* Down Arrow */}
						<div className='arrow-down my-20 animate-bounce'>
							<Card asChild>
								<Link href='#terminal'>
									<ArrowDown />
								</Link>
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
