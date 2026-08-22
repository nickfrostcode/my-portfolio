/** @format */
"use client";

import { useMode } from "@/context/ModeContext";
import { rearrangeByMode } from "@/lib/logic";
import {
	certificates,
	awards,
	projectCount,
	yearsOfExperience,
} from "@/lib/data";

export function QuickStats() {
	const { mode } = useMode();

	// Certifications & awards are derived from the data arrays (they list everything).
	const modeCerts = rearrangeByMode(certificates, mode);
	const modeAwards = rearrangeByMode(awards, mode);

	// Projects & years of experience are hand-maintained per mode in data.ts,
	// because not every project/role is captured in the arrays. Edit the numbers
	// in `projectCount` / `yearsOfExperience` there — the trailing "+" is added here.
	const stats = [
		{
			label: mode === "design" ? "Works Completed" : "Projects",
			value: `${projectCount[mode]}+`,
		},
		{ label: "Years of Experience", value: `${yearsOfExperience[mode]}+` },
		{ label: "Certifications", value: `${modeCerts.length}` },
		{ label: "Awards & Honors", value: `${modeAwards.length}` },
	];

	return (
		<section className='w-full py-10 bg-card border-b border-border'>
			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 md:divide-x md:divide-border'>
					{stats.map((stat, i) => (
						<div
							key={i}
							className='flex flex-col items-center justify-center text-center px-4'
						>
							<h3 className='text-3xl md:text-5xl font-extrabold text-foreground mb-2'>
								{stat.value}
							</h3>
							<p className='text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider'>
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
