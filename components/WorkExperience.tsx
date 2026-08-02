/** @format */

"use client";

import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import {
	LuBriefcase,
	LuCodeXml,
	LuPalette,
	LuChevronLeft,
	LuChevronRight,
} from "react-icons/lu";
import { motion, useMotionValue, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Experience {
	id: number;
	role: string;
	company: string;
	date: string;
	dateVal: number;
	description: string;
	mode: "dev" | "design" | "general";
	logo?: string;
}

const allExperiences: Experience[] = [
	{
		id: 1,
		role: "Frontend Developer Intern",
		company: "Tech Start - Remote (Part-time)",
		date: "Jan 2022 - Jun 2022",
		dateVal: 202201,
		description:
			`Built responsive landing pages and component libraries using React and Tailwind CSS. Reduced load times by 15% across all client sites.`,
		mode: "dev",
		logo: "https://i.pravatar.cc/150?u=techstart",
	},
	{
		id: 2,
		role: "UI/UX Designer",
		company: "Creative Studio - Full-time",
		date: "Jul 2022 - Dec 2022",
		dateVal: 202207,
		description:
			"Designed user interfaces for fintech applications, creating comprehensive design systems in Figma and running usability tests.",
		mode: "design",
		logo: "https://i.pravatar.cc/150?u=creative",
	},
	{
		id: 3,
		role: "Junior Frontend Engineer",
		company: "WebFlow Agency",
		date: "Jan 2023 - Dec 2023",
		dateVal: 202301,
		description:
			"Developed and maintained highly interactive client websites using Next.js and Framer Motion. Improved performance metrics by 30%.",
		mode: "dev",
	},
	{
		id: 4,
		role: "Product Designer",
		company: "Innovate Inc.",
		date: "Jan 2024 - Present",
		dateVal: 202401,
		description:
			"Leading the design of enterprise SaaS products, conducting rigorous user research, wireframing, and rapid prototyping.",
		mode: "design",
	},
	{
		id: 5,
		role: "Fullstack Developer",
		company: "Freelance",
		date: "Mar 2023 - Present",
		dateVal: 202303,
		description:
			"Delivering end-to-end web applications for international clients using the MERN stack and Next.js, handling everything from database design to deployment.",
		mode: "dev",
	},
	{
		id: 6,
		role: "Open Source Contributor",
		company: "Various Projects",
		date: "Oct 2023 - Present",
		dateVal: 202310,
		description:
			"Actively contributing bug fixes, feature enhancements, and documentation updates to popular React and Next.js repositories.",
		mode: "dev",
	},
];

export function WorkExperience() {
	const { mode } = useMode();
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const [canScrollLeft, setScrollLeft] = useState(false);
	const [canScrollRight, setScrollRight] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);

	const checkScroll = () => {
		if (!containerRef.current || !trackRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const trackWidth = trackRef.current.scrollWidth;
		const maxScroll = Math.max(0, trackWidth - containerWidth);
		const currentX = x.get();
		setScrollLeft(currentX < -5);
		setScrollRight(currentX > -maxScroll + 5);

		// Calculate active index based on scroll position
		const scrollAmount = window.innerWidth < 768 ? 304 : 388;
		const index = Math.min(
			sortedExperiences.length - 1,
			Math.max(0, Math.round(Math.abs(currentX) / scrollAmount)),
		);
		setActiveIndex(index);
	};

	useEffect(() => {
		checkScroll();
		const unsubscribe = x.on("change", checkScroll);
		return () => unsubscribe();
	}, [x]);

	const handleScroll = (dir: "left" | "right") => {
		const scrollAmount = window.innerWidth < 768 ? 304 : 388;
		const nextIndex = dir === "left" ? activeIndex - 1 : activeIndex + 1;
		handleScrollTo(nextIndex);
	};

	const handleScrollTo = (index: number) => {
		if (!containerRef.current || !trackRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const trackWidth = trackRef.current.scrollWidth;
		const maxScroll = Math.max(0, trackWidth - containerWidth);
		const scrollAmount = window.innerWidth < 768 ? 304 : 388;

		let nextX = -(index * scrollAmount);
		nextX = Math.max(Math.min(nextX, 0), -maxScroll);
		animate(x, nextX, { type: "spring", stiffness: 200, damping: 25 });
	};

	const filteredExperiences =
		mode === "general"
			? allExperiences
			: allExperiences.filter((e) => e.mode === mode);

	// Sort chronologically (earlier first)
	const sortedExperiences = [...filteredExperiences].sort(
		(a, b) => a.dateVal - b.dateVal,
	);

	return (
		<section
			id='experience'
			className='relative w-full py-10 overflow-hidden border-b border-border bg-background'
		>
			{/* Dot Grid Background */}
			<div
				className='absolute inset-0 z-0 opacity-15 pointer-events-none'
				style={{
					backgroundImage:
						"radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
					backgroundSize: "32px 32px",
					color: "var(--muted-foreground)",
				}}
			/>

			{/* Edge Fades */}
			<div className='absolute inset-y-0 left-0 w-8 md:w-32 bg-linear-to-r from-background to-transparent z-20 pointer-events-none' />
			<div className='absolute inset-y-0 right-0 w-8 md:w-32 bg-linear-to-l from-background to-transparent z-20 pointer-events-none' />

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto relative z-10 my-8 '>
				<div className='text-center space-y-2'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Work <span className='text-accent'>Experience</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						The path I've taken and the experience I've gathered along the
						way.
					</p>
				</div>
			</div>

			{/* Timeline Container */}
			<div className='relative w-full z-10' ref={containerRef}>
				{/* Side Controllers */}
				<button
					onClick={() => handleScroll("left")}
					disabled={!canScrollLeft}
					className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-card/60 backdrop-blur-sm border border-border shadow-md hover:bg-muted transition-colors hidden sm:flex disabled:opacity-50 disabled:cursor-not-allowed z-39'
					aria-label='Previous slide'
				>
					<LuChevronLeft className='w-6 h-6' />
				</button>
				<button
					onClick={() => handleScroll("right")}
					disabled={!canScrollRight}
					className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-39 w-12 h-12 items-center justify-center rounded-full bg-card/60 backdrop-blur-sm border border-border shadow-md hover:bg-muted transition-colors hidden sm:flex disabled:opacity-50 disabled:cursor-not-allowed'
					aria-label='Next slide'
				>
					<LuChevronRight className='w-6 h-6' />
				</button>

				{/* 
					Using pure framer motion drag for a premium pan/grab experience on both mobile and desktop!
				*/}
				<div className='w-full overflow-hidden px-8 md:px-36 pt-8 pb-16 cursor-grab active:cursor-grabbing'>
					<motion.div
						ref={trackRef}
						style={{ x }}
						className='flex items-stretch gap-6 md:gap-12 relative z-10 w-max min-w-full'
						drag='x'
						dragConstraints={containerRef}
						dragElastic={0.1}
					>
						{/* The continuous horizontal line across the top */}
						<div className='absolute top-5.5 md:top-6.5 left-[-50vw] right-[-50vw] h-0.5 bg-border z-0' />

						{sortedExperiences.map((exp) => {
							return (
								<div
									key={exp.id}
									className='relative flex flex-col items-center shrink-0 w-70 md:w-85 z-10'
								>
									{/* The Node Dot or Logo */}
									<div className='relative w-11 h-11 md:w-13 md:h-13 rounded-full bg-background border-2 md:border-4 border-muted-foreground z-20 hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0 mt-0'>
										{exp.logo ? (
											<Image
												src={exp.logo}
												alt={exp.company}
												fill
												className='object-cover'
											/>
										) : (
											<div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent' />
										)}
									</div>

									{/* Connecting vertical line - visible on all screens */}
									<div className='w-0.5 h-6 md:h-10 bg-border/50 z-10' />

									{/* The Card */}
									<div className='w-full flex-1 flex flex-col p-4 md:p-6 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg z-20 relative'>
										<div className='flex items-start justify-between gap-4 mb-4'>
											<span className='inline-block px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-foreground/10 text-foreground'>
												{exp.date}
											</span>
											{/* Mode Icon */}
											<div
												className='absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border text-foreground p-1.5 rounded-full'
											>
												{exp.mode === "design" ? (
													<LuPalette className='w-4 h-4' />
												) : exp.mode === "dev" ? (
													<LuCodeXml className='w-4 h-4' />
												) : (
													<LuBriefcase className='w-4 h-4' />
												)}
											</div>
										</div>

										<h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
											{exp.role}
										</h3>
										<h4 className='text-xs md:text-sm font-medium text-muted-foreground mb-4'>
											{exp.company}
										</h4>
										<p className='text-sm text-foreground/80 leading-relaxed mt-auto'>
											{exp.description}
										</p>
									</div>
								</div>
							);
						})}
					</motion.div>
				</div>

				{/* Dot Indicators */}
				<div className='flex items-center justify-center gap-3 mt-8 relative z-30'>
					{sortedExperiences.map((_, index) => (
						<button
							key={index}
							onClick={() => handleScrollTo(index)}
							className={cn(
								"h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer",
								activeIndex === index
									? "bg-accent w-5"
									: "bg-border w-2.5 hover:bg-muted-foreground",
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
