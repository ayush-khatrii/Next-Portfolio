"use client";
import {
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Separator,
	Tabs,
	Text,
} from "@radix-ui/themes";
import { ArrowBigRight, ArrowRightIcon, ArrowUpRight, MoveUpRight, Video } from "lucide-react";
import databaseService from "@/appwrite/databaseService";
import { useEffect, useState } from "react";
import Link from "next/link";

const About = () => {
	const [about, setAbout] = useState([]);

	// Fetch all about data from appwrite backend
	useEffect(() => {
		const getAbout = async () => {
			try {
				const data = await databaseService.getAbout();
				setAbout(data);
			} catch (error) {
				console.log(error);
			}
		};
		getAbout();
	}, []);

	return (
		<Container id='about' className={`py-10 w-full `}>
			<Heading align='center' mb='' size='7'>
				About
			</Heading>
			<Flex gap='9' className='lg:flex-row-reverse flex-col '>
				{about.map((item, index) => (
					<Box key={index}>
						<div className='p-3 w-56 self-start md:w-2/5 lg:w-72 bg-accent dark:bg-grey-800 flex flex-col gap-2 items-center rounded mx-auto  hover:-translate-y-2  transition-transform duration-300'>
							<img
								src={item.aboutpicurl}
								alt='Profile'
								className='w-full  rounded object-cover h-60 md:h-80 border cursor-pointer'
							/>
						</div>
					</Box>
				))}

				{about.map((item, index) => (
					<Box className=' w-full px-10' key={index}>
						<Tabs.Root defaultValue='about'>
							<Flex justify='start' mb='9'>
								<Tabs.List>
									<Tabs.Trigger value='about'>About Me</Tabs.Trigger>
									<Tabs.Trigger value='education'>Education</Tabs.Trigger>
								</Tabs.List>
							</Flex>
							<Tabs.Content value='about' className=''>
								<Heading className='text-4xl' mt='3'>
									Ayush Khatri
								</Heading>
								<Badge my='3'>{item.aboutoccupation}</Badge>
								<p
									my='1'
									size={{
										initial: "2",
										sm: "3",
										md: "3",
									}}
									className='text-lg sm:text-base md:text-base font-light mb-2'
								>
									{item.about}
								</p>

								<Button
									asChild
									size='3'
									my='3'
									mr={"3"}
									variant='surface'
									color='gray'
								>
									<Link href={item.resume}>Resume</Link>
								</Button>
								<Button asChild vvariant='solid' size='3' my='3' className='group relative'>
									<Link
										target='_blank'
										href='https://ayushkhatri.hashnode.dev/'
									>
										Blog <ArrowRightIcon className='transition-transform transform translate-x-0 group-hover:translate-x-1' />
									</Link>
								</Button>
							</Tabs.Content>

							<Tabs.Content value='education'>
								<Flex direction='column'>
									<h className='text-xl font-semibold'>{item.degree}</h>
									<p>{item.collegename}</p>
									<p className='opacity-30'>{item.college_year}</p>
									<Separator my='3' size='4' />
									<h className='text-xl font-semibold'>{item.schoolstudy}</h>
									<p size='4'>{item.school}</p>
									<p className='opacity-30'>{item.school_year}</p>
								</Flex>
							</Tabs.Content>
						</Tabs.Root>
					</Box>
				))}
			</Flex>
		</Container>
	);
};

export default About;
