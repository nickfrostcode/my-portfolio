/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "Software Projects & Engineering Portfolio",
	description:
		"Explore full-stack software development projects, open-source repositories, scalable web applications, and backend systems built by Nicholas Benson.",
	alternates: {
		canonical: "/projects",
	},
};

export default function Projects() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='projects' />
				<ProjectsPage />
				<Contact />
			</main>
		</div>
	);
}
