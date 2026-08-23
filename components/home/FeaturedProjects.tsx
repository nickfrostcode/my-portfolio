/** @format */
"use client";

import { ModeLink } from "@/components/shared/ModeLink";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { ComingSoonProjects } from "../shared/ComingSoonProjects";
import { ProjectCard } from "@/components/shared/ProjectCard";

import { projects } from "@/lib/data";
import { getFeaturedProjects, workNoun } from "@/lib/logic";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function FeaturedProjects() {
	const { mode } = useMode();

	const displayProjects = getFeaturedProjects(projects, mode);

	return (
		<section
			id='projects'
			className='relative w-full py-20 flex flex-col items-center justify-center border-b border-border overflow-hidden'
		>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'>
				<div className='absolute inset-0 mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>
			</div>

			<motion.div 
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
				className='container px-4 md:px-6 relative z-10 w-full max-w-7xl mx-auto space-y-16'
			>
				{/* Section Title */}
				<div className='text-center space-y-2'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						{mode === "design" ? (
							<>
								Featured <span className='text-accent'>Design Works</span>
							</>
						) : (
							<>
								Featured <span className='text-accent'>Software Projects</span>
							</>
						)}
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto text-base md:text-lg'>
						{mode === "design"
							? "A curated selection of visual identities, branding systems, and digital designs."
							: "A curated selection of production web applications, scalable backend architectures, and engineering tools."}
					</p>
				</div>

				{/* Projects Grid */}
				<motion.div layout className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<AnimatePresence mode="popLayout">
						{displayProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
								className='h-full'
							>
								<ProjectCard project={project} />
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* View All Projects CTA */}
				<div className='flex justify-center md:w-1/3 w-full mx-auto md:px-4 -mt-10 relative z-20'>
					<ModeLink
						href='/projects'
						className={cn(
							"text-background font-semibold bg-foreground h-10 w-full flex justify-center items-center gap-2 rounded-full hover:bg-foreground/90",
						)}
					>
						View All {workNoun(mode)}
						<ArrowRight className='w-4 h-4' />
					</ModeLink>
				</div>
				{/* Pipeline / upcoming work — hidden in design mode */}
				{mode !== "design" && (
					<>
						<hr className='my-10' />
						<ComingSoonProjects />
					</>
				)}
			</motion.div>
		</section>
	);
}
