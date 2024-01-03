import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import Head from "./head";

export const metadata = {
	title: "Ayush Khatri - Web Developer Portfolio | Nextjs",
	description:"Ayush Khatri: Web Developer Portfolio. Explore my diverse web projects and skills in creating innovative, responsive websites.",
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<Head />
			<body className='dark'>
				<main>
					<Theme accentColor='indigo'>{children}</Theme>
				</main>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
