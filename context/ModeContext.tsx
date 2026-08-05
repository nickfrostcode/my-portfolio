/** @format */

"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export type Mode = "general" | "dev" | "design";

interface ModeContextType {
	mode: Mode;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({
	children,
	mode: initialMode,
}: {
	children: ReactNode;
	mode: Mode;
}) {
	const pathname = usePathname();
	const [mode, setMode] = useState<Mode>(initialMode);

	useEffect(() => {
		if (pathname.startsWith("/dev")) setMode("dev");
		else if (pathname.startsWith("/design")) setMode("design");
		else setMode("general");
	}, [pathname]);

	return (
		<ModeContext.Provider value={{ mode }}>{children}</ModeContext.Provider>
	);
}

export function useMode() {
	const context = useContext(ModeContext);
	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}
	return context;
}
