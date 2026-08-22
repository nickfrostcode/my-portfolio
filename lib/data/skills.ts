/** @format */

import { SkillGroup } from "@/types";
import {
	FaGolang,
	FaReact,
	FaNodeJs,
	FaFigma,
	FaPalette,
	FaUsers,
	FaTrello,
	FaLightbulb,
	FaRocket,
	FaGoogleDrive,
	FaFileWord,
	FaFileExcel,
	FaFilePowerpoint,
} from "react-icons/fa6";
import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiVuedotjs,
	SiTailwindcss,
	SiShadcnui,
	SiFastify,
	SiExpress,
	SiPostgresql,
	SiSupabase,
	SiCoreldraw,
	SiGooglegemini,
	SiAnthropic,
	SiGithubcopilot,
	SiCursor,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { RiSpeakAiFill } from "react-icons/ri";
import { BsOpenai } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";

// --- SKILLS DATA ---
export const skillsData: SkillGroup[] = [
	{
		category: "Languages",
		type: "hard",
		mode: "dev",
		skills: [
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "Golang", icon: FaGolang },
		],
	},
	{
		category: "Frontend Frameworks",
		type: "hard",
		mode: "dev",
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
		mode: "dev",
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
		mode: "design",
		skills: [
			{ name: "Photoshop", icon: DiPhotoshop },
			{ name: "Illustrator", icon: DiIllustrator },
			{ name: "CorelDraw", icon: SiCoreldraw },
			{ name: "Figma", icon: FaFigma },
			{ name: "Canva", icon: FaPalette },
		],
	},
	{
		category: "Design & Branding",
		type: "hard",
		mode: "design",
		skills: [
			{ name: "Logo Design", icon: FaPalette },
			{ name: "Brand Identity", icon: DiIllustrator },
			{ name: "Typography", icon: DiPhotoshop },
			{ name: "Layout & Composition", icon: FaFigma },
			{ name: "Vector Illustration", icon: SiCoreldraw },
		],
	},
	{
		category: "Soft skills",
		type: "soft",
		mode: "general",
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
		mode: "general",
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
		mode: "general",
		skills: [
			{ name: "Google Drive", icon: FaGoogleDrive },
			{ name: "Word", icon: FaFileWord },
			{ name: "Excel", icon: FaFileExcel },
			{ name: "PowerPoint", icon: FaFilePowerpoint },
			{ name: "E.T.C.", icon: FaPlusCircle },
		],
	},
];
