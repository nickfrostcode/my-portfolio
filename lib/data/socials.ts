/** @format */

import { SocialLink } from "@/types";
import {
	FaGithub,
	FaLinkedinIn,
	FaXTwitter,
	FaWhatsapp,
	FaTiktok,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

// --- SOCIAL LINKS DATA ---
export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/nickfrostcode",
		icon: FaGithub,
	},
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
		name: "X (formerly Twitter)",
		url: "https://x.com/NBenson57814",
		icon: FaXTwitter,
	},
	{
		name: "WhatsApp",
		url: "https://wa.me/message/VQDOCBOCB&MMK1",
		icon: FaWhatsapp,
	},
	{
		name: "TikTok",
		url: "https://www.tiktok.com/@nickfrostcode",
		icon: FaTiktok,
	},
];
