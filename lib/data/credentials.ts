/** @format */

import { Certificate, Award, Education } from "@/types";

// --- CERTIFICATES DATA ---
export const certificates: Certificate[] = [
	{
		id: 1,
		type: "Academic",
		issuer: "Federal University Oye Ekiti (FUOYE)",
		title: "B.Sc Computer Science",
		desc: "Comprehensive study of algorithms, data structures, software engineering, and computer architecture.",
		progress: "400LV",
		mode: "general",
		image: "/certificates/fuoye.jpg",
	},
	{
		id: 2,
		type: "Professional",
		issuer: "Jobberman",
		title: "Successful Global Gig Worker",
		desc: "Successfully acquired Digital Skills required to become a successful Global Gig Worker.",
		progress: "Completed",
		mode: "general",
		image: "/certificates/jobberman.jpg",
	},
	{
		id: 3,
		type: "Professional",
		issuer: "Institute of Management, Technology & Finance",
		title: "Prompt Engineering Professional",
		desc: "Acquired the knowledge of prompt engineering to optimize and enhance the functionality of AI tools.",
		progress: "Completed",
		mode: "general",
		image: "/certificates/prompt_engineering.jpg",
	},
	{
		id: 4,
		type: "Professional",
		issuer: "Institute of Management, Technology & Finance",
		title: "Digital Marketing Professional",
		desc: "Acquired the knowledge of digital marketing to enhance the functionality of businesses and organizations.",
		progress: "Completed",
		mode: "general",
		image: "/certificates/digital_marketing.jpg",
	},
	{
		id: 5,
		type: "Course",
		issuer: "Udemy",
		title: "CSS for Beginners",
		desc: "Learned modern CSS and how to use it to style responsive web applications and pages.",
		progress: "Completed",
		mode: "dev",
		image: "/certificates/css.jpg",
	},
	{
		id: 6,
		type: "Course",
		issuer: "Udemy",
		title: "HTML for Beginners",
		desc: "Learned proper HTML and how to use it to create web pages and applications.",
		progress: "Completed",
		mode: "dev",
		image: "/certificates/html.jpg",
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
		mode: "dev",
		image: "/certificates/developer.png",
	},
	{
		id: 2,
		title: "Certificate of Service as Graphic Designer",
		issuer: "Department of Computer Science, FUOYE",
		date: "2026",
		description:
			"Recognized for outstanding service as the Graphic Designer of the department.",
		mode: "design",
		image: "/certificates/designer.png",
	},
	{
		id: 3,
		title: "Vice President Certificate of Service",
		issuer: "Department of Computer Science, FUOYE",
		date: "2026",
		description:
			"Recognized for outstanding service as the Vice President of the department.",
		mode: "general",
		image: "/certificates/vice.png",
	},
	{
		id: 4,
		title: "Asst. Librarian Certificate of Service",
		issuer: "Department of Computer Science, FUOYE",
		date: "2025",
		description:
			"Recognized for outstanding service as the Assistant Librarian of the department.",
		mode: "general",
		image: "/certificates/librarian.jpg",
	},
];

// --- EDUCATION DATA ---
export const education: Education[] = [
	{
		id: 1,
		title: "B.Sc Computer Science",
		subtitle: "Federal University Oye-Ekiti (FUOYE)",
		date: "2023 - Present",
		description:
			"Comprehensive study of software engineering, algorithms, database management systems, and computing architectures. Serving as Departmental President.",
		mode: "general",
	},
	{
		id: 2,
		title: "Secondary School Certificate Examination (SSCE)",
		subtitle: "Victory College Ikare",
		date: "2017 - 2023",
		description:
			"Completed secondary school education with distinctions in sciences and mathematics, building foundational analytical and programming problem-solving skills.",
		mode: "general",
	},
];
