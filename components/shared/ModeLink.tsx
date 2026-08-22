/** @format */

"use client";

import Link, { LinkProps } from "next/link";
import { useMode } from "@/context/ModeContext";
import { ReactNode, RefAttributes, AnchorHTMLAttributes } from "react";

import { resolveModeHref } from "@/lib/logic";

type ModeLinkProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof LinkProps
> &
	LinkProps & {
		children?: ReactNode;
	} & RefAttributes<HTMLAnchorElement>;

export function ModeLink({ href, children, ...props }: ModeLinkProps) {
	const { mode, isSubdomain } = useMode();
	const finalHref = resolveModeHref(href.toString(), mode, isSubdomain);

	return (
		<Link href={finalHref} {...props}>
			{children}
		</Link>
	);
}
