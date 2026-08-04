/** @format */

"use client";

import { useMode } from "@/context/ModeContext";
import { buttonVariants } from "@/components/ui/button";
import {
	LuArrowRight as ArrowRight,
	LuDownload as Download,
} from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import darkPicture from "@/app/assets/picture_dark.png";
import lightPicture from "@/app/assets/picture_light.png";

import { titles, secondaryTitles, techStack } from "@/lib/data";

export function Hero({ page = "home" }: { page: string }) {
	const { mode } = useMode();

	return (
		<section className='relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border pt-12 pb-12'>
			{/* Grid Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]'>
				<div className='absolute inset-0 bg-background mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,black_100%)]'></div>
			</div>

			<div className='container px-4 md:px-6 relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16'>
				{/* Text Column */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-xl'
				>
					<div className='space-y-4'>
						<h1 className='text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]'>
							<span className='text-accent block text-4xl'>
								{page === "home" ? "Hello, I'm" : "About me"}
							</span>
							Nicholas Benson {/*Olúwafẹ́rànmi */}
						</h1>
						<p className='text-xl md:text-2xl text-foreground font-medium'>
							{titles[mode]}
						</p>
						{techStack[mode] && (
							<p className='text-sm md:text-base text-muted-foreground font-medium'>
								{/* <span className='text-foreground'>Tech Stack: </span> */}
								{techStack[mode].join(" | ")}
							</p>
						)}
						{secondaryTitles[mode] && (
							<p className='text-sm md:text-base text-muted-foreground font-medium'>
								{secondaryTitles[mode]}
							</p>
						)}
					</div>

					<div className='font-mono text-sm uppercase tracking-widest font-bold text-accent dark:text-accent bg-muted/20 px-4 py-2 rounded-md border border-border/30'>
						Nick Frost » @nickfrostcode
					</div>

					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
						<Link
							href='#projects'
							className={cn(
								buttonVariants({ size: "lg" }),
								"gap-2 h-12 px-8 text-base",
							)}
						>
							View Projects <ArrowRight className='w-4 h-4' />
						</Link>
						<Link
							href='#'
							className={cn(
								buttonVariants({ size: "lg", variant: "outline" }),
								"gap-2 h-12 px-8 text-base bg-background/50 backdrop-blur-sm",
							)}
						>
							Download CV <Download className='w-4 h-4' />
						</Link>
					</div>
				</motion.div>

				{/* Photo Column */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='w-full max-w-sm md:max-w-md mx-auto md:mx-0 relative group'
				>
					<Image
						src={lightPicture}
						alt='Nicholas Benson'
						className='w-full h-auto object-contain grayscale opacity-90 transition-all duration-700 hover:opacity-100 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] block dark:hidden'
						priority
					/>
					<Image
						src={darkPicture}
						alt='Nicholas Benson'
						className='w-full h-auto object-contain grayscale opacity-90 transition-all duration-700 hover:opacity-100 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] hidden dark:block'
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
}
