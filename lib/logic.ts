import { Experience, ModeType, Project, Testimonial } from "@/types";

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
	// Get relevant items (current mode + general)
	const relevantItems = currentMode === "general" 
		? experiences.filter((e) => e.mode === "dev" || e.mode === "general")
		: experiences.filter((e) => e.mode === currentMode || e.mode === "general");

	// Sort chronologically (earlier first)
	const chronological = [...relevantItems].sort((a, b) => a.dateVal - b.dateVal);
	
	// If not general mode, pull exact matches to the front while maintaining their relative chronological order
	if (currentMode !== "general") {
		const exact = chronological.filter(e => e.mode === currentMode);
		const general = chronological.filter(e => e.mode === "general");
		return [...exact, ...general];
	}
	
	return chronological;
}
