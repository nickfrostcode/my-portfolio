/** @format */
"use client";

import { useEffect } from "react";
import { useMode } from "@/context/ModeContext";
import {
	projects,
	works,
	skillsData,
	allExperiences,
	biography,
	resumeFiles,
	socialLinks,
} from "@/lib/data";

// Type-safe definitions for the W3C / Chrome browser-native WebMCP document.modelContext API
interface WebMcpTool<TArgs = Record<string, unknown>> {
	name: string;
	title: string;
	description: string;
	inputSchema: {
		type: "object";
		properties: Record<
			string,
			{
				type: "string" | "number" | "boolean" | "array" | "object";
				description?: string;
				items?: Record<string, unknown>;
				enum?: string[];
			}
		>;
		required?: string[];
	};
	execute: (args: TArgs) => Promise<unknown> | unknown;
	annotations?: {
		readOnlyHint?: boolean;
	};
}

declare global {
	interface Document {
		modelContext?: {
			registerTool: <TArgs = Record<string, unknown>>(
				tool: WebMcpTool<TArgs>,
				options?: { signal?: AbortSignal },
			) => void;
		};
	}
}

// Helper to bypass React's prototype value override and guarantee state sync
function setNativeValue(
	el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
	value: string,
) {
	const proto = Object.getPrototypeOf(el);
	const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
	if (descriptor?.set) {
		descriptor.set.call(el, value);
	} else {
		el.value = value;
	}
	el.dispatchEvent(new Event("input", { bubbles: true }));
	el.dispatchEvent(new Event("change", { bubbles: true }));
}

export function WebMcpTools() {
	const { mode } = useMode();

	// 1. Static Tools: Registered once on mount without toolchange churn
	useEffect(() => {
		if (typeof document === "undefined" || !document.modelContext) {
			return;
		}

		const controller = new AbortController();
		const mc = document.modelContext;

		// Tool: Search Software Engineering Projects
		mc.registerTool<{ tech?: string; query?: string }>(
			{
				name: "search_software_projects",
				title: "Search Software Projects",
				description:
					"Search Nicholas Benson's full-stack software applications, APIs, and engineering projects by keyword or tech stack.",
				inputSchema: {
					type: "object",
					properties: {
						tech: {
							type: "string",
							description:
								"Filter by technology (e.g. Next.js, Go, PostgreSQL, React, Node.js, TypeScript)",
						},
						query: {
							type: "string",
							description: "Keyword to search within project titles and descriptions",
						},
					},
				},
				execute: ({ tech, query }) => {
					try {
						let list = projects.filter(
							(p) => p.mode === "dev" || p.mode === "general",
						);
						if (tech) {
							const t = tech.toLowerCase();
							list = list.filter((p) =>
								p.tech.some((item) => item.toLowerCase().includes(t)),
							);
						}
						if (query) {
							const q = query.toLowerCase();
							list = list.filter(
								(p) =>
									p.title.toLowerCase().includes(q) ||
									p.description.toLowerCase().includes(q),
							);
						}
						return {
							resultsCount: list.length,
							projects: list.map((p) => ({
								title: p.title,
								description: p.description,
								techStack: p.tech,
								demoUrl: p.link,
								status: p.status,
							})),
						};
					} catch (error) {
						return {
							error:
								error instanceof Error
									? error.message
									: "Failed to search software projects",
						};
					}
				},
				annotations: { readOnlyHint: true },
			},
			{ signal: controller.signal },
		);

		// Tool: Search Brand & Visual Design Works
		mc.registerTool<{ field?: string; query?: string }>(
			{
				name: "search_design_works",
				title: "Search Design Works",
				description:
					"Search Nicholas Benson's graphic design, brand identity, visual systems, and typography portfolio.",
				inputSchema: {
					type: "object",
					properties: {
						field: {
							type: "string",
							description:
								"Filter by design discipline (e.g. Brand Identity, UI Design, Event Graphics, Typography)",
						},
						query: {
							type: "string",
							description: "Keyword to search within design titles or tools",
						},
					},
				},
				execute: ({ field, query }) => {
					try {
						let list = works;
						if (field) {
							const f = field.toLowerCase();
							list = list.filter((w) => w.field?.toLowerCase().includes(f));
						}
						if (query) {
							const q = query.toLowerCase();
							list = list.filter(
								(w) =>
									w.title?.toLowerCase().includes(q) ||
									w.tech.some((t) => t.toLowerCase().includes(q)),
							);
						}
						return {
							resultsCount: list.length,
							works: list.map((w) => ({
								title: w.title,
								field: w.field,
								toolsUsed: w.tech,
								imageUrl: w.image,
							})),
						};
					} catch (error) {
						return {
							error:
								error instanceof Error
									? error.message
									: "Failed to search design works",
						};
					}
				},
				annotations: { readOnlyHint: true },
			},
			{ signal: controller.signal },
		);

		// Tool: Get Verified Work Experience
		mc.registerTool(
			{
				name: "get_work_experience",
				title: "Get Work Experience",
				description:
					"Retrieve Nicholas Benson's career timeline, job positions, companies, dates, and accomplishments.",
				inputSchema: {
					type: "object",
					properties: {},
				},
				execute: () => {
					try {
						return {
							experiences: allExperiences.map((exp) => ({
								role: exp.role,
								company: exp.company,
								dateRange: exp.date,
								description: exp.description,
								mode: exp.mode,
							})),
						};
					} catch (error) {
						return {
							error:
								error instanceof Error
									? error.message
									: "Failed to retrieve work experiences",
						};
					}
				},
				annotations: { readOnlyHint: true },
			},
			{ signal: controller.signal },
		);

		// Tool: Query Skills & Competencies Taxonomy
		mc.registerTool<{ type?: "hard" | "soft" }>(
			{
				name: "query_skills",
				title: "Query Skills & Tools",
				description:
					"Query categorized programming languages, frontend/backend frameworks, database systems, and design software.",
				inputSchema: {
					type: "object",
					properties: {
						type: {
							type: "string",
							enum: ["hard", "soft"],
							description: "Filter by skill type: 'hard' (technical) or 'soft' (interpersonal)",
						},
					},
				},
				execute: ({ type }) => {
					try {
						let result = skillsData;
						if (type) {
							result = result.filter((g) => g.type === type);
						}
						return { skills: result };
					} catch (error) {
						return {
							error:
								error instanceof Error ? error.message : "Failed to query skills",
						};
					}
				},
				annotations: { readOnlyHint: true },
			},
			{ signal: controller.signal },
		);

		// Tool: Pre-fill Contact Form & Scroll into View
		mc.registerTool<{
			name?: string;
			email?: string;
			subject?: string;
			category?: "freelance" | "fulltime" | "mentorship" | "other";
			message?: string;
		}>(
			{
				name: "prefill_contact_form",
				title: "Pre-fill Contact Form",
				description:
					"Pre-fill the contact form inputs on the website (name, email, subject, category, message) and scroll smoothly down to the contact section for user review and sending.",
				inputSchema: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "Full name of the person or recruiter reaching out",
						},
						email: {
							type: "string",
							description: "Contact email address",
						},
						subject: {
							type: "string",
							description: "Subject or purpose of the message",
						},
						category: {
							type: "string",
							enum: ["freelance", "fulltime", "mentorship", "other"],
							description:
								"Inquiry category: 'freelance' (Freelance Project), 'fulltime' (Full-time Role), 'mentorship' (Mentorship), or 'other'",
						},
						message: {
							type: "string",
							description: "The body of the message or project inquiry",
						},
					},
				},
				execute: ({ name, email, subject, category, message }) => {
					try {
						if (typeof document === "undefined") {
							return { error: "DOM is not available." };
						}

						const nameInput = document.getElementById("name") as HTMLInputElement | null;
						const emailInput = document.getElementById("email") as HTMLInputElement | null;
						const subjectInput = document.getElementById("subject") as HTMLInputElement | null;
						const categorySelect = document.getElementById("category") as HTMLSelectElement | null;
						const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;
						const contactSection = document.getElementById("contact");

						if (name && nameInput) setNativeValue(nameInput, name);
						if (email && emailInput) setNativeValue(emailInput, email);
						if (subject && subjectInput) setNativeValue(subjectInput, subject);
						if (category && categorySelect) setNativeValue(categorySelect, category);
						if (message && messageInput) setNativeValue(messageInput, message);

						// Smoothly scroll down to contact section
						if (contactSection) {
							contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
						}

						return {
							status: "success",
							message:
								"Contact form pre-filled and displayed on screen. Please review your message and click 'Send Message' to submit.",
							filledFields: {
								name: Boolean(name),
								email: Boolean(email),
								subject: Boolean(subject),
								category: Boolean(category),
								message: Boolean(message),
							},
						};
					} catch (error) {
						return {
							error:
								error instanceof Error
									? error.message
									: "Failed to pre-fill contact form",
						};
					}
				},
				annotations: { readOnlyHint: false },
			},
			{ signal: controller.signal },
		);

		return () => controller.abort();
	}, []);

	// 2. Mode-Dependent Tool: Re-registers only when active mode switches (dev <-> design)
	useEffect(() => {
		if (typeof document === "undefined" || !document.modelContext) {
			return;
		}

		const controller = new AbortController();
		const mc = document.modelContext;

		mc.registerTool(
			{
				name: "get_candidate_profile",
				title: "Get Candidate Profile",
				description:
					"Retrieve Nicholas Benson's bio summary, target roles, verified contact links, and downloadable resume PDF URL based on current context.",
				inputSchema: {
					type: "object",
					properties: {},
				},
				execute: () => {
					try {
						return {
							name: "Nicholas Benson (Nick Frost)",
							activeMode: mode,
							roles: [
								"Full-Stack Software Developer & Engineer",
								"Graphic, Visual & Brand Designer",
							],
							portfolioUrl: "https://nicholasbenson.cv",
							designPortfolioUrl: "https://design.nicholasbenson.cv",
							resumeDownloadUrl: resumeFiles[mode] || resumeFiles.dev,
							socialProfiles: socialLinks.map((s) => ({
								name: s.name,
								url: s.url,
							})),
							biographyOverview: biography[mode]?.intro?.join(" ") || "",
						};
					} catch (error) {
						return {
							error:
								error instanceof Error
									? error.message
									: "Failed to retrieve candidate profile",
						};
					}
				},
				annotations: { readOnlyHint: true },
			},
			{ signal: controller.signal },
		);

		return () => controller.abort();
	}, [mode]);

	return null;
}
