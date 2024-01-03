"use client";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
const Navbar = () => {
	const [state, setState] = useState(false);

	const navigation = [
		{ title: "About", path: "#about" },
		{ title: "Skills", path: "#skills" },
		{ title: "Projects", path: "#projects" },
		{ title: "Contact", path: "#contact" },
	];

	const closeNavbar = () => {
		setState(false);
	};

	return (
		<nav className=' top-0  transform w-full border-b border-[#ffffff10] z-40 border-default   transition-opacity'>
			<div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
				<div className='flex items-center justify-between py-3 md:py-3 md:block'>
					<Link href='/' className='font-bold text-2xl'>
						ak.
					</Link>

					<div className='md:hidden '>
						<button
							className='bg-background hover:bg-[#212121] inline-flex items-center  rounded-md p-2 '
							onClick={() => setState(!state)}
						>
							{state ? <X /> : <MenuIcon />}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 pb-3 mt-8 md:block h-screen md:h-auto md:pb-0 md:mt-0 ${
						state ? "block" : "hidden"
					} border-b sm:border-none`}
				>
					<ul className='justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
						{navigation.map((item, idx) => {
							return (
								<li
									onClick={closeNavbar}
									key={idx}
									className=' hover:text-[#cfcfcfa9]  text-sm transition-all ease-out duration-100'
								>
									<Link href={item.path} className='block'>
										{item.title}
									</Link>
								</li>
							);
						})}

						<hr className='opacity-10 sm:hidden' />
						<li className='md:hidden'>
							<Button
								onClick={closeNavbar}
								variant='outline'
								color='gray'
								asChild
								size={{
									initial: "3",
									md: "2",
									lg: "2",
								}}
								className='w-full md:w-auto sm:hidden'
							>
								<Link href={"/"}>Editing Portfolio</Link>
							</Button>
						</li>
						<div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
							<li>
								<Button
									asChild
									variant='solid'
									onClick={closeNavbar}
									size={{
										initial: "3",
										md: "2",
										lg: "2",
									}}
									className='w-full md:w-auto'
								>
									<Link href={"https://ayushkhatri.hashnode.dev/"}>Blog</Link>
								</Button>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
