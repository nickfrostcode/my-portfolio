/** @format */

import { Badge } from "@/components/ui/badge";

const upcomingProjects = [
	{
		id: 1,
		title: "CreaTub",
		description:
			"A collaboration repository for designers and creatives to share their work and get inspired by others.",
	},
	{
		id: 2,
		title: "Rotnem",
		description:
			"A tree and graph connections where every body is a mentor and a mentee.",
	},
	{
		id: 3,
		title: "EQue",
		description: "A queue management system to make queues organized.",
	},
	{
		id: 4,
		title: "Anonyme",
		description: "An anonymous messaging app with advance features",
	},
];

export function ComingSoonProjects() {
	return (
		<div className='w-full py-10 mt-5'>
			<div className='text-center space-y-2 mb-12'>
				<h3 className='text-2xl md:text-3xl font-bold tracking-tight text-foreground'>
					In the <span className='text-accent'>Pipeline</span>
				</h3>
				<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
					What I&apos;m currently brewing behind the scenes.
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{upcomingProjects.map((project) => (
					<div
						key={project.id}
						className='group flex flex-col bg-background border border-border border-dashed rounded-3xl p-6 relative overflow-hidden transition-colors hover:border-border hover:bg-background'
					>
						<div className='flex items-start justify-between gap-2 mb-4'>
							<Badge variant='outline' className='shrink-0 bg-transparent text-muted-foreground border-border/50'>
								Coming Soon
							</Badge>
						</div>
						<h4 className='text-lg font-bold text-foreground leading-tight py-1'>
							{project.title}
						</h4>
						<p className='text-sm text-muted-foreground leading-relaxed mt-2'>
							{project.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
