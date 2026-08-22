"use client";

import { useMode } from "@/context/ModeContext";
import { rearrangeByMode } from "@/lib/logic";
import { skillsData } from "@/lib/data";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, scale: 0.8, y: 10 },
	show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function Skills() {
	const { mode } = useMode();
	const groups = rearrangeByMode(skillsData, mode);
	const hardSkills = groups.filter((group) => group.type === "hard");
	const softSkills = groups.filter((group) => group.type === "soft");

	return (
		<motion.section 
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5 }}
			className='w-full py-20 bg-background'
		>
			<div className='container px-4 md:px-6 w-full max-w-6xl mx-auto space-y-16'>
				<div className='text-center space-y-4'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Technical & Interpersonal <span className='text-accent'>Skills</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						The tools, technologies, and methodologies I leverage to deliver excellence.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{/* Hard Skills Column */}
					<div className='space-y-8'>
						<h3 className='text-2xl font-semibold text-foreground border-b border-border pb-4'>
							Hard Skills
						</h3>
						<div className='space-y-8'>
							{hardSkills.map((group, idx) => (
								<div key={idx} className='space-y-3'>
									<h4 className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
										{group.category}
									</h4>
									<motion.div 
										variants={containerVariants}
										initial="hidden"
										whileInView="show"
										viewport={{ once: true, margin: "-20px" }}
										className='flex flex-wrap gap-3'
									>
										{group.skills.map((skill, sIdx) => {
											const Icon = skill.icon;
											return (
												<motion.div
													variants={itemVariants}
													key={sIdx}
													className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all cursor-default'
												>
													{Icon && <Icon className='w-4 h-4 text-foreground/80' />}
													<span className='text-sm font-medium text-foreground'>
														{skill.name}
													</span>
												</motion.div>
											);
										})}
									</motion.div>
								</div>
							))}
						</div>
					</div>

					{/* Soft Skills Column */}
					<div className='space-y-8'>
						<h3 className='text-2xl font-semibold text-foreground border-b border-border pb-4'>
							Other Skills
						</h3>
						<div className='space-y-8'>
							{softSkills.map((group, idx) => (
								<div key={idx} className='space-y-3'>
									<h4 className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
										{group.category}
									</h4>
									<motion.div 
										variants={containerVariants}
										initial="hidden"
										whileInView="show"
										viewport={{ once: true, margin: "-20px" }}
										className='flex flex-wrap gap-3'
									>
										{group.skills.map((skill, sIdx) => {
											const Icon = skill.icon;
											return (
												<motion.div
													variants={itemVariants}
													key={sIdx}
													className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all cursor-default'
												>
													{Icon && <Icon className='w-4 h-4 text-foreground/80' />}
													<span className='text-sm font-medium text-foreground'>
														{skill.name}
													</span>
												</motion.div>
											);
										})}
									</motion.div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
