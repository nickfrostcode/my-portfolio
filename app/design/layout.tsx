/** @format */

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nicholas Benson | Visual & Graphic Designer",
	description:
		"Visual & Graphic Designer specializing in brand identities, digital assets, typography, and visual systems.",
};

export default function DesignLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
