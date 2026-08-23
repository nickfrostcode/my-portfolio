import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
	CANONICAL_DEV_DOMAIN,
	CANONICAL_DESIGN_DOMAIN,
	DEV_REDIRECT_HOSTS,
	DESIGN_REDIRECT_HOSTS,
	parseHostname,
	isDesignHostname,
	isLocalHostname,
} from "@/lib/domain";

export function proxy(req: NextRequest) {
	const url = req.nextUrl.clone();
	const hostHeader =
		req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
	const hostname = parseHostname(hostHeader);
	const isLocal = isLocalHostname(hostname);
	const isDesignSubdomain = isDesignHostname(hostname);
	const isDesignPath =
		url.pathname === "/design" || url.pathname.startsWith("/design/");
	const isDevPath =
		url.pathname === "/dev" || url.pathname.startsWith("/dev/");

	// 1. Production Canonical Redirects (308)
	if (!isLocal) {
		// A. Explicit Design Redirects -> design.nicholasbenson.cv
		if (DESIGN_REDIRECT_HOSTS.has(hostname)) {
			const targetUrl = new URL(
				`${url.pathname}${url.search}`,
				`https://${CANONICAL_DESIGN_DOMAIN}`,
			);
			return NextResponse.redirect(targetUrl, 308);
		}

		// B. Explicit Dev Redirects -> nicholasbenson.cv
		if (DEV_REDIRECT_HOSTS.has(hostname)) {
			const targetUrl = new URL(
				`${url.pathname}${url.search}`,
				`https://${CANONICAL_DEV_DOMAIN}`,
			);
			return NextResponse.redirect(targetUrl, 308);
		}

		// C. If accessing /design path on main dev domain -> redirect to design.nicholasbenson.cv
		if (!isDesignSubdomain && isDesignPath && hostname === CANONICAL_DEV_DOMAIN) {
			const cleanPath = url.pathname.replace(/^\/design/, "") || "/";
			const targetUrl = new URL(
				`${cleanPath}${url.search}`,
				`https://${CANONICAL_DESIGN_DOMAIN}`,
			);
			return NextResponse.redirect(targetUrl, 308);
		}

		// D. If accessing legacy /dev path on main dev domain -> redirect to clean URL
		if (!isDesignSubdomain && isDevPath && hostname === CANONICAL_DEV_DOMAIN) {
			const cleanPath = url.pathname.replace(/^\/dev/, "") || "/";
			const targetUrl = new URL(
				`${cleanPath}${url.search}`,
				`https://${CANONICAL_DEV_DOMAIN}`,
			);
			return NextResponse.redirect(targetUrl, 308);
		}
	}

	let mode: "dev" | "design" = "dev";

	// 2. Subdomain & Path Internal Routing
	if (isDesignSubdomain) {
		mode = "design";
		// Internally route subdomain requests to the /design app routes
		if (!url.pathname.startsWith("/design")) {
			url.pathname = `/design${url.pathname === "/" ? "" : url.pathname}`;
		}
	} else if (isDesignPath) {
		mode = "design";
	} else if (isDevPath) {
		// Strip legacy /dev path so it maps cleanly to the main dev root
		url.pathname = url.pathname.replace(/^\/dev/, "") || "/";
		mode = "dev";
	} else {
		mode = "dev";
	}

	// Forward custom headers on the request so Server Components (headers()) can read them
	const requestHeaders = new Headers(req.headers);
	requestHeaders.set("x-portfolio-mode", mode);
	requestHeaders.set("x-is-subdomain", isDesignSubdomain ? "1" : "0");

	return NextResponse.rewrite(url, {
		request: {
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - api routes
		 * - _next/static & _next/image
		 * - favicon.ico, sitemap.xml, robots.txt
		 * - Static assets (images, PDFs, fonts)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|woff|woff2|ttf|ico)$).*)",
	],
};
