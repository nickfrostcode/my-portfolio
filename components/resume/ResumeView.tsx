/** @format */
"use client";

import { useMode } from "@/context/ModeContext";
import { rearrangeByMode } from "@/lib/logic";
import {
	allExperiences,
	skillsData,
	awards,
	education,
	socialLinks,
	professionalSummary,
	resumeRole,
	spokenLanguages,
} from "@/lib/data";

export function ResumeView() {
	const { mode } = useMode();

	// Resume content follows the global mode context (dev / design / general):
	// 'general' shows everything; 'dev'/'design' show that mode plus general.
	const filteredExperiences = rearrangeByMode(allExperiences, mode);
	const filteredAwards = rearrangeByMode(awards, mode);
	const filteredEducation = rearrangeByMode(education, mode);

	return (
		<section className='w-full py-20 min-h-screen relative'>
			{/* Dot Grid Background */}
			<div
				className='absolute inset-0 z-0 opacity-15 pointer-events-none'
				style={{
					backgroundImage:
						"radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
					backgroundSize: "40px 40px",
					color: mode === "design" ? "var(--accent)" : "var(--muted-foreground)",
				}}
			/>

			<div className='container px-3 md:px-5 w-full max-w-5xl mx-auto space-y-8 relative z-10'>
				{/* Resume Paper Container */}
				<div className='bg-card border border-border rounded-2xl p-8 md:p-12 space-y-12'>
					{/* Header section */}
					<div className='space-y-4 border-b border-border/50 pb-8'>
						<h1 className='text-4xl font-bold text-foreground'>
							Nicholas Benson
						</h1>
						<p className='text-lg text-accent'>
							{resumeRole[mode]}
						</p>

						<div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
							{socialLinks
								.filter((link) => Boolean(link.url?.trim()))
								.map((link) => {
									const Icon = link.icon;
									return (
										<a
											key={link.name}
											href={link.url}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-1.5 hover:text-foreground transition-colors'
										>
											<Icon className='w-4 h-4' />
											{link.name}
										</a>
									);
								})}
						</div>
					</div>

					{/* Summary section */}
					<div className='space-y-4'>
						<h2 className='text-xl font-bold text-foreground flex items-center gap-2'>
							Professional Summary
						</h2>
						<p className='text-muted-foreground leading-relaxed'>
							{professionalSummary[mode]}
						</p>
					</div>

					{/* Experience section */}
					<div className='space-y-6'>
						<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
							Work Experience
						</h2>
						<div className='space-y-6'>
							{filteredExperiences.map((exp) => (
								<div key={exp.id} className='space-y-1'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h3 className='font-semibold text-foreground'>
											{exp.role}
										</h3>
										<span className='text-sm text-muted-foreground whitespace-nowrap'>
											{exp.date}
										</span>
									</div>
									<div className='text-sm text-accent font-medium'>
										{exp.company}
									</div>
									<p className='text-sm text-muted-foreground'>
										{exp.description}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Education section */}
					<div className='space-y-6'>
						<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
							Education
						</h2>
						<div className='space-y-6'>
							{filteredEducation.map((edu) => (
								<div key={edu.id} className='space-y-1'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h3 className='font-semibold text-foreground'>
											{edu.title}
										</h3>
										<span className='text-sm text-muted-foreground whitespace-nowrap'>
											{edu.date}
										</span>
									</div>
									<div className='text-sm text-accent font-medium'>
										{edu.subtitle}
									</div>
									<p className='text-sm text-muted-foreground'>
										{edu.description}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Skills section */}
					<div className='space-y-6'>
						<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
							Core Skills
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
							{rearrangeByMode(skillsData, mode).map((group) => (
								<div key={group.category} className='space-y-2'>
									<h3 className='font-semibold text-foreground text-sm'>
										{group.category}
									</h3>
									<div className='flex flex-wrap gap-2'>
										{group.skills.map((skill) => (
											<span
												key={skill.name}
												className='text-xs font-mono px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border/50'
											>
												{skill.name}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Awards section */}
					{filteredAwards.length > 0 && (
						<div className='space-y-6'>
							<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
								Awards & Certifications
							</h2>
							<div className='space-y-4'>
								{filteredAwards.map((award) => (
									<div key={award.id} className='space-y-1'>
										<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
											<h3 className='font-semibold text-foreground'>
												{award.title}
											</h3>
											<span className='text-sm text-muted-foreground whitespace-nowrap'>
												{award.date}
											</span>
										</div>
										<div className='text-sm text-accent font-medium'>
											{award.issuer}
										</div>
										<p className='text-sm text-muted-foreground'>
											{award.description}
										</p>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Languages section */}
					<div className='space-y-4'>
						<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
							Languages
						</h2>
						<div className='flex flex-wrap gap-4'>
							{spokenLanguages.map((lang) => (
								<div
									key={lang.name}
									className='flex items-center gap-3 px-4 py-2 bg-muted/60 border border-border/50 rounded-xl'
								>
									<span className='font-semibold text-foreground text-sm'>
										{lang.name}
									</span>
									<span className='text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded'>
										{lang.proficiency}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
