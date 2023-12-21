"use client";
import databaseService from "@/appwrite/databaseService";
import { Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Articles = () => {
	const [articles, setArticles] = useState([]);

	// Fucntion to fetch articles from appwrite

	const getArticles = async () => {
		try {
			const data = await databaseService.getArticles();
			setArticles(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<Container size='4' align='center' py='9'>
			<Heading className='pb-10' align='center' size='7'>
				Articles
			</Heading>
			<Container>
				<div className='grid lg:grid-cols-2 gap-5 mx-10'>
					{articles.map((item, index) => (
						<Card variant='classic' className='' key={index}>
							<Inset px='4' py='4'>
								<Heading size='6' weight='bold'>
									{item.blogtitle}
								</Heading>
								<Text as='div' color='gray' size='2' my='3'>
									{item.blogdesc}
								</Text>
								<a
									href={item.bloglink}
									className='flex group mt-4 justify-self-center items-center text-green-400'
								>
									Read More
									<ChevronRight className='transition-transform transform translate-x-0 group-hover:translate-x-1' />
								</a>
							</Inset>
						</Card>
					))}
				</div>
			</Container>
		</Container>
	);
};

export default Articles;
