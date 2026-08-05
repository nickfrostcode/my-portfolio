/** @format */

"use client";

import { journey } from "@/lib/data";
import { TimelineScroll } from "@/components/shared/TimelineScroll";

export function Journey() {
	const timelineItems = journey.map((item) => ({
		id: item.id,
		icon: item.icon,
		card: (
			<div className='w-full flex-1 flex flex-col p-4 md:p-6 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 z-20 relative'>
				<div className='flex items-start justify-between mb-4'>
					<span className='inline-block px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-foreground/10 text-foreground'>
						{item.date}
					</span>
				</div>

				<h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
					{item.title}
				</h3>
				<h4 className='text-xs md:text-sm font-medium text-muted-foreground mb-4'>
					{item.subtitle}
				</h4>
				<p className='text-sm text-foreground/80 leading-relaxed'>
					{item.description}
				</p>
			</div>
		),
	}));

	return (
		<section className='relative w-full py-20 overflow-hidden border-border dark:border-0 border-y'>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'>
				<div className='absolute inset-0 bg-background mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>
			</div>

			{/* Edge Fades */}
			<div className='absolute inset-y-0 left-0 w-6 md:w-30 bg-linear-to-r from-background to-transparent z-20 pointer-events-none' />
			<div className='absolute inset-y-0 right-0 w-6 md:w-30 bg-linear-to-l from-background to-transparent z-20 pointer-events-none' />

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto relative z-10 mb-12'>
				<div className='text-center space-y-4'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						My <span className='text-accent'>Journey</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						The pivotal moments that shaped my career and philosophy.
					</p>
				</div>
			</div>

			<TimelineScroll items={timelineItems} />
		</section>
	);
}
