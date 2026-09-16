/** @format */

import { BlogPost } from "@/types";

/**
 * Blog Posts Data
 *
 * Template structure for adding articles in the future:
 * {
 *    id: 1,
 *    title: "Title of your article",
 *    excerpt: "A concise 1-2 sentence overview of the article content for SEO cards and previews.",
 *    image: "/path/to/cover-image.png", // or external URL
 *    link: "https://medium.com/@nickfrostech/... or /blog/slug",
 *    date: "YYYY-MM-DD",
 *    mode: "dev" | "design" | "general",
 *    category: ["Category 1", "Category 2"],
 *    platform: "Medium" | "Dev.to" | "LinkedIn" | "Substack" | "Self-Hosted",
 * }
 */
export const blogPosts: BlogPost[] = [];
