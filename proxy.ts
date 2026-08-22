/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
	const url = req.nextUrl.clone();
	const hostname = req.headers.get("host") || "";

	const isDesignSubdomain = hostname.startsWith("design.");
	const isDesignPath =
		url.pathname === "/design" || url.pathname.startsWith("/design/");
	const isDevPath =
		url.pathname === "/dev" || url.pathname.startsWith("/dev/");

	let mode: "dev" | "design" = "dev";

	// 1. Subdomain routing (e.g., design.nickfrost.dev or design.localhost:3000)
	if (isDesignSubdomain) {
		mode = "design";
		// Internally route subdomain requests to the /design app routes
		if (!url.pathname.startsWith("/design")) {
			url.pathname = `/design${url.pathname === "/" ? "" : url.pathname}`;
		}
	} else if (isDesignPath) {
		// 2. Path routing (e.g., nickfrost.dev/design or /design/about)
		mode = "design";
	} else if (isDevPath) {
		// Strip legacy /dev path so it maps cleanly to the main dev root
		url.pathname = url.pathname.replace(/^\/dev/, "") || "/";
		mode = "dev";
	} else {
		// 3. Default main app (Dev view)
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
