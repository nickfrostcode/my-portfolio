import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { DesignServices } from "@/components/home/DesignServices";
import { WorkExperience } from "@/components/shared/WorkExperience";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

export default function DesignHomePage() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='home' />
				<AboutPreview />
				<DesignServices />
				<WorkExperience />
				<Testimonials />
				<Contact />
			</main>
		</div>
	);
}
