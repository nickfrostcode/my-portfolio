/** @format */

import { Work } from "@/types";

// --- DESIGN SERVICES ---
export interface DesignService {
	id: number;
	title: string;
	description: string;
	image: string;
}

export const designServices: DesignService[] = [
	{
		id: 1,
		title: "Event & Campaign Design",
		description:
			"Event Flyers, Posters, Event Tickets, Certificates, Invitation Designs, Campaign Graphics, Program Announcements, Appreciation Graphics, etc.",
		image: "/works/tutd_party.png",
	},
	{
		id: 2,
		title: "Branding & Identity",
		description:
			"Logo Design, Social Media Templates, Event Branding, Banners, Backdrops, Branded Graphics, Visual Identity Materials, etc.",
		image: "/works/aqua_rave.png",
	},
	{
		id: 3,
		title: "Digital Content",
		description:
			"WhatsApp Graphics, Instagram Posts, Instagram Stories, Social Media Announcements, Carousel Designs, Digital Banners, Infographics, Presentation Graphics, etc.",
		image: "/works/dev_tools.png",
	},
	{
		id: 4,
		title: "Print & Merchandise",
		description:
			"ID Cards, T-Shirt Designs, Booklets, Event Programs, Brochures, Flyers for Print, Posters, Certificates, etc.",
		image: "/works/merchandise3.png",
	},
	{
		id: 5,
		title: "Editorial & Publication Design",
		description:
			"Magazines, E-books, Annual Reports, Newsletters, Catalogs, Product Guides, Digital Publications, Layout Systems, etc.",
		image: "/works/day_of_the_sun.png",
	},
	{
		id: 6,
		title: "Custom Creative Requests",
		description:
			"Have a design need that is not listed? Custom requests can be discussed and included in a Custom Partnership Plan based on your organization's requirements.",
		image: "/works/design.png",
	},
];

// --- WORKS DATA (DESIGN VIEW) ---
// Ordered newest-first by dateVal (YYYYMM) with interleaved categories for dynamic masonry display.
export const works: Work[] = [
	{
		id: 0,
		title: "Enque Brand Identity",
		image: "https://enque.live/enque_logo.png",
		field: "Logo Design",
		tech: ["CorelDraw"],
		dateVal: 202608,
	},
	{
		id: 1,
		title: "NicksPay Brand Identity",
		image: "https://nickspay.com.ng/nickspay_logo.png",
		field: "Logo Design",
		tech: ["CorelDraw"],
		dateVal: 202604,
	},
	{
		id: 2,
		title: "Mosdiamond Promotional Flyer",
		image: "/works/mosdiamond.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202603,
	},
	{
		id: 3,
		title: "FUOYE Amebo Brand Identity",
		image: "/works/fuoye_amebo.png",
		field: "Brand Identity",
		tech: ["Photoshop", "Illustrator"],
		dateVal: 202602,
	},
	{
		id: 4,
		title: "Turn Up Till Dawn Party",
		image: "/works/tutd_party.png",
		field: "Event & Campaign",
		tech: ["Photoshop"],
		dateVal: 202601,
	},
	{
		id: 5,
		title: "Ttenda Brand Identity & Marks",
		image: "https://ttenda.vercel.app/ttenda-logo.png",
		field: "Logo Design",
		tech: ["Illustrator"],
		dateVal: 202512,
	},
	{
		id: 6,
		title: "Day Of The Sun Book Cover",
		image: "/works/day_of_the_sun.png",
		field: "Book & Editorial",
		tech: ["Photoshop"],
		dateVal: 202511,
	},
	{
		id: 7,
		title: "ID Card & Badge Design",
		image: "/works/merchandise1.png",
		field: "Print & Merchandise",
		tech: ["Photoshop", "Illustrator"],
		dateVal: 202510,
	},
	{
		id: 8,
		title: "Aqua Rave Team Identity",
		image: "/works/aqua_rave.png",
		field: "Brand Identity",
		tech: ["Illustrator", "Figma"],
		dateVal: 202509,
	},
	{
		id: 9,
		title: "Tutor Connect Educational Flyer",
		image: "/works/tutor_connect.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202508,
	},
	{
		id: 10,
		title: "Angry Bird Concept Logo",
		image: "/works/angry_bird.png",
		field: "Logo Design",
		tech: ["CorelDraw"],
		dateVal: 202507,
	},
	{
		id: 11,
		title: "Wet & Wild Pool Party",
		image: "/works/wet_wild.png",
		field: "Event & Campaign",
		tech: ["Photoshop"],
		dateVal: 202506,
	},
	{
		id: 12,
		title: "Cream Product Packaging & Identity",
		image: "/works/cream.png",
		field: "Product & Packaging",
		tech: ["Photoshop"],
		dateVal: 202505,
	},
	{
		id: 13,
		title: "Spectra Team Logo",
		image: "/works/spectra_team.png",
		field: "Logo Design",
		tech: ["CorelDraw"],
		dateVal: 202504,
	},
	{
		id: 14,
		title: "Apparel & Branded Merchandise",
		image: "/works/merchandise2.png",
		field: "Print & Merchandise",
		tech: ["Photoshop", "Illustrator"],
		dateVal: 202503,
	},
	{
		id: 15,
		title: "Mily Scent Business Flyer",
		image: "/works/mily_scent.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202502,
	},
	{
		id: 16,
		title: "Ramen Food Brand Identity",
		image: "/works/ramen.png",
		field: "Product & Packaging",
		tech: ["Photoshop"],
		dateVal: 202501,
	},
	{
		id: 17,
		title: "Day Of The Sun Book Launch",
		image: "/works/book_launch.png",
		field: "Event & Campaign",
		tech: ["Photoshop"],
		dateVal: 202412,
	},
	{
		id: 18,
		title: "Roll-up Banner Printing",
		image: "/works/merchandise3.png",
		field: "Print & Merchandise",
		tech: ["CorelDraw"],
		dateVal: 202411,
	},
	{
		id: 19,
		title: "Website Development Promo Flyer",
		image: "/works/website.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202410,
	},
	{
		id: 20,
		title: "Fictional Cosmetics Branding",
		image: "/works/fiction.png",
		field: "Product & Packaging",
		tech: ["Photoshop", "Illustrator"],
		dateVal: 202409,
	},
	{
		id: 21,
		title: "Nigeria Independence Day Celebration",
		image: "/works/independent.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202408,
	},
	{
		id: 22,
		title: "Developer Tools & Tech Workshop",
		image: "/works/dev_tools.png",
		field: "Event & Campaign",
		tech: ["Photoshop"],
		dateVal: 202407,
	},
	{
		id: 23,
		title: "Product Packaging Mockup",
		image: "/works/merchandise4.png",
		field: "Product & Packaging",
		tech: ["Illustrator"],
		dateVal: 202406,
	},
	{
		id: 24,
		title: "Tour the World Travel Campaign",
		image: "/works/tour.png",
		field: "Event & Campaign",
		tech: ["Photoshop"],
		dateVal: 202405,
	},
	{
		id: 25,
		title: "Valentine's Day Special Campaign",
		image: "/works/valentine.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202404,
	},
	{
		id: 26,
		title: "International Women's Day Post",
		image: "/works/womens_day.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202403,
	},
	{
		id: 27,
		title: "Workers' Day Commemorative Design",
		image: "/works/workers_day.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202402,
	},
	{
		id: 28,
		title: "Creative Design",
		image: "/works/design.png",
		field: "Social Media Design",
		tech: ["Photoshop"],
		dateVal: 202401,
	},
];
