/** @format */
"use client";

import { Hero } from "@/components/shared/Hero";
import { WorksPage } from "@/components/design/WorksPage";
import { Contact } from "@/components/shared/Contact";

export default function DesignWorkPage() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='projects' />
				<WorksPage />
				<Contact />
			</main>
		</div>
	);
}
