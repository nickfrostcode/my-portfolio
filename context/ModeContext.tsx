/** @format */

"use client";

import {
	createContext,
	useContext,
	type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type Mode = "dev" | "design";

interface ModeContextType {
	mode: Mode;
	isSubdomain: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({
	children,
	mode: initialMode = "dev",
	isSubdomain = false,
}: {
	children: ReactNode;
	mode?: Mode;
	isSubdomain?: boolean;
}) {
	const pathname = usePathname() || "";

	// Derive mode directly during render without cascading effect renders
	const isDesignPath = pathname.startsWith("/design");
	const mode: Mode = isSubdomain || isDesignPath || initialMode === "design" ? "design" : "dev";

	return (
		<ModeContext.Provider value={{ mode, isSubdomain }}>
			{children}
		</ModeContext.Provider>
	);
}

export function useMode() {
	const context = useContext(ModeContext);
	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}
	return context;
}
