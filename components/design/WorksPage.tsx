/** @format */
"use client";

import { useState, useMemo } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { WorkCard } from "@/components/design/WorkCard";
import { works } from "@/lib/data";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest";

export function WorksPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<SortOption>("newest");

	// Design works, sorted by date (newest first)
	const designWorks = useMemo(
		() => [...works].sort((a, b) => b.dateVal - a.dateVal),
		[],
	);

	// Collect all category fields and tools for tag filtering
	const allFilterTags = useMemo(() => {
		return Array.from(
			new Set(designWorks.flatMap((p) => [p.field, ...p.tech])),
		).sort();
	}, [designWorks]);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedTags([]);
		setSortBy("newest");
	};

	const filteredWorks = useMemo(() => {
		let result = [...designWorks];

		// Search filter
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.field.toLowerCase().includes(q) ||
					p.tech.some((t) => t.toLowerCase().includes(q)),
			);
		}

		// Tag filter
		if (selectedTags.length > 0) {
			result = result.filter(
				(p) =>
					selectedTags.some((tag) => p.tech.includes(tag)) ||
					selectedTags.includes(p.field),
			);
		}

		// Sort
		if (sortBy === "newest") {
			result.sort((a, b) => b.dateVal - a.dateVal);
		} else {
			result.sort((a, b) => a.dateVal - b.dateVal);
		}

		return result;
	}, [designWorks, searchQuery, selectedTags, sortBy]);

	const hasActiveFilters =
		searchQuery.trim() !== "" ||
		selectedTags.length > 0 ||
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
				{/* Search Bar */}
				<div className='relative max-w-2xl mx-auto'>
					<LuSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
					<input
						type='text'
						placeholder='Search by title, field, or design tool...'
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

				{/* Tag Filters */}
				{allFilterTags.length > 0 && (
					<div className='flex flex-row items-center md:justify-center gap-2 flex-wrap'>
						{allFilterTags.map((tag) => (
							<button
								key={tag}
								onClick={() => toggleTag(tag)}
								className={cn(
									"px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200",
									selectedTags.includes(tag)
										? "bg-accent/10 border-accent text-accent"
										: "bg-card border-border/50 text-muted-foreground hover:border-border hover:text-foreground",
								)}
							>
								{tag}
							</button>
						))}
					</div>
				)}

				{/* Results Count */}
				<div className='flex items-center justify-between'>
					<p className='text-sm text-muted-foreground'>
						Showing{" "}
						<span className='font-semibold text-foreground'>
							{filteredWorks.length}
						</span>{" "}
						work{filteredWorks.length !== 1 ? "s" : ""}
						{hasActiveFilters && (
							<button
								onClick={clearFilters}
								className='ml-3 text-xs font-medium text-muted-foreground hover:text-accent transition-colors underline underline-offset-2'
							>
								Clear all
							</button>
						)}
					</p>
				</div>

				{/* 4-column Masonry Layout */}
				{filteredWorks.length > 0 ? (
					<div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-25'>
						{filteredWorks.map((work) => (
							<WorkCard key={work.id} work={work} />
						))}
					</div>
				) : (
					/* Empty State */
					<div className='flex flex-col items-center justify-center py-20 space-y-4'>
						<div className='w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center'>
							<LuSearch className='w-7 h-7 text-muted-foreground' />
						</div>
						<h3 className='text-xl font-bold text-foreground'>
							No works found
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

				{/* "Amongst many others..." section */}
				<div className='flex flex-col items-center justify-center'>
					<div className='relative w-full max-w-md'>
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-border/50'></div>
						</div>
						<div className='relative flex justify-center'>
							<span className='bg-background px-4 text-sm font-medium text-muted-foreground tracking-wider uppercase'>
								Amongst many others...
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
