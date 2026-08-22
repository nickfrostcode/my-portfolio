"use client";

import { cn } from "@/lib/utils";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion, useMotionValue, animate, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

import type { ComponentType } from "react";
import type { IconType } from "react-icons";

interface TimelineItemProps {
	id: number | string;
	logo?: string;
	icon?: IconType | ComponentType<{ className?: string }>;
	card: React.ReactNode;
}

interface TimelineScrollProps {
	items: TimelineItemProps[];
}

export function TimelineScroll({ items }: TimelineScrollProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const [canScrollLeft, setScrollLeft] = useState(false);
	const [canScrollRight, setScrollRight] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);

	const checkScroll = useCallback(() => {
		if (!containerRef.current || !trackRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const trackWidth = trackRef.current.scrollWidth;
		const maxScroll = Math.max(0, trackWidth - containerWidth);
		const currentX = x.get();
		setScrollLeft(currentX < -5);
		setScrollRight(currentX > -maxScroll + 5);

		// Calculate active index based on scroll position
		const scrollAmount = window.innerWidth < 768 ? 304 : 364;
		const index = Math.min(
			items.length - 1,
			Math.max(0, Math.round(Math.abs(currentX) / scrollAmount)),
		);
		setActiveIndex(index);
	}, [items.length, x]);

	useEffect(() => {
		checkScroll();
		const unsubscribe = x.on("change", checkScroll);
		return () => unsubscribe();
	}, [x, checkScroll]);

	const handleScroll = (dir: "left" | "right") => {
		const nextIndex = dir === "left" ? activeIndex - 1 : activeIndex + 1;
		handleScrollTo(nextIndex);
	};

	const handleScrollTo = (index: number) => {
		if (!containerRef.current || !trackRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const trackWidth = trackRef.current.scrollWidth;
		const maxScroll = Math.max(0, trackWidth - containerWidth);
		const scrollAmount = window.innerWidth < 768 ? 304 : 364;

		let nextX = -(index * scrollAmount);
		nextX = Math.max(Math.min(nextX, 0), -maxScroll);
		animate(x, nextX, { type: "spring", stiffness: 200, damping: 25 });
	};

	return (
		<div className='relative w-full z-10' ref={containerRef}>
			{/* Side Controllers */}
			<button
				onClick={() => handleScroll("left")}
				disabled={!canScrollLeft}
				className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-border shadow-md hover:bg-muted transition-colors hidden sm:flex disabled:opacity-50 disabled:cursor-not-allowed z-39'
				aria-label='Previous slide'
			>
				<LuChevronLeft className='w-6 h-6' />
			</button>
			<button
				onClick={() => handleScroll("right")}
				disabled={!canScrollRight}
				className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-39 w-12 h-12 items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-border shadow-md hover:bg-muted transition-colors hidden sm:flex disabled:opacity-50 disabled:cursor-not-allowed'
				aria-label='Next slide'
			>
				<LuChevronRight className='w-6 h-6' />
			</button>

			<div className='w-full overflow-hidden pt-8 pb-16 cursor-grab active:cursor-grabbing'>
				<motion.div
					ref={trackRef}
					style={{ x }}
					className='flex items-stretch gap-6 relative z-10 w-max min-w-full'
					drag='x'
					dragConstraints={containerRef}
					dragElastic={0.1}
				>
					{/* The continuous horizontal line across the top */}
					<div className='absolute top-5.5 md:top-6.5 left-[-50vw] right-[-50vw] h-0.5 bg-border z-0' />

					{/* Start Spacer to avoid edge fade */}
					<div className='w-4 md:w-10 shrink-0' />

					<AnimatePresence mode="popLayout">
						{items.map((item) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={item.id}
									layout
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
									className='relative flex flex-col items-center shrink-0 w-70 md:w-85 z-10'
								>
									{/* The Node Dot or Logo */}
									<div className='relative w-11 h-11 md:w-13 md:h-13 rounded-full bg-background border-2 md:border-4 border-muted-foreground z-20 hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0 mt-0'>
										{item.logo ? (
											<Image
												src={item.logo}
												alt="Logo"
												fill
												className='object-cover'
											/>
										) : Icon ? (
											<Icon className='w-5 h-5 text-accent' />
										) : (
											<div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent' />
										)}
									</div>

									{/* Connecting vertical line */}
									<div className='w-0.5 h-6 md:h-10 bg-border/50 z-10' />

									{/* The Card */}
									{item.card}
								</motion.div>
							);
						})}
					</AnimatePresence>

					{/* End Spacer to avoid edge fade */}
					<div className='w-8 md:w-36 shrink-0' />
				</motion.div>
			</div>

			{/* Dot Indicators */}
			<div className='flex items-center justify-center gap-3 relative z-30'>
				{items.map((_, index) => (
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
	);
}
