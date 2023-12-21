import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Articles from "@/components/Articles";
import { poppins } from "@/fonts/font"

const page = () => {
	return (
		<>
			<div className={ `${poppins.className}` }>
				<Navbar />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Articles />
				<Terminal />
				<Contact />
				<Footer />
			</div>
		</>
	);
};
export default page;
