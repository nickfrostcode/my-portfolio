/** @format */

"use client";

import { createContext, useContext, ReactNode } from "react";

export type Mode = "general" | "dev" | "design";

interface ModeContextType {
	mode: Mode;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({
	children,
	mode,
}: {
	children: ReactNode;
	mode: Mode;
}) {
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
