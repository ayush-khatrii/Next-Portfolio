"use client";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "@radix-ui/themes";
import databaseService from "@/appwrite/databaseService";

const Socials = () => {
	const [socials, setSocials] = useState([]);

	// Fetch all about data from appwrite backend
	useEffect(() => {
		const getSocials = async () => {
			try {
				const data = await databaseService.getSocials();
				setSocials(data);
			} catch (error) {
				console.log(error);
			}
		};
		getSocials();
	}, []);

	return (
		<div className='socials flex  gap-5 '>
			{socials.map((item, index) => (
				<div className='rounded-full  flex ' key={index}>
					<Link
						className='p-4 transition overflow-hidden hover:-translate-y-2 ease-in-out duration-100'
						href={item.githubUrl}
						color='gray'
					>
						<Github />
					</Link>
					<Link
						className='p-4 transition overflow-hidden hover:-translate-y-2 ease-in-out duration-100'
						href={item.instagramUrl}
						color='gray'
					>
						<Instagram />
					</Link>
					<Link
						className='p-4 transition overflow-hidden hover:-translate-y-2 ease-in-out duration-100'
						href={item.twitterUrl}
						color='gray'
					>
						<Twitter />
					</Link>
					<Link
						className='p-4 transition overflow-hidden hover:-translate-y-2 ease-in-out duration-100'
						href={item.linkedinUrl}
						color='gray'
					>
						<Linkedin />
					</Link>
				</div>
			))}
		</div>
	);
};

export default Socials;
