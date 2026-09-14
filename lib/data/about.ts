/** @format */

import { Mode, Language, TechCategory } from "@/types";

// --- ABOUT OVERVIEW (home "About Me" card; first-person, per mode) ---
export const aboutOverview: Record<Mode, string> = {
	dev: "I'm a Full-stack software developer and engineer with a strong focus on frontend development and user experience. Experienced in designing, building, and maintaining modern web applications and digital products from concept to deployment. Focused on developing scalable, reliable, and intuitive software that solves real-world problems.",
	design:
		"I'm a Graphic Designer and Brand Identity Specialist experienced in developing logos, visual identities, marketing materials, digital graphics, and print-ready artwork for organizations, events, and digital products. Skilled in translating concepts into cohesive visual systems through typography, color, composition, layout, and consistent brand application. Experienced in managing design projects from concept and ideation through revisions, production, and final delivery, with a strong focus on clear and effective visual communication.",
};

// --- BIOGRAPHY (About page; per mode) ---
export const biography: Record<
	Mode,
	{
		intro: string[];
		quote: string;
		sections: { heading: string; body: string }[];
	}
> = {
	dev: {
		intro: [
			"I'm a full-stack software developer and engineer with a strong focus on frontend development and user experience. I enjoy designing, building, and maintaining modern web applications and digital products from concept all the way through to deployment.",
			"My path into software started with a genuine curiosity about how digital products are built. Studying Computer Science gave me a strong foundation in software engineering, algorithms, databases, and modern web technologies, which I now apply to building scalable, reliable, and intuitive software.",
			"Today, I work across the stack: crafting responsive interfaces with React, Next.js, and TypeScript, developing backend APIs and services with Node.js, Fastify, and Go, and designing PostgreSQL databases, authentication, and secure data systems. I care about writing maintainable code and shipping software that solves real-world problems.",
		],
		quote:
			"I focus on building scalable, reliable, and intuitive software that solves real-world problems.",
		sections: [
			{
				heading: "How I approach engineering",
				body: "I like to understand a problem end to end before building. Software engineering gives me the structure, logic, and reliability an application needs, and I pair that with a focus on user experience so the result is not only correct but genuinely usable. From architecture and reusable components to testing, deployment, and monitoring, I enjoy owning the full lifecycle of a product.",
			},
			{
				heading: "What drives my work?",
				body: "I'm motivated by continuous learning and meaningful problem-solving. I enjoy exploring new technologies, improving performance, and taking on projects that challenge me to think differently. Contributing to open source and serving in student leadership have strengthened my ability to collaborate, communicate, and build solutions that create real impact.",
			},
		],
	},
	design: {
		intro: [
			"I'm a graphic designer and brand identity specialist focused on creating clear, distinctive, and purposeful visual identities. I enjoy developing brand concepts, digital graphics, marketing materials, and visual systems from concept to final delivery.",
			"My design journey began alongside my studies in Computer Science, where a growing interest in visual communication led me to explore logo design, brand identity, and layout. Over time I developed a strong focus on typography, composition, and visual consistency, and a habit of translating ideas into effective visual communication.",
			"Today, I create visual identity systems that cover typography, color palettes, logo usage, and supporting graphics, along with promotional and social media designs for organizations, events, and digital products. I manage projects from concept and revisions through final digital and print-ready delivery.",
		],
		quote:
			"Good design translates ideas into clear, distinctive, and effective visual communication.",
		sections: [
			{
				heading: "How I approach design",
				body: "I start from the idea a brand or product needs to communicate, then shape it through typography, composition, color, and consistency. Whether it's a logo, a brand identity system, a flyer, or a social media campaign, I aim for work that is distinctive, purposeful, and visually coherent across every touchpoint.",
			},
			{
				heading: "What drives my work?",
				body: "I'm motivated by continuous learning and meaningful problem-solving. I enjoy exploring new styles, refining my craft, and taking on projects that challenge me to think differently. Leading visual design for departmental communications and student initiatives has strengthened my ability to collaborate, communicate, and deliver work that creates real impact.",
			},
		],
	},
};

// --- TECHNICAL ARSENAL (per mode) ---
export const technicalArsenal: Record<Mode, TechCategory[]> = {
	dev: [
		{
			category: "Frontend",
			items: "React, Next.js, TypeScript, Tailwind, CSS, JavaScript",
		},
		{
			category: "Backend & Data",
			items: "Node.js, Fastify, Express, Golang, PostgreSQL, Supabase",
		},
		{
			category: "AI & Integrations",
			items: "Open AI, Claude, AWS Bedrock, Stripe",
		},
		{
			category: "Infrastructure",
			items: "Vercel, Cloudflare, Git, AWS, Render, Websocket, e.t.c.",
		},
	],
	design: [
		{
			category: "Design Tools",
			items: "Photoshop, Illustrator, CorelDraw, Figma, Canva",
		},
		{
			category: "AI Tools",
			items: "Midjourney, Gemini, Groq, Copilot, ChatGpt, Claude",
		},
		{
			category: "Ideation",
			items: "Pinterest, Behance, Dribbble, Social Media, etc",
		},
	],
};

// --- LANGUAGES (spoken languages) ---
export const spokenLanguages: Language[] = [
	{ name: "English", proficiency: "Native" },
	{ name: "Yoruba", proficiency: "Native" },
];
