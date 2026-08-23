/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { ResumeView } from "@/components/resume/ResumeView";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "Graphic Designer Resume & Creative Credentials",
	description:
		"Design experience, visual capabilities, design certifications, and creative journey of Nicholas Benson.",
	alternates: {
		canonical: "/resume",
	},
};

export default function DesignResumePage() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='resume' />
				<ResumeView />
				<Contact />
			</main>
		</div>
	);
}
