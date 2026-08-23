export const CANONICAL_DEV_DOMAIN = "nicholasbenson.cv";
export const CANONICAL_DESIGN_DOMAIN = "design.nicholasbenson.cv";

export const DEV_REDIRECT_HOSTS = new Set([
	"www.nicholasbenson.cv",
	"nicholasbenson.vercel.app",
	"nickfrost.is-a.dev",
	"nickfrostcode.vercel.app",
	"frostnick.vercel.app",
	"nickfrost.vercel.app",
]);

export const DESIGN_REDIRECT_HOSTS = new Set([
	"design.nickfrost.is-a.dev",
]);

export const DEV_SITE_URL = `https://${CANONICAL_DEV_DOMAIN}`;
export const DESIGN_SITE_URL = `https://${CANONICAL_DESIGN_DOMAIN}`;

export const GA_DEV_ID = "G-B58HLEP8XX";
export const GA_DESIGN_ID = "G-NNWR9W88Q0";

/**
 * Extracts and cleans the hostname from a host header (stripping ports).
 */
export function parseHostname(hostHeader: string | null | undefined): string {
	if (!hostHeader) return "";
	const [hostname] = hostHeader.split(":");
	return hostname.toLowerCase().trim();
}

/**
 * Checks if a given hostname belongs to the Design domain/subdomain.
 */
export function isDesignHostname(hostname: string): boolean {
	return (
		hostname === CANONICAL_DESIGN_DOMAIN ||
		hostname === "design.localhost" ||
		DESIGN_REDIRECT_HOSTS.has(hostname) ||
		(hostname.startsWith("design.") && !hostname.endsWith(".vercel.app"))
	);
}

/**
 * Checks if a hostname is a local development environment.
 */
export function isLocalHostname(hostname: string): boolean {
	return (
		hostname === "localhost" ||
		hostname === "127.0.0.1" ||
		hostname.endsWith(".localhost")
	);
}

/**
 * Single source of truth for extracting site metadata and mode information from a host header.
 */
export function getSiteInfoFromHost(hostHeader: string | null | undefined) {
	const hostname = parseHostname(hostHeader);
	const isLocal = isLocalHostname(hostname);
	const isDesign = isDesignHostname(hostname);
	const mode: "dev" | "design" = isDesign ? "design" : "dev";
	const siteUrl = isDesign ? DESIGN_SITE_URL : DEV_SITE_URL;
	const gaId = isDesign ? GA_DESIGN_ID : GA_DEV_ID;

	return {
		hostname,
		isLocal,
		isDesign,
		mode,
		siteUrl,
		gaId,
	};
}
