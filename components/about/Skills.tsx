import { skillsData } from "@/lib/data";

export function Skills() {
	const hardSkills = skillsData.filter((group) => group.type === "hard");
	const softSkills = skillsData.filter((group) => group.type === "soft");

	return (
		<section className='w-full py-20 bg-background'>
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
									<div className='flex flex-wrap gap-3'>
										{group.skills.map((skill, sIdx) => {
											const Icon = skill.icon;
											return (
												<div
													key={sIdx}
													className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/50 hover:-translate-y-0.5 transition-all cursor-default'
												>
													{Icon && <Icon className='w-4 h-4 text-foreground/80' />}
													<span className='text-sm font-medium text-foreground'>
														{skill.name}
													</span>
												</div>
											);
										})}
									</div>
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
									<div className='flex flex-wrap gap-3'>
										{group.skills.map((skill, sIdx) => {
											const Icon = skill.icon;
											return (
												<div
													key={sIdx}
													className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/50 hover:-translate-y-0.5 transition-all cursor-default'
												>
													{Icon && <Icon className='w-4 h-4 text-foreground/80' />}
													<span className='text-sm font-medium text-foreground'>
														{skill.name}
													</span>
												</div>
											);
										})}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
