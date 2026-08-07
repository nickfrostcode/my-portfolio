/** @format */

import { Badge } from "@/components/ui/badge";
import { upcomingProjects } from "@/lib/data";
import { motion } from "motion/react";

export function ComingSoonProjects() {
	return (
		<motion.div 
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className='w-full py-3'
		>
			<div className='text-center space-y-2 mb-12'>
				<h3 className='text-2xl md:text-3xl font-bold tracking-tight text-foreground'>
					In the <span className='text-accent'>Pipeline</span>
				</h3>
				<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
					What I&apos;m currently brewing behind the scenes.
				</p>
			</div>
			{/* Using auto-fit with minmax ensures the grid perfectly resizes based on the number of items, while capping at whatever fits (typically ~4 on large screens). If you want them left-aligned when fewer, use auto-fill instead. */}
			<div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6'>
				{upcomingProjects.map((project) => (
					<div
						key={project.id}
						className='group flex flex-col bg-background border border-border border-dashed rounded-3xl p-6 relative overflow-hidden transition-colors hover:border-border hover:bg-background'
					>
						<div className='flex items-start justify-between gap-2 mb-4'>
							<Badge variant='outline' className='shrink-0 bg-transparent text-muted-foreground border-border/50'>
								Coming Soon
							</Badge>
						</div>
						<h4 className='text-lg font-bold text-foreground leading-tight py-1'>
							{project.title}
						</h4>
						<p className='text-sm text-muted-foreground leading-relaxed mt-2'>
							{project.description}
						</p>
					</div>
				))}
			</div>
		</motion.div>
	);
}
