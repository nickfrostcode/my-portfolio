/** @format */

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import { ModeProvider, type Mode } from "@/context/ModeContext";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const generalSans = localFont({
	src: "./fonts/GeneralSans-Variable.woff2",
	variable: "--font-sans",
	display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Nicholas Benson Olúwafẹ́rànmi | Portfolio",
	description:
		"Computer Scientist bridging the gap between Software Engineering and Visual Design.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = await headers();
	const mode = (headersList.get("x-portfolio-mode") as Mode) || "general";

	return (
		<html
			lang='en'
			className={cn(
				"h-full antialiased font-sans",
				generalSans.variable,
				jetBrainsMono.variable,
			)}
		>
			<body className='min-h-full flex flex-col'>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ModeProvider mode={mode}>
						<Navbar />
						<main className="flex-1">
							{children}
						</main>
						<Footer />
					</ModeProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
