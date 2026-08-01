/** @format */

import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground font-sans'>
			<main className='flex-1 flex flex-col'>
				<Hero />
				<AboutPreview />
				<FeaturedProjects />
				<Testimonials />
			</main>
		</div>
	);
}
