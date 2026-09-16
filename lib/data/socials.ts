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
		url: "mailto:nb.nicholasbenson@gmail.com",
		icon: LuMail,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/nickfrostech",
		icon: FaLinkedinIn,
	},
	{
		name: "GitHub",
		url: "https://github.com/nickfrostech",
		icon: FaGithub,
	},
	{
		name: "X (formerly Twitter)",
		url: "https://x.com/NBenson57814",
		icon: FaXTwitter,
	},
];
