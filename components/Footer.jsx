"use client"

import { Link } from "@radix-ui/themes";
import Socials from "./Socials";

const Footer = () => {

	return (
		<footer className=" px-4 py-2 mx-auto text-center md:px-8 shadow-md bg-[#0e0e0e]">
			<div className="mt-8 pb-6 items-center text-center justify-center md:justify-between flex md:flex-row flex-col-reverse ">
				<div className="mt-4  sm:mt-0">
					Designed & Developed by
					<Link mx="2" size={ {
						md: "3",
						lg: "4"
					} }>Ayush Khatri  &#10084;&#65039;</Link>
				</div>
				<div className="mt-6 sm:mt-0">
					<Socials />
				</div>
			</div>
		</footer>
	)
}


export default Footer;