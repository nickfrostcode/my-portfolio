/** @format */

"use client";

import { useMode } from "@/context/ModeContext";
import { buttonVariants } from "@/components/ui/button";
import { ModeLink } from "@/components/shared/ModeLink";
import {
	LuDownload,
} from "react-icons/lu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import darkPicture from "@/app/assets/picture_dark.png";
import lightPicture from "@/app/assets/picture_light.png";

import { titles, secondaryTitles, techStack, resumeFiles } from "@/lib/data";
import { workNoun } from "@/lib/logic";

export function Hero({ page = "home" }: { page: string }) {
	const { mode } = useMode();

	return (
		<section className='relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border pt-12 pb-12'>
			{/* Grid Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(to_right,#88888812_1px,transparent_1px),linear-gradient(to_bottom,#88888812_1px,transparent_1px)] bg-size-[40px_40px]'>
				<div className='absolute inset-0 bg-background mask-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_10%,black_100%)]'></div>
			</div>

			<div className='container px-4 md:px-6 relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16'>
				{/* Text Column */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className={cn(
						"flex flex-col space-y-8 max-w-xl",
						page === "home"
							? "items-center md:items-start text-center md:text-left"
							: "items-center text-center mx-auto mt-15",
					)}
				>
					<div className='space-y-4'>
						<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15]'>
							<span className='text-accent block text-2xl sm:text-3xl font-bold tracking-normal mb-2'>
								{page === "home"
									? "Hello, I'm"
									: page === "projects"
										? mode === "design"
											? "Design Portfolio"
											: "Engineering Projects"
										: page === "blog"
											? "Articles & Insights"
											: page === "resume"
												? "Curriculum Vitae"
												: "About"}
							</span>
							Nicholas Benson
							<span className='text-foreground/90 block text-2xl md:text-3xl font-semibold mt-2'>
								{page === "home"
									? mode === "design"
										? "Graphic, Visual & Brand Designer"
										: "Full-Stack Software Developer & Engineer"
									: page === "projects"
										? mode === "design"
											? "Graphic, Visual & Brand Design Works"
											: "Full-Stack Software & Engineering Projects"
										: page === "blog"
											? "Software Engineering Blog & Technical Articles"
											: page === "resume"
												? mode === "design"
													? "Visual Designer Resume & Creative Credentials"
													: "Software Engineer Resume & Technical Credentials"
												: mode === "design"
													? "About the Graphic & Brand Designer"
													: "About the Full-Stack Software Developer"}
							</span>
						</h1>
						<p className='text-lg md:text-xl text-muted-foreground font-medium max-w-xl'>
							{titles[mode]}
						</p>
						{techStack[mode] && (
							<p className='text-sm md:text-base text-muted-foreground font-medium'>
								{techStack[mode].join(" | ")}
							</p>
						)}
						{secondaryTitles[mode] && (
							<p className='text-sm md:text-base text-muted-foreground font-medium'>
								{secondaryTitles[mode]}
							</p>
						)}
					</div>

					<div className='font-mono text-sm uppercase tracking-widest font-bold text-accent bg-muted/20 px-4 py-2 rounded-md border border-border/30'>
						Nick Frost // @nickfrostcode
					</div>

					<div
						className={cn(
							"flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
							page !== "home" && "justify-center",
						)}
					>
						<ModeLink
							href='/projects'
							className={cn(
								buttonVariants({ size: "lg" }),
								"gap-2 h-12 px-8 text-base",
							)}
						>
							View {workNoun(mode)}
						</ModeLink>
						{resumeFiles[mode] && (
							<a
								href={resumeFiles[mode]}
								download
								aria-label={`Download Nicholas Benson ${mode === "design" ? "Graphic Designer" : "Full-Stack Software Developer"} Resume (PDF)`}
								title={`Download Nicholas Benson ${mode === "design" ? "Graphic Designer" : "Full-Stack Software Developer"} Resume (PDF)`}
								className={cn(
									buttonVariants({ size: "lg", variant: "outline" }),
									"gap-2 h-12 px-8 text-base bg-background/50 backdrop-blur-sm",
								)}
							>
								Download Resume <LuDownload className='w-4 h-4' />
							</a>
						)}
					</div>
				</motion.div>

				{/* Photo Column */}
				{page === "home" && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='w-full max-w-sm md:max-w-md mx-auto md:mx-0 relative group'
					>
						<Image
							src={lightPicture}
							alt={
								mode === "design"
									? "Nicholas Benson — Graphic, Visual & Brand Designer"
									: "Nicholas Benson — Full-Stack Software Developer & Engineer"
							}
							className='w-full h-auto object-contain grayscale opacity-90 transition-all duration-700 hover:opacity-100 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] block dark:hidden'
							priority
						/>
						<Image
							src={darkPicture}
							alt={
								mode === "design"
									? "Nicholas Benson — Graphic, Visual & Brand Designer"
									: "Nicholas Benson — Full-Stack Software Developer & Engineer"
							}
							className='w-full h-auto object-contain grayscale opacity-90 transition-all duration-700 hover:opacity-100 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] hidden dark:block'
							priority
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
}
