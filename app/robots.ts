import { headers } from "next/headers";
import type { MetadataRoute } from "next";
import { getSiteInfoFromHost } from "@/lib/domain";

export default async function robots(): Promise<MetadataRoute.Robots> {
	const headersList = await headers();
	const hostHeader =
		headersList.get("x-forwarded-host") || headersList.get("host") || "";
	const { siteUrl } = getSiteInfoFromHost(hostHeader);

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/"],
			},
		],
		sitemap: `${siteUrl}/sitemap.xml`,
	};
}
