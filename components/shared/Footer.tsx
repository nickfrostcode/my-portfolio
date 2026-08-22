/** @format */

"use client";

import { ModeLink } from "@/components/shared/ModeLink";
import { useMode } from "@/context/ModeContext";
import { socialLinks } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

export function Footer() {
	const { mode, isSubdomain } = useMode();
	const isDesign = mode === "design";

	return (
		<footer className='w-full bg-card border-t border-border mt-15 relative overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 py-12 md:py-16'>
				<div className='flex gap-12 md:gap-8 flex-wrap flex-col md:flex-row'>
					{/* Quick Summary */}
					<div className='flex flex-col gap-4 flex-1'>
						<h3 className='font-semibold text-lg'>Nicholas Benson</h3>
						<p className='text-muted-foreground text-sm leading-relaxed max-w-xs'>
							{isDesign
								? "Visual & Graphic Designer focused on creating distinctive brand identities, digital assets, typography, and visual systems."
								: "Software Engineer & Full-Stack Developer building modern, scalable web applications, APIs, and intuitive user experiences."}
						</p>
						<p className='text-sm text-muted-foreground'>
							Open to opportunities.
						</p>

						{/* Cross-view Connection Link */}
						<div className='pt-2'>
							{isDesign ? (
								<a
									href={isSubdomain ? "https://nickfrost.dev" : "/"}
									className='group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors'
								>
									<span>Also a developer</span>
									<LuArrowRight className='w-4 h-4 text-accent transition-transform group-hover:translate-x-1' />
									<span className='font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors'>
										nickfrost.dev
									</span>
								</a>
							) : (
								<a
									href={
										isSubdomain
											? "https://design.nickfrost.dev"
											: "/design"
									}
									className='group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors'
								>
									<span>Also a designer</span>
									<LuArrowRight className='w-4 h-4 text-accent transition-transform group-hover:translate-x-1' />
									<span className='font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors'>
										design.nickfrost.dev
									</span>
								</a>
							)}
						</div>
					</div>

					<div className='basis-1/3 grow flex flex-wrap gap-12'>
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
							{isDesign ? (
								<>
									<ModeLink
										href='/works'
										className='text-sm text-muted-foreground hover:text-accent transition-colors'
									>
										Works
									</ModeLink>
									<ModeLink
										href='/#services'
										className='text-sm text-muted-foreground hover:text-accent transition-colors'
									>
										Services
									</ModeLink>
								</>
							) : (
								<>
									<ModeLink
										href='/projects'
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
								</>
							)}
							<ModeLink
								href='/resume'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Resume
							</ModeLink>
						</div>

						{/* Connect */}
						<div className='flex flex-col gap-3 flex-1'>
							<h3 className='font-semibold text-lg mb-2'>Connect</h3>
							{socialLinks
								.filter((social) => Boolean(social.url?.trim()))
								.map((social) => {
									const Icon = social.icon;
									return (
										<a
											key={social.name}
											href={social.url}
											target='_blank'
											rel='noopener noreferrer'
											className='group text-sm inline-flex items-center gap-2'
										>
											<Icon className='w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors' />
											<span className='text-muted-foreground group-hover:text-accent transition-colors'>
												{social.name}
											</span>
										</a>
									);
								})}
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center relative overflow-hidden pt-8 pb-4'>
					<h1 className='text-[15vw] font-bold leading-none text-muted-foreground/10 select-none tracking-tighter text-center w-full whitespace-nowrap pointer-events-none'>
						NICHOLAS
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
