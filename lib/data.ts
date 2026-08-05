/** @format */

import {
	Certificate,
	Experience,
	Project,
	SocialLink,
	TechCategory,
	Testimonial,
	Award,
	JourneyItem,
	SkillGroup,
	BlogPost,
} from "@/types";
import {
	FaGithub,
	FaLinkedinIn,
	FaXTwitter,
	FaInstagram,
	FaWhatsapp,
	FaCode,
	FaServer,
	FaFigma,
	FaReact,
	FaNodeJs,
	FaUsers,
	FaTrello,
	FaLightbulb,
	FaRocket,
	FaPalette,
	FaVideo,
	FaSchool,
	FaCrown,
	FaUserTie,
	FaBookOpen,
	FaDesktop,
	FaBriefcase,
	FaGraduationCap,
	FaGolang,
	FaGoogleDrive,
	FaFileWord,
	FaFileExcel,
	FaFilePowerpoint,
   FaThreads,
   FaTiktok,
} from "react-icons/fa6";
import {
	SiTypescript,
	SiNextdotjs,
	SiPostgresql,
	SiTailwindcss,
	SiVuedotjs,
	SiShadcnui,
	SiPython,
	SiJavascript,
	SiFastify,
	SiExpress,
	SiSupabase,
	SiCoreldraw,
	SiGooglegemini,
	SiAnthropic,
	SiGithubcopilot,
	SiCursor,
} from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { FaBirthdayCake, FaPlusCircle } from "react-icons/fa";
import { DiIllustrator, DiJavascript, DiPhotoshop } from "react-icons/di";
import { RiSpeakAiFill } from "react-icons/ri";
import { BsOpenai } from "react-icons/bs";

// --- HERO DATA ---
export const titles = {
	general:
		"I build digital experiences through software engineering and visual design.",
	dev: "Building scalable software and modern web applications.",
	design: "Designing visual identities and intuitive digital experiences.",
};

export const secondaryTitles = {
	general:
		"TypeScript Ecosystem | Golang | DBM Systems | Adobe Suites | AI Tools",
	dev: "Also working across visual and graphics design.",
	design: "Also working across software and web development.",
};

export const techStack = {
	general: [
		"Computer Scientist",
		"Software Developer",
		"Visual & Graphic Designer",
	],
	dev: [
		"React/Next.js",
		"TypeScript",
		"Node.js/Fastify",
		"PostgreSQL",
		"AI tools",
	],
	design: ["Photoshop", "CorelDraw", "AI", "Figma", "Canva", "Ai tools"],
};

// --- ABOUT DATA ---
export const certificates: Certificate[] = [
	{
		id: 1,
		type: "Academic",
		issuer: "Federal University Oye Ekiti (FUOYE)",
		title: "B.Sc Computer Science",
		desc: "Comprehensive study of algorithms, data structures, software engineering, and computer architecture.",
		counts: "(Core CS Curriculum)",
		progress: "400L",
		mode: "general",
		image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 2,
		type: "Hard Skill",
		issuer: "AWS",
		title: "AWS Certified Cloud Practitioner",
		desc: "Demonstrated overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
		counts: "(13 Hard • 20 Soft)",
		progress: "15/33",
		mode: "dev",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		type: "Hard Skill",
		issuer: "Meta",
		title: "Front-End Developer Professional",
		desc: "Mastered building responsive, interactive applications with React and advanced UI/UX principles.",
		counts: "(13 Hard • 20 Soft)",
		progress: "16/33",
		mode: "dev",
		image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
	},
];

export const technicalArsenal: Record<string, TechCategory[]> = {
	general: [
		{ category: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
		{ category: "Backend & Data", items: "Node.js, Fastify, PostgreSQL" },
		{
			category: "Visual & Graphic Design",
			items: "Adobe Photoshop, CorelDraw, Figma, Canva",
		},
		{
			category: "AI & Integrations",
			items: "Gemini, Claude, Kimi, Grok, Stitch, Codex, AWS Bedrock",
		},
	],
	dev: [
		{
			category: "Frontend",
			items: "React, Next.js, TypeScript, Tailwind, Expo / React Native",
		},
		{
			category: "Backend & Data",
			items: "Node.js, Fastify, PostgreSQL, Redis",
		},
		{ category: "Infrastructure", items: "Vercel, Cloudflare, Git, AWS" },
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
		{ category: "Idealizations", items: "Pinterest, Behance, Dribbble, etc" },
	],
};

// --- PROJECTS DATA ---
export const projects: Project[] = [
	{
		id: 1,
		title: "Uniscore",
		description:
			"Estimate admission aggregate scores for Nigerian universities, polytechnics, and colleges of education. Calculate your chances with JAMB scores and O'Level grades.",
		image: "https://uniscore.vercel.app/og.png",
		link: "https://uniscore.vercel.app",
		status: "Completed",
		mode: "dev",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
	},
	{
		id: 2,
		title: "Ttenda",
		description:
			"Smart attendance management system for general use. Location-based attendance tracking, geofencing verification, real-time session management, and Excel reporting.",
		image: "https://ttenda.vercel.app/og_image.png",
		link: "https://ttenda.vercel.app",
		status: "Ongoing",
		mode: "dev",
		tech: ["React", "Node.js"],
	},
	{
		id: 3,
		title: "Nickspay",
		description:
			"A secure and seamless payment gateway and financial technology platform.",
		image: "https://nickspay.com.ng/og.webp",
		link: "https://nickspay.com.ng",
		status: "Ongoing",
		mode: "dev",
		tech: ["Next.js", "PostgreSQL", "Stripe"],
	},
	{
		id: 4,
		title: "Brand Identity Design",
		description:
			"A comprehensive brand identity including logo, typography, and color palette for a fintech startup.",
		image: "https://nickspay.com.ng/og.webp",
		link: "#",
		status: "Completed",
		mode: "design",
		tech: ["Illustrator", "Photoshop"],
	},
	{
		id: 5,
		title: "Modern Flyer Design",
		description:
			"Eye-catching promotional materials and digital flyers for a major tech conference.",
		image: "https://ttenda.vercel.app/og_image.png",
		link: "#",
		status: "Completed",
		mode: "design",
		tech: ["Photoshop"],
	},
	{
		id: 6,
		title: "Minimalist Logo Design",
		description:
			"A clean, memorable, and scalable logo for a fast-growing tech startup.",
		image: "https://uniscore.vercel.app/og.png",
		link: "#",
		status: "Completed",
		mode: "design",
		tech: ["Illustrator", "Figma", "CorelDraw"],
	},
];

export const allExperiences: Experience[] = [
	{
		id: 1,
		role: "Software Engineering Intern",
		company: "Tech Innovations Lab",
		date: "Jan 2022 - Jun 2022",
		dateVal: 202201,
		description: `Assisted in migrating monolithic legacy architectures to scalable microservices using Node.js and Docker. Optimized database query performance by 25%.`,
		mode: "dev",
		logo: "https://i.pravatar.cc/150?u=techstart",
	},
	{
		id: 101,
		role: "UI/UX Design Intern",
		company: "Tech Innovations Lab",
		date: "Jan 2022 - Jun 2022",
		dateVal: 202201,
		description: `Collaborated with senior designers to create wireframes and high-fidelity mockups. Conducted user research to improve onboarding flows.`,
		mode: "design",
		logo: "https://i.pravatar.cc/150?u=techstart",
	},
	{
		id: 2,
		role: "Systems Research Assistant",
		company: "University CS Lab",
		date: "Jul 2022 - Dec 2022",
		dateVal: 202207,
		description:
			"Assisted in research on distributed systems, running simulations and analyzing data output using Python and bash scripts.",
		mode: "dev",
		logo: "https://i.pravatar.cc/150?u=creative",
	},
	{
		id: 102,
		role: "HCI Research Assistant",
		company: "University CS Lab",
		date: "Jul 2022 - Dec 2022",
		dateVal: 202207,
		description:
			"Conducted research on Human-Computer Interaction, designing intuitive interfaces for complex data visualization dashboards using Figma and React.",
		mode: "design",
		logo: "https://i.pravatar.cc/150?u=creative",
	},
	{
		id: 3,
		role: "Systems Engineer",
		company: "FinTech Solutions",
		date: "Jan 2023 - Dec 2023",
		dateVal: 202301,
		description:
			"Designed and implemented robust backend APIs using Fastify and PostgreSQL. Ensured high availability and implemented strict security protocols for financial transactions.",
		mode: "dev",
	},
	{
		id: 103,
		role: "Product Designer",
		company: "FinTech Solutions",
		date: "Jan 2023 - Dec 2023",
		dateVal: 202301,
		description:
			"Spearheaded the redesign of the core banking application, improving user retention by 15% through intuitive navigation and better visual hierarchy.",
		mode: "design",
	},
	{
		id: 4,
		role: "Frontend Architect",
		company: "Innovate Inc.",
		date: "Jan 2024 - Present",
		dateVal: 202401,
		description:
			"Architecting scalable frontend solutions using Next.js and TypeScript. Optimizing performance and establishing core component libraries for engineering teams.",
		mode: "dev",
	},
	{
		id: 104,
		role: "Design Technologist",
		company: "Innovate Inc.",
		date: "Jan 2024 - Present",
		dateVal: 202401,
		description:
			"Bridging the gap between engineering and design by architecting scalable design systems. Ensuring ADA compliance and pixel-perfect UI implementation across enterprise SaaS products.",
		mode: "design",
	},
	{
		id: 5,
		role: "Full Stack Software Engineer",
		company: "Enterprise Solutions Ltd.",
		date: "Mar 2023 - Present",
		dateVal: 202303,
		description:
			"Leading the development of highly scalable web applications leveraging Next.js and serverless architecture. Managing end-to-end deployment pipelines and CI/CD workflows.",
		mode: "dev",
	},
	{
		id: 105,
		role: "Lead Product Designer",
		company: "Enterprise Solutions Ltd.",
		date: "Mar 2023 - Present",
		dateVal: 202303,
		description:
			"Directing product design strategy across multiple client portfolios. Designing comprehensive design systems that reduced development time by 30%.",
		mode: "design",
	},
	{
		id: 6,
		role: "Open Source Contributor",
		company: "Various Repositories",
		date: "Oct 2023 - Present",
		dateVal: 202310,
		description:
			"Actively contributing to open-source algorithmic libraries and modern React frameworks. Focus on code optimization, memory management, and comprehensive documentation.",
		mode: "dev",
	},
	{
		id: 106,
		role: "Open Source Design Contributor",
		company: "Various Repositories",
		date: "Oct 2023 - Present",
		dateVal: 202310,
		description:
			"Contributing to open-source UI libraries, designing accessible components, icon sets, and providing comprehensive usage guidelines for community adoption.",
		mode: "design",
	},
];

// --- TESTIMONIALS DATA ---
export const allTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Dr. Sarah Jenkins",
		role: "VP of Engineering @ TechFlow",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		rating: 5,
		type: "text",
		content:
			"Nicholas's deep understanding of computer science principles shines through his code. His strict adherence to technical best practices, highly scalable system architecture, and robust memory management is entirely unmatched. Our engineering team was blown away by the quality of the systems he deployed.",
		mode: "dev",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Chief Architect @ StartupX",
		avatar: "https://i.pravatar.cc/150?u=michael",
		rating: 4,
		type: "image",
		content:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
		mode: "dev",
	},
	{
		id: 3,
		name: "Elena Rodriguez",
		role: "Director of Product Design",
		avatar: "https://i.pravatar.cc/150?u=elena",
		rating: 5,
		type: "text",
		content:
			"The level of interaction design and systems thinking completely elevated our product. Nicholas is a true professional bridging the gap between hardcore engineering and user-centric design. Every micro-interaction feels fluid and natural, proving his mastery over Human-Computer Interaction.",
		mode: "design",
	},
	{
		id: 4,
		name: "David Kim",
		role: "CTO @ DataSystems",
		avatar: "https://i.pravatar.cc/150?u=david",
		rating: 5,
		type: "video",
		content: "https://www.w3schools.com/html/mov_bbb.mp4",
		mode: "dev",
	},
	{
		id: 5,
		name: "Jessica Walsh",
		role: "Head of Digital Experiences",
		avatar: "https://i.pravatar.cc/150?u=jessica",
		rating: 5,
		type: "text",
		content:
			"His redesign of our core data platform increased our user retention by 40%. The UI choices were absolutely flawless, and the entire architecture was rebuilt from the ground up to support our growing data needs flawlessly.",
		mode: "design",
	},
	{
		id: 6,
		name: "Tom Hardy",
		role: "Lead Researcher @ Visionary",
		avatar: "https://i.pravatar.cc/150?u=tom",
		rating: 4,
		type: "image",
		content:
			"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
		mode: "design",
	},
];

// --- SOCIAL LINKS DATA ---
export const socialLinks: SocialLink[] = [
	{ name: "GitHub", url: "https://github.com/nickfrostcode", icon: FaGithub },
	{ name: "Email", url: "mailto:bensonicholas206@gmail.com", icon: LuMail },
	{
		name: "LinkedIn",
		url: "https://linkedin.com/nickfrostcode",
		icon: FaLinkedinIn,
	},
	{
		name: "X (formerly Twitter)",
		url: "https://x.com/nickfrostcode",
		icon: FaXTwitter,
	},
	{
		name: "Instagram",
		url: "https://instagram.com/nickfrostcode",
		icon: FaInstagram,
	},
	{
		name: "Whatsapp",
		url: "https://whatsapp.com/nickfrostcode",
		icon: FaWhatsapp,
	},
	{
		name: "Threads",
		url: "https://threads.com/nickfrostcode",
		icon: FaThreads,
	},
	{
		name: "TikTok",
		url: "https://tiktok.com/nickfrostcode",
		icon: FaTiktok,
	},
];

// --- JOURNEY DATA ---
export const journey: JourneyItem[] = [
	{
		id: 1,
		title: "Departmental President",
		subtitle: "400 Level",
		date: "400 LVL",
		description:
			"Elected as the President of the Computer Science department. Leading the student body, organizing tech events, and advocating for student welfare and academic excellence.",
		icon: FaCrown,
	},
	{
		id: 2,
		title: "Departmental Vice President",
		subtitle: "300 Level",
		date: "300 LVL",
		description:
			"Served as the Vice President of the department, coordinating administrative affairs and assisting the president in executing academic programs.",
		icon: FaUserTie,
	},
	{
		id: 3,
		title: "Assistant Librarian",
		subtitle: "200 Level",
		date: "200 LVL",
		description:
			"Appointed as the Assistant Librarian of the department, fostering a culture of reading and securing resources for computer science students.",
		icon: FaBookOpen,
	},
	{
		id: 4,
		title: "Admission to FUOYE",
		subtitle: "Computer Science",
		date: "2023",
		description:
			"Gained admission to study Computer Science at the Federal University Oye-Ekiti (FUOYE). This marked the beginning of my formal academic journey into software engineering.",
		icon: FaGraduationCap,
	},
	{
		id: 5,
		title: "First Desktop Computer",
		subtitle: "SS1",
		date: "SS1",
		description:
			"Bought my very first desktop computer. This completely unlocked my potential, giving me the tool I needed to practice, experiment, and write code late into the night.",
		icon: FaDesktop,
	},
	{
		id: 6,
		title: "Class Captain",
		subtitle: "JSS3",
		date: "JSS3",
		description:
			"Given the responsibility of Class Captain. My early exposure to leadership, learning how to manage peers and communicate effectively with teachers.",
		icon: FaUsers,
	},
	{
		id: 7,
		title: "Started Learning Design",
		subtitle: "JSS1",
		date: "JSS1",
		description:
			"Discovered the world of visual design. I began learning how to manipulate graphics and create visual identities, blending creativity with software early on.",
		icon: FaPalette,
	},
	{
		id: 8,
		title: "Office Boy",
		subtitle: "Primary Six",
		date: "Primary 6",
		description:
			"Given the post of Office Boy in my primary six education. An early lesson in service, humility, and organizational responsibility.",
		icon: FaBriefcase,
	},
	{
		id: 9,
		title: "Began formal education",
		subtitle: "Academic Foundation",
		date: "2010",
		description:
			"I started my primary school education at GOFAMINT NUR/PRY school, Ikare-Akoko. Those early years taught me discipline, curiosity, and the value of showing up every day. Walking the dusty paths to school each morning, I learned that education was not a privilege but a responsibility.",
		icon: FaSchool,
	},
	{
		id: 10,
		title: "I was born",
		subtitle: "The beginning",
		date: "---",
		description:
			"Born into the Benson family in Ikare Akoko, I learned early that hard work and humility were survival. My parents taught me that my birthplace would not define my future but would shape my character.",
		icon: FaBirthdayCake,
	},
];

// --- SKILLS DATA ---
export const skillsData: SkillGroup[] = [
	{
		category: "Languages",
		type: "hard",
		skills: [
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "Golang", icon: FaGolang },
		],
	},
	{
		category: "Frontend Frameworks",
		type: "hard",
		skills: [
			{ name: "React", icon: FaReact },
			{ name: "Next", icon: SiNextdotjs },
			{ name: "Vue", icon: SiVuedotjs },
			{ name: "CSS Frameworks", icon: SiTailwindcss },
			{ name: "CSS Libraries", icon: SiShadcnui },
		],
	},
	{
		category: "Backend & Systems",
		type: "hard",
		skills: [
			{ name: "Node.js", icon: FaNodeJs },
			{ name: "Fastify", icon: SiFastify },
			{ name: "Express", icon: SiExpress },
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "Supabase", icon: SiSupabase },
		],
	},
	{
		category: "Visual Design",
		type: "hard",
		skills: [
			{ name: "Photoshop", icon: DiPhotoshop },
			{ name: "Illustrator", icon: DiIllustrator },
			{ name: "CorelDraw", icon: SiCoreldraw },
			{ name: "Figma", icon: FaFigma },
			{ name: "Canva", icon: FaPalette },
		],
	},
	{
		category: "Soft skills",
		type: "soft",
		skills: [
			{ name: "Leadership", icon: FaUsers },
			{ name: "Project Management", icon: FaTrello },
			{ name: "Problem Solving", icon: FaLightbulb },
			{ name: "Rapid Prototyping", icon: FaRocket },
			{ name: "Communication", icon: RiSpeakAiFill },
		],
	},
	{
		category: "AI implementation",
		type: "soft",
		skills: [
			{ name: "Gemini", icon: SiGooglegemini },
			{ name: "Claude", icon: SiAnthropic },
			{ name: "chatGPT", icon: BsOpenai },
			{ name: "Cursor", icon: SiCursor },
			{ name: "Copilot", icon: SiGithubcopilot },
			{ name: "E.T.C.", icon: FaPlusCircle },
		],
	},
	{
		category: "File management",
		type: "soft",
		skills: [
			{ name: "Google Drive", icon: FaGoogleDrive },
			{ name: "Word", icon: FaFileWord },
			{ name: "Excel", icon: FaFileExcel },
			{ name: "PowerPoint", icon: FaFilePowerpoint },
			{ name: "E.T.C.", icon: FaPlusCircle },
		],
	},
];

// --- AWARDS DATA ---
export const awards: Award[] = [
	{
		id: 1,
		title: "Developer of the Year",
		issuer: "Federal University Oye Ekiti (FUOYE)",
		date: "2026",
		description:
			"Awarded for exceptional performance in software development and system design during the annual Developer Of The Year competition.",
		mode: "general",
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 2,
		title: "Best UI/UX Design",
		issuer: "National Hackathon",
		date: "2022",
		description:
			"Recognized for creating the most accessible and intuitive interface for a fintech application prototype.",
		mode: "design",
		image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Leadership in Tech",
		issuer: "Tech Innovators Society",
		date: "2023",
		description:
			"Recognized for leading a team of 15 developers and designers to launch a community-driven open source platform.",
		mode: "general",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
	},
];

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: "Architecting Scalable Microservices in Node.js",
		excerpt:
			"A deep dive into how we migrated from a monolith to microservices and optimized our database queries.",
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
		link: "#",
		date: "2023-10-12",
		mode: "dev",
		category: ["Developer", "Computer Science"],
		platform: "Medium",
	},
	{
		id: 2,
		title: "The Art of Minimalist UI Design",
		excerpt:
			"Exploring the principles of minimalism in modern web interfaces and how less often means more for the user.",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
		link: "#",
		date: "2023-11-05",
		mode: "design",
		category: ["Designer", "Design"],
		platform: "LinkedIn",
	},
	{
		id: 3,
		title: "Navigating Career Growth as a Tech Lead",
		excerpt:
			"Lessons learned from leading cross-functional teams, managing expectations, and fostering a healthy engineering culture.",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
		link: "#",
		date: "2024-01-20",
		mode: "general",
		category: ["Leadership", "Career"],
		platform: "Medium",
	},
	{
		id: 4,
		title: "Understanding React Server Components",
		excerpt:
			"Breaking down the paradigm shift in React 18+ and how Server Components change the way we build web applications.",
		image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
		link: "#",
		date: "2024-02-15",
		mode: "dev",
		category: ["Developer", "Software"],
		platform: "Dev.to",
	},
	{
		id: 5,
		title: "Designing for Accessibility (a11y)",
		excerpt:
			"Practical steps to ensure your web designs are inclusive and accessible to everyone, going beyond just color contrast.",
		image: "https://images.unsplash.com/photo-1586953208448-b95a7929a714?q=80&w=1000&auto=format&fit=crop",
		link: "#",
		date: "2024-03-10",
		mode: "design",
		category: ["Designer", "Design"],
		platform: "LinkedIn",
	},
];
