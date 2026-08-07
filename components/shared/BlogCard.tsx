/** @format */

import Image from "next/image";
import { ModeLink } from "@/components/shared/ModeLink";
import {
	LuCodeXml as Code2,
	LuPalette as Palette,
} from "react-icons/lu";
import type { BlogPost } from "@/types";

interface BlogCardProps {
	post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
	return (
		<div className='group flex flex-col bg-card border border-border dark:border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-lg p-3 relative'>
			<ModeLink href={post.link} target={post.link !== "#" ? "_blank" : "_self"} className='absolute inset-0 z-10'>
				<span className='sr-only'>
					Read {post.title} Article
				</span>
			</ModeLink>

			{/* Post Image */}
			<div className='relative w-full aspect-video bg-muted overflow-hidden rounded-xl'>
				<Image
					src={post.image}
					alt={post.title}
					fill
					className='object-cover transition-transform duration-700 group-hover:scale-105'
				/>
				<div className='absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border text-foreground'>
					{post.mode === "dev" ? (
						<Code2 className='w-4 h-4' />
					) : post.mode === "design" ? (
						<Palette className='w-4 h-4' />
					) : null}
				</div>
			</div>

			{/* Post Details */}
			<div className='flex flex-col flex-1 px-2 py-4 space-y-4'>
				<div className='space-y-2'>
					<div className='flex items-start justify-between gap-2'>
						<h3 className='text-xl font-bold text-foreground leading-tight py-1'>
							{post.title}
						</h3>
					</div>
					<p className='text-sm text-muted-foreground font-medium'>
						{/* formatDate isn't defined yet, maybe we just print the string directly since it's already a date string */}
						{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
					</p>
					<p className='text-sm text-muted-foreground line-clamp-3 leading-relaxed mt-2'>
						{post.excerpt}
					</p>
				</div>

				{/* Category Stack Pills */}
				<div className='flex flex-wrap gap-2 pt-2'>
					{post.category.map((c) => (
						<span
							key={c}
							className='px-2 py-1 bg-card text-xs font-medium rounded-md border border-border/50 font-mono text-accent'
						>
							{c}
						</span>
					))}
				</div>

				{/* Read Article Button */}
				<div className='pt-2 mt-auto px-2 flex items-center justify-between'>
					{post.platform && (
						<span className='px-2 py-1 bg-muted/50 text-[10px] font-bold uppercase tracking-wider text-muted-foreground rounded-md border border-border/50'>
							{post.platform}
						</span>
					)}
					<div className='inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors ml-auto'>
						Read Article
					</div>
				</div>
			</div>
		</div>
	);
}
