/** @format */

"use client";

import Link, { LinkProps } from "next/link";
import { useMode } from "@/context/ModeContext";
import { ReactNode, RefAttributes, AnchorHTMLAttributes } from "react";

type ModeLinkProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof LinkProps
> &
	LinkProps & {
		children?: ReactNode;
	} & RefAttributes<HTMLAnchorElement>;

export function ModeLink({ href, children, ...props }: ModeLinkProps) {
	const { mode, isSubdomain } = useMode();

	let finalHref = href.toString();

	if (
		!isSubdomain &&
		finalHref.startsWith("/") &&
		!finalHref.startsWith("/dev") &&
		!finalHref.startsWith("/design")
	) {
		if (mode !== "general") {
			if (finalHref === "/") {
				finalHref = `/${mode}`;
			} else if (finalHref.startsWith("/#")) {
				finalHref = `/${mode}${finalHref.substring(1)}`;
			} else {
				finalHref = `/${mode}${finalHref}`;
			}
		}
	}

	return (
		<Link href={finalHref} {...props}>
			{children}
		</Link>
	);
}
