/** @format */

import Script from "next/script";
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
import { WebMcpTools } from "@/components/shared/WebMcpTools";
import {
	getSiteInfoFromHost,
	DESIGN_SITE_URL,
	DEV_SITE_URL,
} from "@/lib/domain";

const generalSans = localFont({
	src: "./assets/fonts/GeneralSans-Variable.woff2",
	variable: "--font-sans",
	display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
	display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers();
	const hostHeader =
		headersList.get("x-forwarded-host") || headersList.get("host") || "";
	const headerMode = headersList.get("x-portfolio-mode") as Mode | null;
	const { mode: detectedMode } = getSiteInfoFromHost(hostHeader);
	const mode: Mode = headerMode || detectedMode;
	const isDesign = mode === "design";

	if (isDesign) {
		const DESIGN_URL = DESIGN_SITE_URL;
		return {
			metadataBase: new URL(DESIGN_URL),
			title: {
				template: "%s | Nicholas Benson Design",
				default: "Nicholas Benson - Graphic, Visual & Brand Designer",
			},
			generator: "Next.js",
			applicationName: "Nicholas Benson Design Portfolio",
			description:
				"Graphic, Visual, & Brand Designer crafting distinctive graphic assets, visual identities, digital media assets, packaging, typography, and brand design systems.",
			category: "Design & Creative Arts",
			keywords: [
				"Graphic Designer",
				"Visual Designer",
				"Brand Designer",
				"Nicholas Benson",
				"Nicholas Benson Design",
				"Nick Frost",
				"Nick Frost Design",
				"design.nicholasbenson.cv",
				"best designer",
				"best designer in Nigeria",
				"best graphic designer in Nigeria",
				"best brand designer in Nigeria",
				"top visual designer Nigeria",
				"creative director Nigeria",
				"brand identity designer",
				"visual systems designer",
				"event flyer designer",
				"typography design",
				"editorial and publication design",
				"print and merchandise design",
				"social media graphics designer",
				"logo designer Nigeria",
				"freelance designer Nigeria",
				"digital content creator",
				"creative technologist",
				"design portfolio",
				"logo",
				"visual identity",
				"typography",
				"packaging",
				"brand design system",
			],
			authors: [
				{
					name: "Nicholas Benson",
					url: "https://www.linkedin.com/in/nickfrostech",
				},
				{ name: "Nick Frost", url: "https://github.com/nickfrostech" },
			],
			creator: "Nicholas Benson",
			publisher: "Nicholas Benson",
			formatDetection: {
				email: false,
				address: false,
				telephone: false,
			},
			icons: {
				icon: [{ url: "/icon.png", type: "image/png" }],
				shortcut: "/icon.png",
				apple: [{ url: "/icon.png", type: "image/png" }],
			},
			openGraph: {
				title: "Nicholas Benson - Graphic, Visual & Brand Designer",
				description:
					"Graphic, Visual & Brand Designer crafting distinctive graphic assets, visual identities, typography, digital media assets, and brand design systems.",
				url: DESIGN_URL,
				siteName: "Nicholas Benson Design",
				images: [
					{
						url: "/og2.png",
						width: 1200,
						height: 630,
						alt: "Nicholas Benson - Graphic, Visual & Brand Designer",
					},
				],
				locale: "en_US",
				type: "website",
			},
			robots: {
				index: true,
				follow: true,
				nocache: false,
				googleBot: {
					index: true,
					follow: true,
					noimageindex: false,
					"max-video-preview": -1,
					"max-image-preview": "large",
					"max-snippet": -1,
				},
			},
			twitter: {
				card: "summary_large_image",
				title: "Nicholas Benson - Graphic, Visual & Brand Designer",
				description:
					"Graphic, Visual & Brand Designer crafting distinctive graphic assets, visual identities, typography, digital media assets, and brand design systems.",
				creator: "@NBenson57814",
				images: [
					{
						url: "/og2.png",
						alt: "Nicholas Benson - Graphic, Visual & Brand Designer",
					},
				],
			},
			verification: {
				other: {
					me: [
						"mailto:nb.nicholasbenson@gmail.com",
						"https://github.com/nickfrostech",
						"https://www.linkedin.com/in/nickfrostech",
					],
				},
			},
		};
	}

	const DEV_URL = DEV_SITE_URL;
	return {
		metadataBase: new URL(DEV_URL),
		title: {
			template: "%s | Nicholas Benson",
			default: "Nicholas Benson - Full-Stack Software Developer & Engineer",
		},
		generator: "Next.js",
		description:
			"Full-Stack Software Developer & Engineer building modern web applications, scalable backend systems, and intuitive user experiences. Specialized in Next.js, TypeScript, Go, and PostgreSQL.",
		applicationName: "Nicholas Benson Portfolio",
		category: "Software Engineering & Technology",
		keywords: [
			"full stack developer",
			"software engineer",
			"web developer",
			"app developer",
			"software developer",
			"Computer scientist",
			"Nicholas Benson",
			"Nick Frost",
			"nickfrostech",
			"Nicholas Benson CV",
			"nicholasbenson.cv",
			"best software developer",
			"best software developer in Nigeria",
			"best software engineer in Nigeria",
			"best full-stack developer in Nigeria",
			"top software engineer Nigeria",
			"full-stack software developer",
			"software engineer Nigeria",
			"Next.js developer",
			"React developer",
			"TypeScript developer",
			"Node.js backend developer",
			"Fastify developer",
			"Golang developer",
			"PostgreSQL database architect",
			"Supabase developer",
			"REST API engineer",
			"scalable web applications",
			"remote software engineer",
			"freelance software developer",
			"software developer portfolio",
		],
		authors: [
			{
				name: "Nicholas Benson",
				url: "https://www.linkedin.com/in/nickfrostech",
			},
			{ name: "Nick Frost", url: "https://github.com/nickfrostech" },
		],
		creator: "Nicholas Benson",
		publisher: "Nicholas Benson",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		icons: {
			icon: [{ url: "/icon.png", type: "image/png" }],
			shortcut: "/icon.png",
			apple: [{ url: "/icon.png", type: "image/png" }],
		},
		openGraph: {
			title: "Nicholas Benson - Full-Stack Software Developer & Engineer",
			description:
				"Full-Stack Software Developer & Engineer building modern web applications, scalable backend systems, and intuitive user experiences.",
			url: DEV_URL,
			siteName: "Nicholas Benson",
			images: [
				{
					url: "/og.png",
					width: 1200,
					height: 630,
					alt: "Nicholas Benson - Full-Stack Developer & Software Engineer",
				},
			],
			locale: "en_US",
			type: "website",
		},
		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		twitter: {
			card: "summary_large_image",
			title: "Nicholas Benson - Full-Stack Software Developer & Engineer",
			description:
				"Full-Stack Software Developer & Engineer building modern web applications, scalable backend systems, and intuitive user experiences.",
			creator: "@NBenson57814",
			images: [
				{
					url: "/og.png",
					alt: "Nicholas Benson - Full-Stack Developer & Software Engineer",
				},
			],
		},
		verification: {
			other: {
				me: [
					"mailto:nb.nicholasbenson@gmail.com",
					"https://github.com/nickfrostech",
					"https://www.linkedin.com/in/nickfrostech",
				],
			},
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = await headers();
	const hostHeader =
		headersList.get("x-forwarded-host") || headersList.get("host") || "";
	const headerMode = headersList.get("x-portfolio-mode") as Mode | null;
	const {
		isDesign: isDesignHost,
		mode: detectedMode,
		gaId,
		siteUrl,
	} = getSiteInfoFromHost(hostHeader);
	const mode: Mode = headerMode || detectedMode;
	const isSubdomain =
		isDesignHost || headersList.get("x-is-subdomain") === "1";
	const isDesign = mode === "design";

	const jsonLd = isDesign
		? {
				"@context": "https://schema.org",
				"@type": "ProfilePage",
				name: "Nicholas Benson - Graphic, Visual & Brand Designer",
				url: siteUrl,
				mainEntity: {
					"@type": "Person",
					name: "Nicholas Benson",
					alternateName: [
						"Nick Frost",
						"Nick Frost Design",
						"Nicholas Benson Design",
					],
					url: siteUrl,
					image: `${siteUrl}/icon.png`,
					jobTitle: "Graphic, Visual & Brand Designer",
					description:
						"Graphic, Visual & Brand Designer crafting distinctive graphic assets, visual identities, digital media assets, packaging, typography, and brand design systems.",
					email: "nb.nicholasbenson@gmail.com",
					sameAs: [
						"https://github.com/nickfrostech",
						"https://linkedin.com/in/nickfrostech",
						"https://x.com/NBenson57814",
					],
					knowsAbout: [
						"Brand Identity",
						"Visual Design",
						"Graphic Design",
						"Typography",
						"Packaging Design",
						"Editorial & Publication Design",
						"Digital Content Creation",
					],
				},
			}
		: {
				"@context": "https://schema.org",
				"@type": "ProfilePage",
				name: "Nicholas Benson - Full-Stack Software Developer & Engineer",
				url: siteUrl,
				mainEntity: {
					"@type": "Person",
					name: "Nicholas Benson",
					alternateName: ["Nick Frost", "nickfrostech"],
					url: siteUrl,
					image: `${siteUrl}/icon.png`,
					jobTitle: "Full-Stack Software Developer & Software Engineer",
					description:
						"Full-Stack Software Developer & Computer Scientist specializing in Next.js, React, Node.js, TypeScript, Go, PostgreSQL, and scalable backend architecture.",
					email: "nb.nicholasbenson@gmail.com",
					sameAs: [
						"https://github.com/nickfrostech",
						"https://linkedin.com/in/nickfrostech",
						"https://x.com/NBenson57814",
					],
					knowsAbout: [
						"Full-Stack Web Development",
						"Software Engineering",
						"Next.js",
						"React",
						"TypeScript",
						"Node.js",
						"Fastify",
						"Golang",
						"PostgreSQL",
						"Supabase",
						"REST API Architecture",
						"Scalable Distributed Systems",
					],
				},
			};

	return (
		<html
			lang='en'
			data-scroll-behavior='smooth'
			className={cn(
				"h-full antialiased font-sans",
				"scroll-smooth",
				generalSans.variable,
				jetBrainsMono.variable,
			)}
			suppressHydrationWarning
		>
			<head>
				{/* Google Analytics (gtag.js) */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${gaId}');
					`}
				</Script>

				{/* Schema.org JSON-LD Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</head>
			<body className='min-h-full flex flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange
				>
					<ModeProvider mode={mode} isSubdomain={isSubdomain}>
						<WebMcpTools />
						<Navbar />
						<main className='flex-1'>{children}</main>
						<Footer />
					</ModeProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
