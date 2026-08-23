/** @format */
"use client";

import { useState, useMemo } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { BlogCard } from "@/components/shared/BlogCard";
import { blogPosts } from "@/lib/data";
import { rearrangeByMode } from "@/lib/logic";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest";

export function BlogPage() {
	const { mode } = useMode();

	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<SortOption>("newest");

	// Scope to the active mode (dev+general / design+general / all), date-sorted.
	const modePosts = useMemo(
		() => rearrangeByMode(blogPosts, mode, (p) => new Date(p.date).getTime()),
		[mode],
	);

	// Category tags derived from the visible (mode-scoped) set.
	const allCategoryTags = useMemo(
		() => Array.from(new Set(modePosts.flatMap((p) => p.category))).sort(),
		[modePosts],
	);

	const toggleCategory = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((t) => t !== category)
				: [...prev, category],
		);
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedCategories([]);
		setSortBy("newest");
	};

	const filteredPosts = useMemo(() => {
		let result = [...modePosts];

		// Search filter
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.excerpt.toLowerCase().includes(q) ||
					p.category.some((c) => c.toLowerCase().includes(q)),
			);
		}

		// Category filter
		if (selectedCategories.length > 0) {
			result = result.filter((p) =>
				selectedCategories.some((c) => p.category.includes(c)),
			);
		}

		// Sort
		switch (sortBy) {
			case "newest":
				result.sort(
					(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
				);
				break;
			case "oldest":
				result.sort(
					(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
				);
				break;
		}

		return result;
	}, [modePosts, searchQuery, selectedCategories, sortBy]);

	const hasActiveFilters =
		searchQuery.trim() !== "" ||
		selectedCategories.length > 0 ||
		sortBy !== "newest";

	const sortOptions: { label: string; value: SortOption }[] = [
		{ label: "Newest", value: "newest" },
		{ label: "Oldest", value: "oldest" },
	];

	return (
		<section className='w-full py-12 md:py-16 min-h-screen border-b border-border relative'>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'></div>
			<div className='absolute inset-0 z-0 mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-6 relative z-10'>
				{/* Section Header & SEO Prose */}
				<div className='text-center space-y-3 max-w-3xl mx-auto mb-8'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Articles & <span className='text-accent'>Technical Insights</span>
					</h2>
					<p className='text-muted-foreground font-medium text-base md:text-lg'>
						Articles, tutorials, and architectural insights on full-stack software engineering, Next.js, React, TypeScript, and distributed backend systems.
					</p>
				</div>

				{modePosts.length === 0 ? (
					/* Clean Coming Soon State */
					<div className='flex flex-col items-center justify-center py-20 px-4 bg-card/60 border border-border rounded-3xl max-w-2xl mx-auto text-center space-y-4 my-8'>
						<h3 className='text-2xl font-bold text-foreground'>
							Articles Coming Soon
						</h3>
						<p className='text-muted-foreground text-base max-w-lg mx-auto leading-relaxed'>
							I am currently authoring in-depth technical guides on full-stack web architectures, database performance optimization, and scalable Next.js systems. Stay tuned for upcoming publications!
						</p>
					</div>
				) : (
					<>
						{/* Search Bar */}
						<div className='relative max-w-2xl mx-auto'>
							<LuSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
							<input
								type='text'
								placeholder='Search by title, excerpt, or category...'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='w-full pl-12 pr-10 py-3.5 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm'
							/>
							{searchQuery && (
								<button
									onClick={() => setSearchQuery("")}
									className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
									aria-label='Clear search'
								>
									<LuX className='w-4 h-4' />
								</button>
							)}
						</div>

						{/* Sort Row */}
						<div className='flex flex-row items-center md:justify-center gap-3 flex-wrap'>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value as SortOption)}
								className='px-3 py-2 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer'
							>
								{sortOptions.map((opt) => (
									<option key={opt.value} value={opt.value}>
										{opt.label}
									</option>
								))}
							</select>
							{hasActiveFilters && (
								<button
									onClick={clearFilters}
									className='text-xs font-medium text-muted-foreground hover:text-accent transition-colors underline underline-offset-2'
								>
									Clear all
								</button>
							)}
						</div>

						{/* Category Filters */}
						{allCategoryTags.length > 0 && (
							<div className='flex flex-row items-center md:justify-center gap-2 flex-wrap'>
								{allCategoryTags.map((category) => (
									<button
										key={category}
										onClick={() => toggleCategory(category)}
										className={cn(
											"px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 font-mono",
											selectedCategories.includes(category)
												? "bg-accent/10 border-accent text-accent"
												: "bg-card border-border/50 text-muted-foreground hover:border-border hover:text-foreground",
										)}
									>
										{category}
									</button>
								))}
							</div>
						)}

						{/* Results Count */}
						<div className='flex items-center justify-between'>
							<p className='text-sm text-muted-foreground'>
								Showing{" "}
								<span className='font-semibold text-foreground'>
									{filteredPosts.length}
								</span>{" "}
								post{filteredPosts.length !== 1 ? "s" : ""}
							</p>
						</div>

						{/* Posts Grid */}
						{filteredPosts.length > 0 ? (
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-25'>
								{filteredPosts.map((post) => (
									<BlogCard key={post.id} post={post} />
								))}
							</div>
						) : (
							/* Empty State */
							<div className='flex flex-col items-center justify-center py-20 space-y-4'>
								<div className='w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center'>
									<LuSearch className='w-7 h-7 text-muted-foreground' />
								</div>
								<h3 className='text-xl font-bold text-foreground'>
									No posts found
								</h3>
								<p className='text-muted-foreground text-center max-w-md'>
									Try adjusting your search query or filters to find what
									you&apos;re looking for.
								</p>
								<button
									onClick={clearFilters}
									className='mt-2 px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors'
								>
									Clear All Filters
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</section>
	);
}
