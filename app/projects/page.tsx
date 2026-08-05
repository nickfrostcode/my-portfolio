/** @format */
"use client";

import { Hero } from "@/components/shared/Hero";
import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { Contact } from "@/components/shared/Contact";

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
