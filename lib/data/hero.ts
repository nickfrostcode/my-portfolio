/** @format */

import { Mode } from "@/types";

// --- HERO TITLES & SUBTITLES ---
export const titles: Record<Mode, string> = {
	dev: "Building scalable full-stack software and modern web applications.",
	design: "Designing graphics, brand and visual identities.",
};

export const secondaryTitles: Record<Mode, string> = {
	dev: "TypeScript Ecosystem | Golang | DBM Systems | Modern Web Architecture",
	design:
		"Visual Identity Systems | Typography | Digital Media | Adobe Creative Cloud",
};

export const techStack: Record<Mode, string[]> = {
	dev: [
		"React ",
		"Next.js",
		"TypeScript",
		"Node.js/Fastify",
		"Golang",
		"PostgreSQL",
		"AI tools",
	],
	design: [
		"Photoshop",
		"CorelDraw",
		"Adobe Illustrator",
		"Figma",
		"Canva",
		"Ai tools",
	],
};

// --- QUICK STATS (manually maintained) ---
export const projectCount: Record<Mode, number> = {
	dev: 10,
	design: 50,
};

export const yearsOfExperience: Record<Mode, number> = {
	dev: 4,
	design: 6,
};
