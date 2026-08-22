/** @format */

import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

// Allowed file types for uploads
const ALLOWED_MIME_TYPES = new Set([
	"application/pdf",
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"text/plain",
]);

const ALLOWED_EXTENSIONS = new Set([
	".pdf",
	".jpg",
	".jpeg",
	".png",
	".webp",
	".gif",
	".doc",
	".docx",
	".txt",
]);

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const timestamps = rateLimitMap.get(ip) || [];

	// Filter out expired timestamps
	const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

	if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
		rateLimitMap.set(ip, validTimestamps);
		return true;
	}

	validTimestamps.push(now);
	rateLimitMap.set(ip, validTimestamps);

	// Periodic cleanup if map grows large
	if (rateLimitMap.size > 1000) {
		for (const [key, tsList] of rateLimitMap.entries()) {
			const active = tsList.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
			if (active.length === 0) {
				rateLimitMap.delete(key);
			} else {
				rateLimitMap.set(key, active);
			}
		}
	}

	return false;
}

export async function POST(req: Request) {
	try {
		// 1. IP-based Rate Limiting
		const forwardedFor = req.headers.get("x-forwarded-for");
		const ip = forwardedFor
			? forwardedFor.split(",")[0].trim()
			: req.headers.get("x-real-ip") || "unknown";

		if (isRateLimited(ip)) {
			return NextResponse.json(
				{
					success: false,
					error: "Too many message requests. Please wait a few minutes before trying again.",
				},
				{ status: 429 },
			);
		}

		const body = await req.json();
		const {
			name,
			email,
			subject,
			category,
			message,
			fileData,
			fileName,
			fileMimeType,
			website,
		} = body;

		// 2. Honeypot check: If the hidden 'website' field is filled, it's a bot submission.
		if (website && typeof website === "string" && website.trim() !== "") {
			// Silently return success to deceive bots without processing or emailing
			return NextResponse.json({ success: true, message: "Message received" });
		}

		// 3. Server-side validation
		if (
			!name ||
			typeof name !== "string" ||
			name.trim().length === 0 ||
			name.length > 100
		) {
			return NextResponse.json(
				{
					success: false,
					error: "Please provide a valid name (max 100 characters).",
				},
				{ status: 400 },
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (
			!email ||
			typeof email !== "string" ||
			!emailRegex.test(email.trim()) ||
			email.length > 150
		) {
			return NextResponse.json(
				{ success: false, error: "Please provide a valid email address." },
				{ status: 400 },
			);
		}

		if (
			!subject ||
			typeof subject !== "string" ||
			subject.trim().length === 0 ||
			subject.length > 200
		) {
			return NextResponse.json(
				{
					success: false,
					error: "Please provide a subject (max 200 characters).",
				},
				{ status: 400 },
			);
		}

		if (
			!message ||
			typeof message !== "string" ||
			message.trim().length === 0 ||
			message.length > 2000
		) {
			return NextResponse.json(
				{
					success: false,
					error: "Please provide a message between 1 and 2000 characters.",
				},
				{ status: 400 },
			);
		}

		// 4. File attachment validation (Size & Type checking)
		if (fileData) {
			if (typeof fileData !== "string") {
				return NextResponse.json(
					{ success: false, error: "Invalid file attachment format." },
					{ status: 400 },
				);
			}

			// Size check (Base64 string for 10MB raw file is ~13.7MB max)
			if (fileData.length > 14 * 1024 * 1024) {
				return NextResponse.json(
					{ success: false, error: "Attachment exceeds the 10MB file size limit." },
					{ status: 400 },
				);
			}

			// MIME type check
			if (!fileMimeType || !ALLOWED_MIME_TYPES.has(fileMimeType.toLowerCase())) {
				return NextResponse.json(
					{
						success: false,
						error:
							"Invalid file type. Allowed formats: PDF, PNG, JPG, WEBP, GIF, DOC, DOCX, TXT.",
					},
					{ status: 400 },
				);
			}

			// Extension check
			if (fileName && typeof fileName === "string") {
				const ext = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
				if (!ALLOWED_EXTENSIONS.has(ext)) {
					return NextResponse.json(
						{
							success: false,
							error: "File extension not allowed for security reasons.",
						},
						{ status: 400 },
					);
				}
			}
		}

		// 5. Forward to Google Apps Script / Webhook
		if (!GOOGLE_SCRIPT_URL) {
			console.warn(
				"GOOGLE_SCRIPT_URL is not set. Simulating successful message dispatch.",
			);
			return NextResponse.json({
				success: true,
				message: "Simulated submission",
			});
		}

		const payload = {
			name: name.trim(),
			email: email.trim(),
			subject: subject.trim(),
			category: category || "other",
			message: message.trim(),
			...(fileData ? { fileData, fileName, fileMimeType } : {}),
		};

		const response = await fetch(GOOGLE_SCRIPT_URL, {
			method: "POST",
			headers: {
				"Content-Type": "text/plain;charset=utf-8",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			console.error(
				"Google Script error response:",
				response.status,
				response.statusText,
			);
			return NextResponse.json(
				{ success: false, error: "Failed to dispatch message to handler." },
				{ status: 502 },
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Contact API Route Error:", error);
		return NextResponse.json(
			{
				success: false,
				error: "An unexpected error occurred while processing your request.",
			},
			{ status: 500 },
		);
	}
}
