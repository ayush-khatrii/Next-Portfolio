"use client";
import {
	Box,
	Container,
	Flex,
	Heading,
	Tabs,
	Text,
	Card,
	Button,
	Link,
	Grid,
	Inset,
	AspectRatio,
} from "@radix-ui/themes";
import databaseService from "@/appwrite/databaseService";
import { Code, Eye } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
	const [allprojects, setAllprojects] = useState([]);
	const [fullstackProjects, setFullstackProjects] = useState([]);
	const [basicProjects, setBasicProjects] = useState([]);
	const [reactProjects, setReactProjects] = useState([]);

	// Fucntion to fetch projects from appwrite
	const getAllProjects = async () => {
		try {
			const data = await databaseService.getAllProjects();
			setAllprojects(data);
		} catch (error) {
			console.log(error);
		}
	};
	const getBasicProjects = async () => {
		try {
			const data = await databaseService.getBasicProjects();
			setBasicProjects(data);
		} catch (error) {
			console.log(error);
		}
	};
	const getFullstackProjects = async () => {
		try {
			const data = await databaseService.getFullStackProjects();
			setFullstackProjects(data);
		} catch (error) {
			console.log(error);
		}
	};
	const getReactProjects = async () => {
		try {
			const data = await databaseService.getReactProjects();
			setReactProjects(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Calling all functions in useEffect
	useEffect(() => {
		getAllProjects();
		getFullstackProjects();
		getBasicProjects();
		getReactProjects();
	}, []);

	return (
		<>
			<Container id='projects' align='center' className=' mb-32 items-center '>
				<Heading align='center' mb={"9"} size={"7"}>
					Projects
				</Heading>
				<Box align='center' className=''>
					<Tabs.Root defaultValue='all'>
						<Flex justify='center' align='center' wrap='wrap' mb='9'>
							<Tabs.List>
								<Tabs.Trigger value='all'>All Projects</Tabs.Trigger>
								<Tabs.Trigger value='fullstack'>Full Stack</Tabs.Trigger>
								<Tabs.Trigger value='basic'>Basic</Tabs.Trigger>
								<Tabs.Trigger value='react'>React</Tabs.Trigger>
							</Tabs.List>
						</Flex>
						<Tabs.Content value='all' className='px-10'>
							<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-center w-full gap-10'>
								{allprojects.map((project, index) => (
									<Card variant='surface' key={index}>
										<AspectRatio ratio={16 / 11}>
											<img
												className='w-full h-full object-cover'
												src={project.projectimgurl}
												alt='Project'
											/>
										</AspectRatio>
										<div className='px-3 py-4'>
											<Heading size={"3"} className='font-bold pb-2 '>
												{project.title}
											</Heading>
											<Text
												color='gray'
												size={{
													initial: "2",
													sm: "2",
													md: "3",
												}}
												className='font-extralight text-base relative'
											>
												{project.desc}
											</Text>
											<Flex
												className='items-start justify-between '
												align='center'
												justify='between'
												mt='7'
												mb={"2"}
												gap='2'
											>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a
														className='cursor-pointer'
														href={project.visitlink}
													>
														<Eye />
													</a>
												</Button>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a className='cursor-pointer' href={project.codelink}>
														<Code />
													</a>
												</Button>
											</Flex>
										</div>
									</Card>
								))}
							</div>
						</Tabs.Content>
						<Tabs.Content value='fullstack' className='px-10'>
							<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-center w-full gap-5'>
								{fullstackProjects.map((project, index) => (
									<Card variant='surface' key={index}>
										<AspectRatio ratio={16 / 11}>
											<img
												className='w-full h-full object-cover'
												src={project.projectimgurl}
												alt='Project'
											/>
										</AspectRatio>
										<div className='px-3 py-4'>
											<Heading size={"3"} className='font-bold pb-2 '>
												{project.title}
											</Heading>
											<Text
												color='gray'
												size={{
													initial: "2",
													sm: "2",
													md: "3",
												}}
												className='font-extralight text-base relative'
											>
												{project.desc}
											</Text>
											<Flex
												className='items-start justify-between '
												align='center'
												justify='between'
												mt='7'
												mb={"2"}
												gap='2'
											>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a
														className='cursor-pointer'
														href={project.visitlink}
													>
														<Eye />
													</a>
												</Button>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a className='cursor-pointer' href={project.codelink}>
														<Code />
													</a>
												</Button>
											</Flex>
										</div>
									</Card>
								))}
							</div>
						</Tabs.Content>
						<Tabs.Content value='basic' className='px-10'>
							<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-center w-full gap-5'>
								{basicProjects.map((project, index) => (
									<Card variant='surface' key={index}>
										<AspectRatio ratio={16 / 11}>
											<img
												className='w-full h-full object-cover'
												src={project.projectimgurl}
												alt='Project'
											/>
										</AspectRatio>
										<div className='px-3 py-4'>
											<Heading size={"3"} className='font-bold pb-2 '>
												{project.title}
											</Heading>
											<Text
												color='gray'
												size={{
													initial: "2",
													sm: "2",
													md: "3",
												}}
												className='font-extralight text-base relative'
											>
												{project.desc}
											</Text>
											<Flex
												className='items-start justify-between '
												align='center'
												justify='between'
												mt='7'
												mb={"2"}
												gap='2'
											>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a
														className='cursor-pointer'
														href={project.visitlink}
													>
														<Eye />
													</a>
												</Button>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a className='cursor-pointer' href={project.codelink}>
														<Code />
													</a>
												</Button>
											</Flex>
										</div>
									</Card>
								))}
							</div>
						</Tabs.Content>
						<Tabs.Content value='react' className='px-10'>
							<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-center w-full gap-5'>
								{reactProjects.map((project, index) => (
									<Card variant='surface' key={index}>
										<AspectRatio ratio={16 / 11}>
											<img
												className='w-full h-full object-cover'
												src={project.projectimgurl}
												alt='Project'
											/>
										</AspectRatio>
										<div className='px-3 py-4'>
											<Heading size={"3"} className='font-bold pb-2 '>
												{project.title}
											</Heading>
											<Text
												color='gray'
												size={{
													initial: "2",
													sm: "2",
													md: "3",
												}}
												className='font-extralight text-base relative'
											>
												{project.desc}
											</Text>
											<Flex
												className='items-start justify-between '
												align='center'
												justify='between'
												mt='7'
												mb={"2"}
												gap='2'
											>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a
														className='cursor-pointer'
														href={project.visitlink}
													>
														<Eye />
													</a>
												</Button>
												<Button
													className='w-1/3'
													asChild
													variant='surface'
													color='gray'
												>
													<a className='cursor-pointer' href={project.codelink}>
														<Code />
													</a>
												</Button>
											</Flex>
										</div>
									</Card>
								))}
							</div>
						</Tabs.Content>
					</Tabs.Root>
				</Box>
			</Container>
		</>
	);
};

export default Projects;
