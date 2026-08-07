/** @format */

"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export type Mode = "general" | "dev" | "design";

interface ModeContextType {
	mode: Mode;
	isSubdomain: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({
	children,
	mode: initialMode,
	isSubdomain = false,
}: {
	children: ReactNode;
	mode: Mode;
	isSubdomain?: boolean;
}) {
	const pathname = usePathname();
	const [mode, setMode] = useState<Mode>(initialMode);

	useEffect(() => {
		if (isSubdomain) {
			const host = window.location.hostname;
			if (host.startsWith("dev.")) setMode("dev");
			else if (host.startsWith("design.")) setMode("design");
			else setMode("general");
		} else {
			if (pathname.startsWith("/dev")) setMode("dev");
			else if (pathname.startsWith("/design")) setMode("design");
			else setMode("general");
		}
	}, [pathname, isSubdomain]);

	return (
		<ModeContext.Provider value={{ mode, isSubdomain }}>{children}</ModeContext.Provider>
	);
}

export function useMode() {
	const context = useContext(ModeContext);
	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}
	return context;
}
