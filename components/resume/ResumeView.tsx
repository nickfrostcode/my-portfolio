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
						<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
							Nicholas Benson
						</h2>
						<p className='text-lg text-accent font-semibold'>
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
					<section className='space-y-4' aria-labelledby='resume-summary'>
						<h3
							id='resume-summary'
							className='text-xl font-bold text-foreground flex items-center gap-2'
						>
							Professional Summary
						</h3>
						<p className='text-muted-foreground leading-relaxed'>
							{professionalSummary[mode]}
						</p>
					</section>

					{/* Experience section */}
					<section className='space-y-6' aria-labelledby='resume-experience'>
						<h3
							id='resume-experience'
							className='text-xl font-bold text-foreground border-b border-border/50 pb-2'
						>
							Work Experience
						</h3>
						<div className='space-y-6'>
							{filteredExperiences.map((exp) => (
								<article key={exp.id} className='space-y-1'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h4 className='font-semibold text-foreground text-base'>
											{exp.role}
										</h4>
										<span className='text-sm text-muted-foreground whitespace-nowrap'>
											{exp.date}
										</span>
									</div>
									<div className='text-sm text-accent font-medium'>
										{exp.company}
									</div>
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{exp.description}
									</p>
								</article>
							))}
						</div>
					</section>

					{/* Education section */}
					<section className='space-y-6' aria-labelledby='resume-education'>
						<h3
							id='resume-education'
							className='text-xl font-bold text-foreground border-b border-border/50 pb-2'
						>
							Education
						</h3>
						<div className='space-y-6'>
							{filteredEducation.map((edu) => (
								<article key={edu.id} className='space-y-1'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h4 className='font-semibold text-foreground text-base'>
											{edu.title}
										</h4>
										<span className='text-sm text-muted-foreground whitespace-nowrap'>
											{edu.date}
										</span>
									</div>
									<div className='text-sm text-accent font-medium'>
										{edu.subtitle}
									</div>
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{edu.description}
									</p>
								</article>
							))}
						</div>
					</section>

					{/* Skills section */}
					<section className='space-y-6' aria-labelledby='resume-skills'>
						<h3
							id='resume-skills'
							className='text-xl font-bold text-foreground border-b border-border/50 pb-2'
						>
							Core Skills & Competencies
						</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
							{rearrangeByMode(skillsData, mode).map((group) => (
								<div key={group.category} className='space-y-2'>
									<h4 className='font-semibold text-foreground text-sm'>
										{group.category}
									</h4>
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
					</section>

					{/* Awards section */}
					{filteredAwards.length > 0 && (
						<section className='space-y-6' aria-labelledby='resume-awards'>
							<h3
								id='resume-awards'
								className='text-xl font-bold text-foreground border-b border-border/50 pb-2'
							>
								Awards & Certifications
							</h3>
							<div className='space-y-4'>
								{filteredAwards.map((award) => (
									<article key={award.id} className='space-y-1'>
										<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
											<h4 className='font-semibold text-foreground text-base'>
												{award.title}
											</h4>
											<span className='text-sm text-muted-foreground whitespace-nowrap'>
												{award.date}
											</span>
										</div>
										<div className='text-sm text-accent font-medium'>
											{award.issuer}
										</div>
										<p className='text-sm text-muted-foreground leading-relaxed'>
											{award.description}
										</p>
									</article>
								))}
							</div>
						</section>
					)}

					{/* Languages section */}
					<section className='space-y-4' aria-labelledby='resume-languages'>
						<h3
							id='resume-languages'
							className='text-xl font-bold text-foreground border-b border-border/50 pb-2'
						>
							Languages
						</h3>
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
					</section>
				</div>
			</div>
		</section>
	);
}
