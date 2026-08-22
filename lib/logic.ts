import { Experience, ModeType, Project } from "@/types";

/**
 * Generic mode filter + optional date sort. Single source of truth for how
 * content is scoped to the active mode.
 * - 'general': returns ALL items.
 * - 'dev' | 'design': returns items matching the current mode PLUS 'general'
 *   items. Items of the opposite mode are excluded entirely.
 *
 * When `getDate` is provided, the result is sorted newest -> oldest.
 * When it is omitted, insertion order is preserved (for items without a date,
 * e.g. testimonials / certificates).
 */
export function rearrangeByMode<T extends { mode?: ModeType }>(
	items: T[],
	currentMode: ModeType,
	getDate?: (item: T) => number,
): T[] {
	const scoped =
		currentMode === "general"
			? [...items]
			: items.filter(
					(item) =>
						!item.mode ||
						item.mode === currentMode ||
						item.mode === "general",
				);

	if (getDate) {
		return scoped.sort((a, b) => getDate(b) - getDate(a));
	}

	return scoped;
}

/**
 * Featured projects for the home page: up to 3, scoped to the current mode and
 * sorted by date (newest first). Projects explicitly flagged `featured` are
 * preferred; when the active mode has none flagged (e.g. design mode), it falls
 * back to the most recent work so the section is never empty.
 */
export function getFeaturedProjects(
	projects: Project[],
	currentMode: ModeType,
): Project[] {
	const scoped = rearrangeByMode(projects, currentMode, (p) => p.dateVal);
	const pinned = scoped.filter((p) => p.featured);
	return (pinned.length > 0 ? pinned : scoped).slice(0, 3);
}

/**
 * Work experiences scoped to the current mode and sorted by date (newest first).
 * The opposite mode is excluded.
 */
export function getSortedExperiences(
	experiences: Experience[],
	currentMode: ModeType,
): Experience[] {
	return rearrangeByMode(experiences, currentMode, (e) => e.dateVal);
}

/**
 * Label for the "work" listing, which reads as "Works" in design mode and
 * "Projects" in dev mode.
 */
export function workNoun(mode: ModeType): string {
	return mode === "design" ? "Works" : "Projects";
}

/**
 * Canonical URL resolver based on active mode and subdomain context.
 */
export function resolveModeHref(
	href: string,
	mode: ModeType,
	isSubdomain: boolean,
): string {
	let finalHref = href;

	if (mode === "design") {
		// In design mode, map /projects or /work to /works
		if (finalHref === "/projects" || finalHref === "/work") {
			finalHref = "/works";
		} else if (finalHref.startsWith("/projects/")) {
			finalHref = finalHref.replace("/projects", "/works");
		} else if (finalHref.startsWith("/work/")) {
			finalHref = finalHref.replace("/work", "/works");
		}

		// When accessed via path routing (e.g. /design/works), prepend /design
		if (
			!isSubdomain &&
			finalHref.startsWith("/") &&
			!finalHref.startsWith("/design")
		) {
			if (finalHref === "/") {
				finalHref = "/design";
			} else if (finalHref.startsWith("/#")) {
				finalHref = `/design${finalHref.substring(1)}`;
			} else {
				finalHref = `/design${finalHref}`;
			}
		}
	} else {
		// In dev mode, map /works or /work to /projects
		if (finalHref === "/works" || finalHref === "/work") {
			finalHref = "/projects";
		} else if (finalHref.startsWith("/works/")) {
			finalHref = finalHref.replace("/works", "/projects");
		} else if (finalHref.startsWith("/work/")) {
			finalHref = finalHref.replace("/work", "/projects");
		}
	}

	return finalHref;
}

