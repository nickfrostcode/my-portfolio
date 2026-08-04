export type ModeType = "dev" | "design" | "general";

export type ContentType = "text" | "image" | "video";

export interface Testimonial {
	id: number;
	name: string;
	role: string;
	avatar: string;
	rating: number;
	type: ContentType;
	content: string;
	mode: ModeType;
}

export interface Experience {
	id: number;
	role: string;
	company: string;
	date: string;
	dateVal: number;
	description: string;
	mode: ModeType;
	logo?: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	status: string;
	mode: ModeType;
	tech: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: any; // React.ElementType
}

export interface Certificate {
	id: number;
	type: string;
	issuer: string;
	title: string;
	desc: string;
	counts: string;
	progress: string;
	mode: ModeType;
	image?: string;
}

export interface Award {
	id: number;
	title: string;
	issuer: string;
	date: string;
	description: string;
	link?: string;
	mode: ModeType;
	image?: string;
}

export interface JourneyItem {
	id: number;
	title: string;
	subtitle: string;
	date: string;
	description: string;
	icon: any; // React.ElementType
}

export interface SkillItem {
	name: string;
	icon: any; // React.ElementType
}

export interface SkillGroup {
	category: string;
	type: "hard" | "soft";
	skills: SkillItem[];
}

export interface TechCategory {
	category: string;
	items: string;
}
