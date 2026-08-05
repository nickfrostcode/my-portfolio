/** @format */

import Image from "next/image";
import Link from "next/link";
import {
	LuCodeXml as Code2,
	LuPalette as Palette,
	LuExternalLink as ExternalLink,
} from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className='group flex flex-col bg-card border border-border dark:border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-lg p-3 relative'>
			<Link href='#' className='absolute inset-0 z-10'>
				<span className='sr-only'>
					View {project.title} Case Study
				</span>
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
							className='px-2 py-1 bg-card text-xs font-medium rounded-md border border-border/50 font-mono text-accent'
						>
							{t}
						</span>
					))}
				</div>

				{/* View Project Button */}
				<div className='pt-2 mt-auto px-2 flex justify-between'>
					<div className='inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors'>
						View Case Study
					</div>

					<a
						href={project.link}
						target={project.link !== "#" ? "_blank" : "_self"}
						className='relative z-20 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors'
					>
						Live <ExternalLink className='w-4 h-4' />
					</a>
				</div>
			</div>
		</div>
	);
}
