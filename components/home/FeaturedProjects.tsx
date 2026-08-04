/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { LuArrowRight as ArrowRight, LuCodeXml as Code2, LuPalette as Palette, LuExternalLink as ExternalLink } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { Badge } from "@/components/ui/badge";
import { ComingSoonProjects } from "./ComingSoonProjects";


import { projects } from "@/lib/data";
import { getFeaturedProjects } from "@/lib/logic";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
	const { mode } = useMode();

	const displayProjects = getFeaturedProjects(projects, mode);

	return (
		<section
			id='projects'
			className='relative w-full py-20 flex flex-col items-center justify-center border-b border-border overflow-hidden bg-card/50'
		>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'>
				<div className='absolute inset-0 bg-card dark:bg-background mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>
			</div>

			<div className='container px-4 md:px-6 relative z-10 w-full max-w-7xl mx-auto space-y-16'>
				{/* Section Title */}
				<div className='text-center space-y-2'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Featured <span className='text-accent'>Projects</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						A curated selection of my latest work.
					</p>
				</div>

            {/* Projects Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{displayProjects.map((project) => (
						<div
							key={project.id}
							className='group flex flex-col bg-background border border-border dark:border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-lg p-3 relative'
						>
							<Link href="#" className="absolute inset-0 z-10">
								<span className="sr-only">View {project.title} Case Study</span>
							</Link>
							{/* Project Image */}
							<div className='relative w-full aspect-video bg-muted overflow-hidden rounded-xl'>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border text-foreground'>
									{project.mode === "dev" ? (
										<Code2 className='w-4 h-4' />
									) : (
										<Palette className='w-4 h-4' />
									)}
								</div>
							</div>

							{/* Project Details */}
							<div className='flex flex-col flex-1 px-2 py-4 space-y-4'>
								<div className='space-y-2'>
									<div className='flex items-start justify-between gap-2'>
										<h3 className='text-xl font-bold text-foreground leading-tight py-1'>
											{project.title}
										</h3>
										<Badge
											variant={
												project.status === "Completed"
													? "secondary"
													: "outline"
											}
											className='shrink-0'
										>
											{project.status}
										</Badge>
									</div>
									<p className='text-sm text-muted-foreground line-clamp-3 leading-relaxed'>
										{project.description}
									</p>
								</div>

								{/* Tech Stack Pills */}
								<div className='flex flex-wrap gap-2 pt-2'>
									{project.tech.map((t) => (
										<span
											key={t}
											className='px-2 py-1 bg-background/50 text-xs font-medium rounded-md border border-border/50 font-mono text-accent'
										>
											{t}
										</span>
									))}
								</div>

								{/* View Project Button */}
								<div className='pt-2 mt-auto px-2 flex justify-between'>
									<div
										className='inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors'
									>
										View Case Study
									</div>

									<a href={project.link} target={project.link !== "#" ? "_blank" : "_self"} className="relative z-20 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">
										Live <ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>
						</div>
               ))}
               
               
				</div>

				{/* View All Projects CTA */}
				<div className='flex justify-center md:w-1/3 w-full mx-auto md:px-4 -mt-10 relative z-20'>
					<Link
						href='#'
						className={cn('text-background font-semibold bg-foreground h-10 w-full flex justify-center items-center gap-2 rounded-full hover:bg-foreground/90')}
					>
						View All Projects
						<ArrowRight className='w-4 h-4' />
					</Link>
				</div>

				<ComingSoonProjects />
			</div>
		</section>
	);
}
