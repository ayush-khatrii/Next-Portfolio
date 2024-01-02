import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import Head from "./head";

export const metadata = {
	title: "Ayush Khatri",
	description:
		"I am Ayush Khatri, a 20-year-old Final Year BCA student based in gandhidham specializing in web development. Currently learning MERN stack development, I have completed several engaging web projects. I am motivated, eager to learn, and seeking opportunities to further my career in web development",
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<Head />
			<body className='dark'>
				<main>
					<Theme accentColor='green'>{children}</Theme>
				</main>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
