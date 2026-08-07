/** @format */
"use client";

import { useState, useEffect } from "react";
import { ModeLink } from "@/components/shared/ModeLink";
import Image from "next/image";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { motion, AnimatePresence } from "motion/react";

import pictureImg from "@/app/assets/picture.jpg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { certificates, technicalArsenal } from "@/lib/data";

export function AboutPreview() {
	const { mode } = useMode();
	const [certIndex, setCertIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCertIndex((prev) => (prev + 1) % certificates.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const activeArsenal = technicalArsenal[mode] || technicalArsenal.general;

	return (
		<section
			id='about'
			className='w-full py-24 md:py-32 flex flex-col items-center justify-center border-b border-border overflow-hidden'
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
				className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-12'
			>
				{/* Section Title */}
				<div className='text-center space-y-2'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						About <span className='text-accent'>Me</span>
					</h2>
				</div>

				<div className='flex flex-col md:flex-row gap-4 items-stretch'>
					{/* Photo Column */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='w-full relative group overflow-hidden rounded-3xl border border-border/30 bg-muted/20 flex-1 min-h-72'
					>
						<Image
							src={pictureImg}
							alt='Nicholas Benson Portrait'
							fill
							className='object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]'
						/>
						<div className='absolute inset-0 bg-background/20 transition-opacity duration-700 group-hover:opacity-0 z-10 pointer-events-none' />
						<div className='absolute bottom-8 left-8 text-foreground font-bold text-2xl md:text-3xl z-20 pointer-events-none drop-shadow-md'>
							Nicholas Benson
						</div>
					</motion.div>

					{/* Cards Column */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='w-full space-y-4 flex flex-col flex-1'
					>
						{/* Overview Card */}
						<div className='p-6 rounded-2xl bg-card border border-border/50 space-y-3'>
							<h3 className='text-sm font-semibold tracking-widest text-accent uppercase'>
								Overview
							</h3>
							<p className='text-sm md:text-md font-normal text-foreground leading-relaxed'>
								I'm a Computer Scientist working as a Software Developer
								with experience in building modern web applications and
								digital solutions. Alongside software development, I
								also work in graphic design, creating visual identities
								and digital assets that complement the products I build.
								My approach combines technical problem-solving with
								thoughtful design to create solutions that are
								functional, intuitive, and visually refined.
							</p>
						</div>

						{/* Technical Arsenal Card */}
						<div className='p-6 rounded-2xl bg-card border border-border/50 space-y-4'>
							<h3 className='text-sm font-semibold tracking-widest text-accent uppercase'>
								Technical Stack
							</h3>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{activeArsenal.map((tech, i) => (
									<div key={i} className='flex flex-col'>
										<p className='text-sm font-medium text-foreground mb-1'>
											{tech.category}
										</p>
										<p className='text-xs font-normal text-muted-foreground leading-relaxed font-mono'>
											{tech.items}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Certifications Card */}
						<ModeLink href='/about' className='group block'>
							<div className='p-6 rounded-2xl bg-card border border-border/50 space-y-4 transition-colors hover:border-accent'>
								<div className='flex items-center justify-between'>
									<h3 className='text-sm font-semibold tracking-widest text-accent uppercase'>
										Certifications
									</h3>
									<ArrowRight className='w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors' />
								</div>
								<div className='flex items-start gap-4 min-h-30'>
									<div className='relative w-full h-full'>
										<AnimatePresence mode='wait'>
											<motion.div
												key={certIndex}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.4 }}
												className='absolute inset-0 space-y-1'
											>
												<div className='text-xs font-semibold text-muted-foreground tracking-wider uppercase'>
													{certificates[certIndex].type} &bull;{" "}
													{certificates[certIndex].issuer}
												</div>
												<p className='font-semibold text-foreground text-lg leading-tight'>
													{certificates[certIndex].title}
												</p>
												<p className='text-sm font-normal text-muted-foreground line-clamp-2'>
													{certificates[certIndex].desc}
												</p>
												<div className='text-xs font-medium text-muted-foreground font-mono pt-2'>
													{certificates[certIndex].progress}
												</div>
											</motion.div>
										</AnimatePresence>
									</div>
								</div>
							</div>
						</ModeLink>

						{/* Full Story CTA */}
						<div className='flex w-full'>
							<ModeLink
								href='/about'
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"gap-2 h-12 px-8 text-base bg-background/50 backdrop-blur-sm w-full",
								)}
							>
								More About Me <ArrowRight className='w-4 h-4' />
							</ModeLink>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
