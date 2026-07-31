/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
	const url = req.nextUrl.clone();
	const hostname = req.headers.get("host") || "";

	let mode = "general";

	// 1. Check Subdomain (e.g., dev.me, design.me, dev.localhost:3000)
	if (hostname.startsWith("dev.")) {
		mode = "dev";
	} else if (hostname.startsWith("design.")) {
		mode = "design";
	}

	// 2. Check Path prefix (e.g., /dev or /dev/about)
	if (url.pathname === "/dev" || url.pathname.startsWith("/dev/")) {
		mode = "dev";
		// Strip the prefix so we render the root pages internally
		url.pathname = url.pathname.replace(/^\/dev/, "") || "/";
	} else if (
		url.pathname === "/design" ||
		url.pathname.startsWith("/design/")
	) {
		mode = "design";
		// Strip the prefix
		url.pathname = url.pathname.replace(/^\/design/, "") || "/";
	}

	// Rewrite the response and inject the mode as a header
	const response = NextResponse.rewrite(url);
	response.headers.set("x-portfolio-mode", mode);

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
