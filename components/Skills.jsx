"use client";
import databaseService from "@/appwrite/databaseService";
import { Box, Container, Flex, Heading, Tabs } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skills = () => {
	const [frontendskills, setFrontendSkills] = useState([]);
	const [backendskills, setBackendSkills] = useState([]);
	const [otherskills, setOtherSkills] = useState([]);

	// Function for fetching Frontend Skills
	const getFrontendSkills = async () => {
		try {
			const data = await databaseService.getFrontendSkills();
			setFrontendSkills(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Function for fetching Backend Skills
	const getBackendSkills = async () => {
		try {
			const data = await databaseService.getBackendSkills();
			setBackendSkills(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Function for fetching Other Skills
	const getOtherSkills = async () => {
		try {
			const data = await databaseService.getOtherSkills();
			setOtherSkills(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFrontendSkills();
		getBackendSkills();
		getOtherSkills();
	}, []);

	return (
		<>
			<Container id='skills' align='center' className={` my-40  items-center`}>
				<Heading align='center' my='6' size='7'>
					Skills
				</Heading>

				<Box align='center'>
					<Tabs.Root defaultValue='frontend'>
						<Flex justify='center' align='center' wrap='wrap' mb='3'>
							<Tabs.List style={{ display: "flex", gap: "20px" }}>
								<Tabs.Trigger value='frontend'>Frontend</Tabs.Trigger>
								<Tabs.Trigger value='backend'>Backend</Tabs.Trigger>
								<Tabs.Trigger value='others'>Others</Tabs.Trigger>
							</Tabs.List>
						</Flex>
						<Tabs.Content value='frontend' className='px-10'>
							<div className='grid gap-10 my-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
								{frontendskills.map((item, index) => (
									<div className='rounded-full ' key={index}>
										<div className='h-20 w-20 md:h-16 md:w-16 my-3 rounded-full bg-gray-100  flex items-center justify-center'>
											<img
												className='w-10 h-auto object-cover  '
												src={item.skill_image}
												alt={item.skill_name}
											/>
										</div>
										<span className='text-base'>{item.skill_name}</span>
									</div>
								))}
							</div>
						</Tabs.Content>
						<Tabs.Content value='backend' className='px-10'>
							<div className='grid gap-10 my-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
								{backendskills.map((item, index) => (
									<div className='rounded-full ' key={index}>
										<div className='h-20 w-20 md:h-16 md:w-16 my-3 rounded-full bg-gray-100  flex items-center justify-center'>
											<img
												className='w-10 h-auto object-cover  '
												src={item.skill_image}
												alt={item.skill_name}
											/>
										</div>
										<span className='text-base'>{item.skill_name}</span>
									</div>
								))}
							</div>
						</Tabs.Content>
						<Tabs.Content value='others' className='px-10'>
							<div className='grid gap-10 my-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
								{otherskills.map((item, index) => (
									<div className='rounded-full' key={index}>
										<div className='h-20 w-20 md:h-16 md:w-16 my-3 rounded-full bg-gray-100  flex items-center justify-center'>
											<img
												className='w-12 h-auto object-cover  '
												src={item.skill_image}
												alt={item.skill_name}
											/>
										</div>
										<span className='text-base'>{item.skill_name}</span>
									</div>
								))}
							</div>
						</Tabs.Content>
					</Tabs.Root>
				</Box>
			</Container>
		</>
	);
};

export default Skills;
