/** @format */
"use client";

import { useState, useMemo } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { useMode } from "@/context/ModeContext";
import { BlogCard } from "@/components/shared/BlogCard";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest";
type TabOption = "all" | "dev" | "design" | "research" | "misc";

// Extract all unique category tags from blogs
const allCategoryTags = Array.from(new Set(blogPosts.flatMap((p) => p.category))).sort();

export function BlogPage() {
	const { mode } = useMode();

	// Default tab to current mode, or "all" for general
	const [activeTab, setActiveTab] = useState<TabOption>(
		mode === "dev" || mode === "design" ? mode : "all",
	);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<SortOption>("newest");

	const toggleCategory = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category) ? prev.filter((t) => t !== category) : [...prev, category],
		);
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedCategories([]);
		setSortBy("newest");
		setActiveTab(mode === "dev" || mode === "design" ? mode : "all");
	};

	const filteredPosts = useMemo(() => {
		let result = [...blogPosts];

		// Tab filter
		if (activeTab !== "all") {
			result = result.filter((p) => p.mode === activeTab);
		}

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
				result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
				break;
			case "oldest":
				result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
				break;
		}

		return result;
	}, [activeTab, searchQuery, selectedCategories, sortBy]);

	const hasActiveFilters =
		searchQuery.trim() !== "" ||
		selectedCategories.length > 0 ||
		sortBy !== "newest" ||
		activeTab !== (mode === "dev" || mode === "design" ? mode : "all");

	const tabs: { label: string; value: TabOption }[] = [
		{ label: "All", value: "all" },
		{ label: "Developer", value: "dev" },
		{ label: "Designer", value: "design" },
		{ label: "Researches", value: "research" },
		{ label: "Miscallenous", value: "misc" },
	];

	const sortOptions: { label: string; value: SortOption }[] = [
		{ label: "Newest", value: "newest" },
		{ label: "Oldest", value: "oldest" },
	];

	return (
		<section className='w-full py-20 min-h-screen border-b border-border relative'>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'></div>
			<div className='absolute inset-0 z-0 mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-6 relative z-10'>
				{/* Page Header */}
				<div className='text-center space-y-3'>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight text-foreground'>
						My <span className='text-accent'>Blog</span>
					</h1>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto text-lg'>
						Thoughts, ideas, and experiences in software engineering and visual design.
					</p>
				</div>

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
						>
							<LuX className='w-4 h-4' />
						</button>
					)}
				</div>

				{/* Tabs & Sort Row */}
				<div className='flex flex-row items-center md:justify-center gap-4 flex-wrap'>
					{/* Mode Tabs */}
					<div className='flex items-center gap-1 flex-wrap'>
						{tabs.map((tab) => (
							<button
								key={tab.value}
								onClick={() => setActiveTab(tab.value)}
								className={cn(
									"px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
									activeTab === tab.value
										? "bg-foreground text-background"
										: "text-muted-foreground hover:text-foreground hover:bg-card",
								)}
							>
								{tab.label}
							</button>
						))}
					</div>

					{/* Sort Dropdown */}
					<div className='flex items-center gap-3'>
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
				</div>

				{/* Category Filters */}
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
			</div>
		</section>
	);
}
