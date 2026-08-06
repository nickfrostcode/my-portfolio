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
	FaWhatsapp,
	FaFigma,
	FaReact,
	FaNodeJs,
	FaUsers,
	FaTrello,
	FaLightbulb,
	FaRocket,
	FaPalette,
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
	FaTiktok,
	FaLaptopCode,
} from "react-icons/fa6";
import {
	SiTypescript,
	SiNextdotjs,
	SiPostgresql,
	SiTailwindcss,
	SiVuedotjs,
	SiShadcnui,
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
		progress: "400LV",
		mode: "general",
		// image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 2,
		type: "Hard Skill",
		issuer: "MTF",
		title: "Digital Marketing Professional",
		desc: "Mastering digital marketing strategies and techniques to promote products and services online.",
		progress: "Completed",
		mode: "general",
		// image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		type: "Hard Skill",
		issuer: "Udemy",
		title: "CSS Complete Guide",
		desc: "Comprehensive guide to modern web design and development.",
		progress: "Completed",
		mode: "dev",
		// image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 4,
		type: "Hard Skill",
		issuer: "SIM computer Institute",
		title: "Computer Graphic and Visual Design",
		desc: "Master the act of branding, designing, and developing digital visual representations.",
		progress: "Completed",
		mode: "design",
		// image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
	},
];

export const technicalArsenal: Record<string, TechCategory[]> = {
	general: [
		{ category: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
		{
			category: "Backend & Data",
			items: "Node.js, Fastify, Express, Golang, PostgreSQL",
		},
		{
			category: "Visual & Graphic Design",
			items: "Adobe Photoshop, CorelDraw, Figma, Canva",
		},
		{
			category: "AI & Integrations",
			items: "Open AI, Gemini, Claude, AWS Bedrock, Payment Gateways, Cloudflare, Vercel",
		},
	],
	dev: [
		{
			category: "Frontend",
			items: "React, Next.js, TypeScript, Tailwind, CSS, JavaScript",
		},
		{
			category: "Backend & Data",
			items: "Node.js, Fastify, Express, Golang, PostgreSQL",
		},
		{
			category: "AI & Integrations",
			items: "Open AI, Gemini, Claude, AWS Bedrock, Payment Gateways",
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
		status: "Completed",
		mode: "dev",
		tech: ["React", "Node.js"],
	},
	{
		id: 3,
		title: "Nickspay",
		description:
			"A secure and seamless payment gateway and financial technology platform.",
		image: "https://nickspay.com.ng/og.png",
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
		image: "https://nickspay.com.ng/nickspay_logo.png",
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
		image: "https://ttenda.vercel.app/ttenda-logo.png",
		link: "#",
		status: "Completed",
		mode: "design",
		tech: ["Photoshop, CorelDraw"],
	},
];

// ---- UPCOMING PROJECTS ---
export const upcomingProjects = [
	// {
	// 	id: 1,
	// 	title: "CreaTub",
	// 	description:
	// 		"A collaboration repository for designers and creatives to share their work and get inspired by others.",
	// },
	{
		id: 2,
		title: "Rotnem",
		description:
			"A tree and graph connections where every body is a mentor and a mentee.",
	},
	// {
	// 	id: 3,
	// 	title: "EQue",
	// 	description: "A queue management system to make queues organized.",
	// },
	{
		id: 4,
		title: "Anonyme",
		description: "An anonymous messaging app with advance features",
	},
	// {
	//    id: 5,
	//    title: "NickCn",
	//    description: "A Tailwind and shadcn based components that allows switching between different design looks"
	// }
];

export const allExperiences: Experience[] = [
	{
		id: 1,
		role: "Computer Service Intern",
		company: "SIM Computer Institute",
		date: "Jan 2018 - Jun 2020",
		dateVal: 202001,
		description: `I was an IT apprentice in a computer training and service center. My role was to handle various tasks related to computer software, as well as basic technical support. This role provided me with a strong foundation in practical IT skills and customer service.`,
		mode: "general",
		// logo: "",
	},
	{
		id: 101,
		role: "Graphic Design Intern",
		company: "SIM Computer Institute",
		date: "Jan 2020 - Jun 2022",
		dateVal: 202201,
		description: `Collaborated with senior designers to design and create digital visuals for marketing, social media, and print materials.`,
		mode: "design",
		// logo: "",
	},
	{
		id: 2,
		role: "Assistant Librarian",
		company: "Department of Computer Science - Fuoye",
		date: "Jul 2024 - Jul 2025",
		dateVal: 202507,
		description:
			"Assisted students and researchers with library resources and provided basic technical support for computer-related tasks.",
		mode: "general",
		// logo: "",
	},
	{
		id: 3,
		role: "Vice President",
		company: "Department of Computer Science - Fuoye",
		date: "Jul 2025 - Jul 2026",
		dateVal: 202607,
		description:
			"Responsible for the day-to-day management of the association, including leading meetings, coordinating activities, and overseeing the implementation of projects.",
		mode: "general",
	},
	{
		id: 103,
		role: "Graphic and Visual Designer",
		company: "Department of Computer Science - Fuoye",
		date: "Jul 2025 - Present",
		dateVal: 202709,
		description:
			"Responsible for creating and managing visual content for the department’s online presence and activities.",
		mode: "design",
	},
	{
		id: 4,
		role: "President",
		company: "Department of Computer Science - Fuoye",
		date: "Jul 2026 - Present",
		dateVal: 202712,
		description:
			"Leading the computer science association, overseeing all activities and initiatives, and representing the association in various forums.",
		mode: "general",
	},
	{
		id: 104,
		role: "Design Technologist",
		company: "Nick Frost Innovations",
		date: "Jan 2021 - Present",
		dateVal: 202710,
		description:
			"Leading the design and development of innovative products that solve real-world problems. Ensuring ADA compliance and pixel-perfect UI implementation across enterprise SaaS products.",
		mode: "design",
	},
	{
		id: 5,
		role: "Full Stack Software Engineer",
		company: "Nick Frost Innovations.",
		date: "Jan 2021 - Present",
		dateVal: 202711,
		description:
			"Leading the development of highly scalable web applications leveraging Next.js and serverless architecture. Managing end-to-end deployment pipelines and CI/CD workflows.",
		mode: "dev",
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
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "dev",
	},
	{
		id: 2,
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "dev",
	},
	{
		id: 3,
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "dev",
	},
	{
		id: 4,
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "design",
	},
	{
		id: 5,
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "design",
	},
	{
		id: 6,
		name: "Unknown",
		role: "unknown",
		avatar: "",
		rating: 5,
		type: "text",
		content: "Gathering thoughts and recommendations",
		mode: "design",
	},
];

// --- SOCIAL LINKS DATA ---
export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/nickfrostcode",
		icon: FaGithub,
	},
	{
		name: "Email",
		url: "mailto:bensonicholas206@gmail.com",
		icon: LuMail,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/nickfrostcode",
		icon: FaLinkedinIn,
	},
	{
		name: "X (formerly Twitter)",
		url: "",
		icon: FaXTwitter,
	},
	{
		name: "Whatsapp",
		url: "https://whatsapp.com/nickfrostcode",
		icon: FaWhatsapp,
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
		subtitle: "400 Level (FUOYE)",
		date: "2026",
		description:
			"Elected as the President of the Computer Science department. Leading the student body, organizing tech events, and advocating for student welfare and academic excellence.",
		icon: FaCrown,
	},
	{
		id: 2,
		title: "Vice President & Visual Designer",
		subtitle: "300 Level (FUOYE)",
		date: "2025",
		description:
			"Served as the Vice President of the department while simultaneously managing our visual presence. Coordinated administrative affairs and crafted digital content for department initiatives.",
		icon: FaUserTie,
	},
	{
		id: 3,
		title: "Assistant Librarian",
		subtitle: "200 Level (FUOYE)",
		date: "2024",
		description:
			"Appointed as the Assistant Librarian of the department, fostering a culture of reading and securing resources for computer science students.",
		icon: FaBookOpen,
	},
	{
		id: 4,
		title: "Open Source Contributor",
		subtitle: "Various Repositories",
		date: "2023",
		description:
			"Began actively contributing to the open-source community. Focused on both algorithmic React frameworks and designing accessible UI components, giving back to the community that helped me grow.",
		icon: FaGithub,
	},
	{
		id: 5,
		title: "Admission to FUOYE",
		subtitle: "Computer Science",
		date: "2023",
		description:
			"Gained admission to study Computer Science at the Federal University Oye-Ekiti (FUOYE). This marked the beginning of my formal academic journey into software engineering.",
		icon: FaGraduationCap,
	},
	{
		id: 6,
		title: "Software Engineer & Design Technologist",
		subtitle: "Nick Frost Innovations",
		date: "2021",
		description:
			"Joined Nick Frost Innovations, blending my software engineering skills with design. Led the development of scalable web applications while ensuring pixel-perfect, accessible UI implementations.",
		icon: FaLaptopCode,
	},
	{
		id: 7,
		title: "IT & Graphic Design Intern",
		subtitle: "SIM Computer Institute",
		date: "2018",
		description:
			"Started as an IT apprentice handling computer maintenance and technical support. Later transitioned into a graphic design role, collaborating to create marketing visuals and discovering my love for design.",
		icon: FaBriefcase,
	},
	{
		id: 8,
		title: "Began formal education",
		subtitle: "Academic Foundation",
		date: "2010",
		description:
			"I started my primary school education at GOFAMINT NUR/PRY school, Ikare-Akoko. Those early years taught me discipline, curiosity, and the value of showing up every day. Walking the dusty paths to school each morning, I learned that education was not a privilege but a responsibility.",
		icon: FaSchool,
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
		issuer: "Department of Computer Science, FUOYE",
		date: "2026",
		description:
			"Awarded for exceptional performance in software development and system design during the annual Developer Of The Year competition.",
		mode: "general",
		// image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 2,
		title: "Certificate of Service",
		issuer: "Department of Computer Science, FUOYE",
		date: "2026",
		description:
			"Recognized for outstanding service as the the Graphic Designer of the department.",
		mode: "design",
		// image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Certificate of Service",
		issuer: "Department of Computer Science, FUOYE",
		date: "2026",
		description:
			"Recognized for outstanding service as the the Vice President of the department.",
		mode: "general",
		// image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?q=80&w=1000&auto=format&fit=crop",
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
