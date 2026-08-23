import { headers } from "next/headers";
import type { MetadataRoute } from "next";
import { getSiteInfoFromHost, DESIGN_SITE_URL, DEV_SITE_URL } from "@/lib/domain";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const headersList = await headers();
	const hostHeader =
		headersList.get("x-forwarded-host") || headersList.get("host") || "";
	const headerMode = headersList.get("x-portfolio-mode");
	const { isDesign: isDesignHost } = getSiteInfoFromHost(hostHeader);
	const isDesign = headerMode ? headerMode === "design" : isDesignHost;
	// Fixed content release date so search crawlers track authentic changes
	const lastModified = new Date("2026-08-23T00:00:00.000Z");

	// 1. DESIGN SUBDOMAIN SITEMAP (design.nicholasbenson.cv)
	if (isDesign) {
		const base = DESIGN_SITE_URL;
		return [
			{
				url: `${base}`,
				lastModified,
				changeFrequency: "monthly",
				priority: 1.0,
			},
			{
				url: `${base}/about`,
				lastModified,
				changeFrequency: "monthly",
				priority: 0.8,
			},
			{
				url: `${base}/works`,
				lastModified,
				changeFrequency: "weekly",
				priority: 0.9,
			},
			{
				url: `${base}/resume`,
				lastModified,
				changeFrequency: "monthly",
				priority: 0.8,
			},
			{
				url: `${base}/resumes/Nicholas_Benson_Designer_Resume.pdf`,
				lastModified,
				changeFrequency: "monthly",
				priority: 0.7,
			},
		];
	}

	// 2. MAIN DEVELOPER PORTFOLIO SITEMAP (nicholasbenson.cv)
	const base = DEV_SITE_URL;
	return [
		{
			url: `${base}`,
			lastModified,
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${base}/about`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/projects`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${base}/blog`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${base}/resume`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/resumes/Nicholas_Benson_Developer_Resume.pdf`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];
}
