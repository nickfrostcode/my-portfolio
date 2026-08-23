/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { ResumeView } from "@/components/resume/ResumeView";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "Software Engineer Resume & Technical Credentials",
	description:
		"Resume, Curriculum vitae, technical competencies, education, certifications, and work experience of Nicholas Benson.",
	alternates: {
		canonical: "/resume",
	},
};

export default function Resume() {
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
