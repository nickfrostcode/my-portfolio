"use client";

import { useMode } from "@/context/ModeContext";
import { rearrangeByMode } from "@/lib/logic";
import { projects, allExperiences, certificates, awards } from "@/lib/data";

export function QuickStats() {
	const { mode } = useMode();

	// Calculate stats based on current mode data
	const modeProjects = rearrangeByMode(projects, mode);
	const modeExperiences = rearrangeByMode(allExperiences, mode);
	const modeCerts = rearrangeByMode(certificates, mode);
	const modeAwards = rearrangeByMode(awards, mode);

	// Estimate years of experience based on the earliest dateVal in current mode
	let yearsOfExp = 0;
	if (modeExperiences.length > 0) {
		const dates = modeExperiences.map(e => e.dateVal);
		const earliestDate = Math.min(...dates);
		// dateVal is YYYYMM format (e.g. 202201)
		const earliestYear = Math.floor(earliestDate / 100);
		const currentYear = new Date().getFullYear();
		yearsOfExp = Math.max(1, currentYear - earliestYear);
	}

	const stats = [
		{ label: "Projects Completed", value: `${modeProjects.filter(p => p.status === "Completed").length}+` },
		{ label: "Years of Experience", value: `${yearsOfExp}+` },
		{ label: "Certifications", value: `${modeCerts.length}` },
		{ label: "Awards & Honors", value: `${modeAwards.length}` },
	];

	return (
		<section className='w-full py-10 bg-card border-b border-border'>
			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 divide-x divide-border'>
					{stats.map((stat, i) => (
						<div key={i} className='flex flex-col items-center justify-center text-center px-4'>
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
