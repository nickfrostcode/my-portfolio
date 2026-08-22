/** @format */

import Image from "next/image";
import type { Work } from "@/types";

interface WorkCardProps {
	work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
	return (
		<div className='break-inside-avoid mb-4 group flex flex-col bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg'>
			{/* Image - full width touching card borders, no padding */}
			<div className='relative w-full overflow-hidden bg-muted'>
				<Image
					src={work.image}
					alt={work.title || "Design work"}
					width={800}
					height={600}
					sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
					className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02] block'
				/>
			</div>

			{/* Tags only below image */}
			<div className='p-3 flex flex-wrap items-center gap-1.5'>
				{work.field && (
					<span className='px-2 py-0.5 bg-accent/10 text-xs font-medium text-accent rounded-md border border-accent/20'>
						{work.field}
					</span>
				)}
				{work.tech.map((tool) => (
					<span
						key={tool}
						className='px-2 py-0.5 bg-muted text-xs font-mono text-muted-foreground rounded-md border border-border/50'
					>
						{tool}
					</span>
				))}
			</div>
		</div>
	);
}
