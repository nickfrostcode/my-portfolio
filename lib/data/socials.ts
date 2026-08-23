/** @format */

import { SocialLink } from "@/types";
import {
	FaGithub,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

// --- SOCIAL LINKS DATA ---
export const socialLinks: SocialLink[] = [
	{
		name: "Email",
		url: "mailto:bensonnicholas206@gmail.com",
		icon: LuMail,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/nickfrostcode",
		icon: FaLinkedinIn,
	},
	{
		name: "GitHub",
		url: "https://github.com/nickfrostcode",
		icon: FaGithub,
	},
	{
		name: "X (formerly Twitter)",
		url: "https://x.com/NBenson57814",
		icon: FaXTwitter,
	},
];
