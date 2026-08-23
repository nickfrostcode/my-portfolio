/** @format */

import type { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { BlogPage } from "@/components/blog/BlogPage";
import { Contact } from "@/components/shared/Contact";

export const metadata: Metadata = {
	title: "Software Engineering Blog & Technical Articles",
	description:
		"Technical writings, software engineering insights, architectural deep dives, and tutorials by Nicholas Benson.",
	alternates: {
		canonical: "/blog",
	},
};

export default function Blog() {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<main className='flex-1 flex flex-col'>
				<Hero page='blog' />
				<BlogPage />
				<Contact />
			</main>
		</div>
	);
}
