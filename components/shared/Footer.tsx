/** @format */

import { ModeLink } from "@/components/shared/ModeLink";

import { socialLinks } from "@/lib/data";

export function Footer() {
	return (
		<footer className='w-full bg-card border-t border-border mt-15'>
			<div className='max-w-7xl mx-auto px-6 py-12 md:py-16'>
				<div className='flex gap-12 md:gap-8 flex-wrap flex-col md:flex-row'>
					{/* Quick Summary */}
					<div className='flex flex-col gap-4 flex-1'>
						<h3 className='font-semibold text-lg'>Nicholas Benson</h3>
						<p className='text-muted-foreground text-sm leading-relaxed max-w-xs'>
							Computer Scientist bridging the gap between Software
							Engineering and Visual Design.
						</p>
						<p className='text-sm text-muted-foreground mt-4'>
							Open to opportunities.
						</p>
					</div>

					<div className='flex-1/3 flex flex-wrap gap-12'>
						{/* Routes */}
						<div className='flex flex-col gap-3 flex-1'>
							<h3 className='font-semibold text-lg mb-2'>Routes</h3>
							<ModeLink
								href='/'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Home
							</ModeLink>
							<ModeLink
								href='/about'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								About
							</ModeLink>
							<ModeLink
								href='/#projects'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Projects
							</ModeLink>
							<ModeLink
								href='/blog'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Blog
							</ModeLink>
							<ModeLink
								href='/resume'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Resume
							</ModeLink>
							<ModeLink
								href='/#contact'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Contact
							</ModeLink>
						</div>

						{/* Social Handles */}
						<div className='flex-1 flex flex-col gap-4 text-xs'>
							<h3 className='font-semibold text-lg mb-2'>Socials</h3>
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.url}
										target='_blank'
										rel='noreferrer'
										className='group flex items-center gap-2'
									>
										<Icon className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
										<span className='text-muted-foreground group-hover:text-accent transition-colors'>
											{social.name}
										</span>
									</a>
								);
							})}
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center relative overflow-hidden'>
					<h1 className='text-[15vw] font-bold leading-none text-muted-foreground/10 select-none tracking-tighter text-center w-full'>
						NICHOLAS BENSON
					</h1>
					<div className='absolute bottom-4 w-full flex justify-between items-end text-xs text-muted-foreground px-2'>
						<p>© {new Date().getFullYear()} Nicholas Benson</p>
						<p>All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
