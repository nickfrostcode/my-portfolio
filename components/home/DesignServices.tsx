/** @format */
"use client";

import Image from "next/image";
import { ModeLink } from "@/components/shared/ModeLink";
import { designServices } from "@/lib/data";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function DesignServices() {
	return (
		<section
			id='services'
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
						Creative <span className='text-accent'>Design Services</span> & Solutions
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto text-base md:text-lg'>
						Comprehensive visual, branding, and graphic design solutions tailored to elevate your business and brand identity.
					</p>
				</div>

				{/* 6 Services Grid: 3 on lg, 2 on md, 1 on sm */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{designServices.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-30px" }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
							className='h-full'
						>
							<ModeLink
								href='/works'
								className='group flex flex-col h-full bg-card border border-border dark:border-border/50 rounded-3xl overflow-hidden p-3.5 transition-all duration-500 hover:border-accent hover:shadow-xl hover:-translate-y-1'
							>
								{/* 4:3 Aspect Ratio Image */}
								<div className='relative w-full aspect-4/3 bg-muted overflow-hidden rounded-2xl mb-4'>
									<Image
										src={service.image}
										alt={`${service.title} — Graphic & Brand Design Service by Nicholas Benson`}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4'>
										<span className='text-xs text-white inline-flex items-center gap-1.5'>
											Explore Works <ArrowRight className='w-3.5 h-3.5' />
										</span>
									</div>
								</div>

								{/* Details */}
								<div className='flex flex-col flex-1 px-1.5 pb-2 space-y-2'>
									<h3 className='text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight'>
										{service.title}
									</h3>
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{service.description}
									</p>
								</div>
							</ModeLink>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA Button */}
				<div className='flex justify-center md:w-1/3 w-full mx-auto md:px-4 -mt-6 relative z-20'>
					<ModeLink
						href='/works'
						className={cn(
							"text-background font-semibold bg-foreground h-11 w-full flex justify-center items-center gap-2 rounded-full hover:bg-foreground/90 transition-all shadow-md",
						)}
					>
						View All Works
						<ArrowRight className='w-4 h-4' />
					</ModeLink>
				</div>
			</motion.div>
		</section>
	);
}
