/** @format */
"use client";

import { useState, useMemo } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ComingSoonProjects } from "@/components/shared/ComingSoonProjects";
import { projects } from "@/lib/data";
import { rearrangeByMode } from "@/lib/logic";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "featured";

export function ProjectsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<SortOption>("newest");

	// Scope to dev mode (dev + general), date-sorted
	const devProjects = useMemo(
		() => rearrangeByMode(projects, "dev", (p) => p.dateVal),
		[],
	);

	// Tech tags derived from visible dev projects
	const allTechTags = useMemo(
		() => Array.from(new Set(devProjects.flatMap((p) => p.tech))).sort(),
		[devProjects],
	);

	const toggleTech = (tech: string) => {
		setSelectedTechs((prev) =>
			prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
		);
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedTechs([]);
		setSortBy("newest");
	};

	const filteredProjects = useMemo(() => {
		let result = [...devProjects];

		// Search filter
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q) ||
					p.tech.some((t) => t.toLowerCase().includes(q)),
			);
		}

		// Tech filter
		if (selectedTechs.length > 0) {
			result = result.filter((p) =>
				selectedTechs.some((t) => p.tech.includes(t)),
			);
		}

		// Sort
		switch (sortBy) {
			case "newest":
				result.sort((a, b) => b.dateVal - a.dateVal);
				break;
			case "oldest":
				result.sort((a, b) => a.dateVal - b.dateVal);
				break;
			case "featured":
				result.sort(
					(a, b) =>
						Number(b.featured ?? false) - Number(a.featured ?? false) ||
						b.dateVal - a.dateVal,
				);
				break;
		}

		return result;
	}, [devProjects, searchQuery, selectedTechs, sortBy]);

	const hasActiveFilters =
		searchQuery.trim() !== "" ||
		selectedTechs.length > 0 ||
		sortBy !== "newest";

	const sortOptions: { label: string; value: SortOption }[] = [
		{ label: "Newest", value: "newest" },
		{ label: "Oldest", value: "oldest" },
		{ label: "Featured", value: "featured" },
	];

	return (
		<section className='w-full py-20 min-h-screen border-b border-border relative'>
			{/* Diagonal Pattern Background */}
			<div className='absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]'></div>
			<div className='absolute inset-0 z-0 mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_10%,black_100%)]'></div>

			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-6 relative z-10'>
				{/* Section Header & SEO Prose */}
				<div className='text-center space-y-3 max-w-3xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Software <span className='text-accent'>Projects & Engineering</span>
					</h2>
					<p className='text-muted-foreground font-medium text-base md:text-lg leading-relaxed'>
						Selected full-stack software applications, interactive web platforms, REST APIs, and scalable backend systems built with Next.js, React, Node.js, Go, TypeScript, and PostgreSQL.
					</p>
				</div>

				{/* Search Bar */}
				<div className='relative max-w-2xl mx-auto'>
					<LuSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
					<input
						type='text'
						placeholder='Search by title, description, or technology...'
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

				{/* Technology Filters */}
				{allTechTags.length > 0 && (
					<div className='flex flex-row items-center md:justify-center gap-2 flex-wrap'>
						{allTechTags.map((tech) => (
							<button
								key={tech}
								onClick={() => toggleTech(tech)}
								className={cn(
									"px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 font-mono",
									selectedTechs.includes(tech)
										? "bg-accent/10 border-accent text-accent"
										: "bg-card border-border/50 text-muted-foreground hover:border-border hover:text-foreground",
								)}
							>
								{tech}
							</button>
						))}
					</div>
				)}

				{/* Results Count */}
				<div className='flex items-center justify-between'>
					<p className='text-sm text-muted-foreground'>
						Showing{" "}
						<span className='font-semibold text-foreground'>
							{filteredProjects.length}
						</span>{" "}
						project{filteredProjects.length !== 1 ? "s" : ""}
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

				{/* Dev Grid */}
				{filteredProjects.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-25'>
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				) : (
					/* Empty State */
					<div className='flex flex-col items-center justify-center py-20 space-y-4'>
						<div className='w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center'>
							<LuSearch className='w-7 h-7 text-muted-foreground' />
						</div>
						<h3 className='text-xl font-bold text-foreground'>
							No projects found
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

				{/* Pipeline / upcoming work */}
				<hr className='my-10' />
				<ComingSoonProjects />
			</div>
		</section>
	);
}
