/** @format */

"use client";

import { useMode } from "@/context/ModeContext";
import { TimelineScroll } from "./TimelineScroll";
import { motion } from "motion/react";

import { allExperiences } from "@/lib/data";
import { getSortedExperiences } from "@/lib/logic";

export function WorkExperience() {
	const { mode } = useMode();
	const sortedExperiences = getSortedExperiences(allExperiences, mode);

	const timelineItems = sortedExperiences.map((exp) => ({
		id: exp.id,
		logo: exp.logo,
		alt: `${exp.company} company logo`,
		card: (
			<div className='w-full flex-1 flex flex-col p-4 md:p-6 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 z-20 relative'>
				<div className='flex items-start justify-between mb-4'>
					<span className='inline-block px-3 py-1 text-[10px] md:text-xs rounded-full bg-foreground/10 text-foreground'>
						{exp.date}
					</span>
				</div>

				<h3 className='text-lg md:text-xl font-semibold text-foreground mb-1'>
					{exp.role}
				</h3>
				<h4 className='text-xs md:text-sm font-medium text-muted-foreground mb-4'>
					{exp.company}
				</h4>
				<p className='text-sm text-foreground/80 leading-relaxed'>
					{exp.description}
				</p>
			</div>
		),
	}));

	return (
		<motion.section
			id='experience'
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: 0.1 }}
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
			<div className='absolute inset-y-0 left-0 w-6 md:w-30 bg-linear-to-r from-background to-transparent z-20 pointer-events-none' />
			<div className='absolute inset-y-0 right-0 w-6 md:w-30 bg-linear-to-l from-background to-transparent z-20 pointer-events-none' />

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto relative z-10 my-8 '>
				<div className='text-center space-y-2'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Work <span className='text-accent'>Experience</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						The path I&apos;ve taken and the experience I&apos;ve gathered along the
						way.
					</p>
				</div>
			</div>

			<TimelineScroll items={timelineItems} />
		</motion.section>
	);
}
