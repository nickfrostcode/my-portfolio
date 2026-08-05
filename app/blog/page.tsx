/** @format */
"use client";

import { Hero } from "@/components/shared/Hero";
import { BlogPage } from "@/components/blog/BlogPage";
import { Contact } from "@/components/shared/Contact";

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
