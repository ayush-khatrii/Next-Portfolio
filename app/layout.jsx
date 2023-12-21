import "../styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata = {
	title: "Ayush Khatri | Portfolio",
	description: "I am Ayush Khatri, a 20-year-old Final Year BCA student based in gandhidham specializing in web development. Currently learning MERN stack development, I have completed several engaging web projects. I am motivated, eager to learn, and seeking opportunities to further my career in web development",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning={ true } >
			<body>
				<main>
					<Theme
						accentColor="green"
						appearance="dark">
						{ children }
					</Theme>
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
