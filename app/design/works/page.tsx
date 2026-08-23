/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { WorksPage } from "@/components/design/WorksPage";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "Graphic & Brand Design Works Portfolio",
	description:
		"Showcase of branding identities, event flyers, visual graphics, digital content, packaging, and publication designs by Nicholas Benson.",
	alternates: {
		canonical: "/works",
	},
};

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
