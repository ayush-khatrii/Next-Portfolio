import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "./head";
import { Toaster } from "react-hot-toast";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush Khatri - Web Developer Portfolio | Nextjs",
  description: "Explore the portfolio of Ayush Khatri, a skilled web developer showcasing various projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={darker_grotesque.className}>
        <Providers>
          <main className="">
            <Toaster position="top-center" />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
