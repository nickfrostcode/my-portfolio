import { Experience, ModeType, Project } from "@/types";

/**
 * Generic function to rearrange items based on mode.
 * - 'general': returns all items.
 * - 'dev' | 'design': returns items matching current mode FIRST, followed by 'general' items. 
 * Items of the opposite mode are excluded.
 */
export function rearrangeByMode<T extends { mode: ModeType }>(items: T[], currentMode: ModeType): T[] {
	if (currentMode === "general") {
		return items;
	}
	
	const exactMatches = items.filter((item) => item.mode === currentMode);
	const generalMatches = items.filter((item) => item.mode === "general");
	
	return [...exactMatches, ...generalMatches];
}

/**
 * Specific logic for Featured Projects.
 * Returns up to 3 projects based on mode.
 * - 'dev': top 3 dev projects
 * - 'design': top 3 design projects
 * - 'general': 2 dev projects and 1 design project
 */
export function getFeaturedProjects(projects: Project[], currentMode: ModeType): Project[] {
	if (currentMode === "dev") {
		return projects.filter((p) => p.mode === "dev").slice(0, 3);
	}
	if (currentMode === "design") {
		return projects.filter((p) => p.mode === "design").slice(0, 3);
	}
	// general mode
	const devProjects = projects.filter((p) => p.mode === "dev").slice(0, 2);
	const designProjects = projects.filter((p) => p.mode === "design").slice(0, 1);
	return [...devProjects, ...designProjects];
}

/**
 * Logic for Work Experiences.
 * Filters by mode and sorts chronologically based on dateVal.
 */
export function getSortedExperiences(experiences: Experience[], currentMode: ModeType): Experience[] {
	// General mode: show ALL experiences sorted latest first
	if (currentMode === "general") {
		return [...experiences].sort((a, b) => b.dateVal - a.dateVal);
	}

	// Specific mode (dev or design)
	const otherMode = currentMode === "dev" ? "design" : "dev";
	
	// Get general and specific mode experiences, sorted latest first
	const primaryItems = experiences.filter((e) => e.mode === currentMode || e.mode === "general");
	const sortedPrimary = [...primaryItems].sort((a, b) => b.dateVal - a.dateVal);
	
	// Get other mode experiences, sorted latest first
	const secondaryItems = experiences.filter((e) => e.mode === otherMode);
	const sortedSecondary = [...secondaryItems].sort((a, b) => b.dateVal - a.dateVal);
	
	// Append the secondary mode experiences to the end
	return [...sortedPrimary, ...sortedSecondary];
}
