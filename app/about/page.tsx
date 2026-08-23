/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { QuickStats } from "@/components/about/QuickStats";
import { Biography } from "@/components/about/Biography";
import { Skills } from "@/components/about/Skills";
import { CredentialsGrid } from "@/components/about/CredentialsGrid";
import { WorkExperience } from "@/components/shared/WorkExperience";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "About — Full-Stack Software Developer",
	description:
		"Learn about Nicholas Benson (Nick Frost), background in computer science, software engineering career, technical credentials, and engineering leadership.",
	alternates: {
		canonical: "/about",
	},
};

export default function AboutPage() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='about' />
				<QuickStats />
				<Biography />
				<Skills />
				<WorkExperience />
				<CredentialsGrid />
				<Contact />
			</main>
		</div>
	);
}
