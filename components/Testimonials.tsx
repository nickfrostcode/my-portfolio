/** @format */

"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { LuStar, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { Button } from "@/components/ui/button";

type ContentType = "text" | "image" | "video";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	avatar: string;
	rating: number;
	type: ContentType;
	content: string;
	mode: "dev" | "design" | "general";
}

const allTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Jenkins",
		role: "Product Manager @ TechFlow",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		rating: 5,
		type: "text",
		content:
			"Nicholas delivered an exceptional frontend product ahead of schedule. His strict adherence to technical best practices, deeply robust architecture, and pixel-perfect execution is entirely unmatched. Our entire engineering team was blown away by the quality of the codebase he handed over.",
		mode: "dev",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Founder @ StartupX",
		avatar: "https://i.pravatar.cc/150?u=michael",
		rating: 4,
		type: "image",
		content:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
		mode: "dev",
	},
	{
		id: 3,
		name: "Elena Rodriguez",
		role: "Creative Director",
		avatar: "https://i.pravatar.cc/150?u=elena",
		rating: 5,
		type: "text",
		content:
			"The level of animation and detail in the UI completely elevated our brand. Nicholas is a true professional bridging the gap between design and code. Every micro-interaction feels fluid and natural, proving that he doesn't just write code—he truly understands the user experience.",
		mode: "design",
	},
	{
		id: 4,
		name: "David Kim",
		role: "Lead Engineer",
		avatar: "https://i.pravatar.cc/150?u=david",
		rating: 5,
		type: "video",
		content: "https://www.w3schools.com/html/mov_bbb.mp4",
		mode: "dev",
	},
	{
		id: 5,
		name: "Jessica Walsh",
		role: "Marketing Head",
		avatar: "https://i.pravatar.cc/150?u=jessica",
		rating: 5,
		type: "text",
		content:
			"The branding and layout redesign increased our conversion rates by 40% in just the first month. The typography choices were absolutely flawless, and the entire aesthetic perfectly communicated the premium feel we were struggling to capture for so long.",
		mode: "design",
	},
	{
		id: 6,
		name: "Tom Hardy",
		role: "CEO @ Visionary",
		avatar: "https://i.pravatar.cc/150?u=tom",
		rating: 4,
		type: "image",
		content:
			"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
		mode: "design",
	},
];

export function Testimonials() {
	const { mode } = useMode();

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const plugin = useRef(
		Autoplay({ delay: 5000, stopOnInteraction: false })
	);

	const displayTestimonials =
		mode === "general"
			? allTestimonials
			: allTestimonials.filter((t) => t.mode === mode);

	useEffect(() => {
		if (!api) return;

		setScrollSnaps(api.scrollSnapList());
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api, displayTestimonials]);

	return (
		<section
			id='testimonials'
			className='w-full py-16 md:py-24 flex flex-col items-center justify-center border-b border-border bg-background overflow-hidden relative'
		>
			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto mb-10'>
				<div className='text-center space-y-2 relative z-30'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Client {" "}
						<span className='text-accent'>Testimonials</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						What people are saying about my work.
					</p>
				</div>
			</div>

			<div
				className='relative w-full group'
				onMouseEnter={() => plugin.current.stop()}
				onMouseLeave={() => plugin.current.play()}
			>
				{/* Edge fade masks (FULL SCREEN) */}
				<div className='absolute inset-y-0 left-0 w-16 md:w-48 bg-linear-to-r from-background to-transparent z-40 pointer-events-none' />
				<div className='absolute inset-y-0 right-0 w-16 md:w-48 bg-linear-to-l from-background to-transparent z-40 pointer-events-none' />

				{/* Side Controllers */}
				<Button
					variant='secondary'
					size='icon'
					onClick={() => api?.scrollPrev()}
					className='absolute left-4 md:left-15 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-sm shadow-md hidden sm:flex z-39'
					aria-label='Previous slide'
				>
					<LuChevronLeft className='w-6 h-6' />
				</Button>
				<Button
					variant='secondary'
					size='icon'
					onClick={() => api?.scrollNext()}
					className='absolute right-4 md:right-15 top-1/2 -translate-y-1/2 z-39 w-12 h-12 rounded-full backdrop-blur-sm shadow-md hidden sm:flex'
					aria-label='Next slide'
				>
					<LuChevronRight className='w-6 h-6' />
				</Button>

				<Carousel
					setApi={setApi}
					plugins={[plugin.current]}
					opts={{
						align: "center",
						loop: true,
					}}
					className='w-full'
				>
					<CarouselContent className='ml-0 py-10'>
						{displayTestimonials.map((testimonial, index) => {
							const isCenter = current === index;
							const isLeft =
								index ===
								(current - 1 + displayTestimonials.length) %
									displayTestimonials.length;
							const isRight =
								index === (current + 1) % displayTestimonials.length;

							return (
								<CarouselItem
									key={testimonial.id}
									className={cn(
										"pl-0 basis-[90%] sm:basis-[70%] md:basis-[65%] lg:basis-[55%] flex justify-center relative",
										isCenter ? "z-30" : "z-10",
									)}
								>
									<div
										className={cn(
											"w-full h-full p-6 md:p-8 rounded-3xl border border-border/50 bg-card flex flex-col transition-all duration-700 ease-out",
											isCenter
												? "scale-100 opacity-100 blur-none shadow-xl"
												: isLeft
													? "scale-90 opacity-40 blur-[3px] translate-x-[15%] md:translate-x-[25%]"
													: isRight
														? "scale-90 opacity-40 blur-[3px] translate-x-[-15%] md:translate-x-[-25%]"
														: "scale-75 opacity-0",
										)}
									>
										{/* Header: Avatar + Name/Role | Rating */}
										<div className='flex flex-row items-start justify-between gap-4 mb-6'>
											<div className='flex items-center gap-3 md:gap-4'>
												<div className='relative w-12 h-12 rounded-full overflow-hidden bg-muted border border-border shrink-0'>
													<Image
														src={testimonial.avatar}
														alt={testimonial.name}
														fill
														className='object-cover'
													/>
												</div>
												<div className='flex flex-col'>
													<span className='font-bold text-foreground text-sm md:text-lg'>
														{testimonial.name}
													</span>
													<span className='text-xs md:text-sm font-mono text-muted-foreground line-clamp-1'>
														{testimonial.role}
													</span>
												</div>
											</div>

											{/* Rating */}
											<div className='flex gap-1 shrink-0 pt-1 md:pt-2'>
												{[...Array(5)].map((_, i) => (
													<LuStar
														key={i}
														className={cn(
															"w-4 h-4",
															i < testimonial.rating
																? "fill-accent text-accent"
																: "fill-muted text-muted",
														)}
													/>
												))}
											</div>
										</div>

										{/* Dynamic Content */}
										<div className='flex-1'>
											{testimonial.type === "text" && (
												<p className='text-md md:text-xl font-medium text-foreground leading-relaxed'>
													"{testimonial.content}"
												</p>
											)}

											{testimonial.type === "image" && (
												<div className='relative w-full h-48 md:h-56 rounded-xl overflow-hidden'>
													<Image
														src={testimonial.content}
														alt={`Work for ${testimonial.name}`}
														fill
														className='object-cover'
													/>
												</div>
											)}

											{testimonial.type === "video" && (
												<div className='relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-black'>
													<video
														src={testimonial.content}
														muted
                                          playsInline
                                          controls
														className='w-full h-full object-cover'
													/>
												</div>
											)}
										</div>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
				</Carousel>

				{/* Dot Indicators */}
				<div className='flex items-center justify-center gap-3 mt-4 relative z-30'>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							onClick={() => api?.scrollTo(index)}
							className={cn(
								"w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer",
								current === index
									? "bg-accent w-5"
									: "bg-border hover:bg-muted-foreground",
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
