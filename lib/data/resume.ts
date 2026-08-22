/** @format */

import { Mode } from "@/types";

// --- RESUME FILES (per mode; static PDFs in /public) ---
export const resumeFiles: Record<Mode, string> = {
	dev: "/resumes/Nicholas_Benson_Developer_Resume.pdf",
	design: "/resumes/Nicholas_Benson_Designer_Resume.pdf",
};

// --- RESUME HEADER + SUMMARY (per mode; sourced from the PDFs in /public) ---
export const resumeRole: Record<Mode, string> = {
	dev: "Full-Stack Software Developer | Software Engineer",
	design: "Graphic Designer | Brand Identity Specialist",
};

export const professionalSummary: Record<Mode, string> = {
	dev: "Full-stack software developer and engineer with a strong focus on frontend development and user experience. Experienced in designing, building, and maintaining modern web applications and digital products from concept to deployment. Focused on developing scalable, reliable, and intuitive software that solves real-world problems.",
	design:
		"Graphic designer and brand identity specialist focused on creating clear, distinctive, and purposeful visual identities. Experienced in developing brand concepts, digital graphics, marketing materials, and visual systems from concept to final delivery. Strong focus on typography, composition, visual consistency, and translating ideas into effective visual communication.",
};
