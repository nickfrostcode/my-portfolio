/** @format */
"use client";

import { useState, useEffect } from "react";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import {
	allExperiences,
	skillsData,
	awards,
	journey,
	socialLinks,
} from "@/lib/data";
import { LuDownload, LuMapPin} from "react-icons/lu";
import { FaGraduationCap, FaSchool } from "react-icons/fa6";

export function ResumeView() {
	const { mode } = useMode();
	
	const [localMode, setLocalMode] = useState<"dev" | "design">(
		mode === "design" ? "design" : "dev",
	);

	useEffect(() => {
		if (mode === "dev" || mode === "design") {
			setLocalMode(mode);
		}
	}, [mode]);

	// Filter data based on localMode
	const filteredExperiences = allExperiences.filter(
		(exp) => exp.mode === localMode || exp.mode === "general",
	);

	const filteredAwards = awards.filter(
		(award) => award.mode === localMode || award.mode === "general",
	);

	// Educational journey items
	const education = journey.filter(
		(item) => item.icon === FaGraduationCap || item.icon === FaSchool,
	);

	const handleDownload = () => {
		// In a real scenario, this could trigger a PDF generation or open an existing static PDF asset.
		alert("PDF download would trigger here.");
	};

	return (
		<section className='w-full py-20 min-h-screen relative'>
			{/* Dot Grid Background */}
			<div
				className='absolute inset-0 z-0 opacity-15 pointer-events-none'
				style={{
					backgroundImage:
						"radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
					backgroundSize: "40px 40px",
					color: localMode === "design" ? "var(--accent)" : "var(--muted-foreground)",
				}}
			/>

			<div className='container px-3 md:px-5 w-full max-w-5xl mx-auto space-y-8 relative z-10'>
				{/* Top Actions */}
				<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
					{/* Local Mode Toggle */}
					<div className='flex items-center gap-1 bg-card border border-border p-1 rounded-full w-full sm:w-auto overflow-x-auto'>
						<button
							onClick={() => setLocalMode("dev")}
							className={cn(
								"px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
								localMode === "dev"
									? "bg-foreground text-background"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							Software Developer
						</button>
						<button
							onClick={() => setLocalMode("design")}
							className={cn(
								"px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
								localMode === "design"
									? "bg-foreground text-background"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							Visual Designer
						</button>
					</div>

					<button
						onClick={handleDownload}
						className='inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center'
					>
						<LuDownload className='w-4 h-4' />
						Download PDF
					</button>
				</div>

				{/* Resume Paper Container */}
				<div className='bg-card border border-border rounded-2xl p-8 md:p-12 space-y-12'>
					{/* Header section */}
					<div className='space-y-4 border-b border-border/50 pb-8'>
						<h1 className='text-4xl font-bold text-foreground tracking-tight'>
							Nicholas Benson
						</h1>
						<p className='text-lg font-medium text-accent'>
							{localMode === "dev"
								? "Software Developer"
								: "Visual & Graphic Designer"}
						</p>

						<div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
							<span className='inline-flex items-center gap-1.5'>
								<LuMapPin className='w-4 h-4' />
								Nigeria
							</span>
							{socialLinks.map((link) => {
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
							{localMode === "dev"
								? "Detail-oriented Software Developer with experience in building scalable web applications, designing RESTful APIs, and implementing robust backend systems. Passionate about learning new technologies and solving complex architectural problems."
								: "Creative Visual Designer specializing in brand identity, user interface design, and graphic communication. Proven track record of translating complex ideas into intuitive, pixel-perfect visual experiences."}
						</p>
					</div>

					{/* Experience section */}
					<div className='space-y-6'>
						<h2 className='text-xl font-bold text-foreground border-b border-border/50 pb-2'>
							Work Experience
						</h2>
						<div className='space-y-8'>
							{filteredExperiences.map((exp) => (
								<div key={exp.id} className='space-y-2'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h3 className='font-bold text-lg text-foreground'>
											{exp.role}
										</h3>
										<span className='text-sm font-mono text-accent whitespace-nowrap bg-accent/10 px-2 py-0.5 rounded'>
											{exp.date}
										</span>
									</div>
									<div className='text-foreground font-medium'>
										{exp.company}
									</div>
									<p className='text-sm text-muted-foreground leading-relaxed'>
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
							{education.map((edu) => (
								<div key={edu.id} className='space-y-1'>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4'>
										<h3 className='font-bold text-foreground'>
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
							{skillsData.map((group) => (
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
											<h3 className='font-bold text-foreground'>
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
				</div>
			</div>
		</section>
	);
}
