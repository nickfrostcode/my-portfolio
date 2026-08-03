/** @format */

import Link from "next/link";

import { LuMail } from "react-icons/lu";
import {
	FaXTwitter,
	FaLinkedinIn,
	FaGithub,
	FaInstagram,
	FaWhatsapp,
} from "react-icons/fa6";

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
							<Link
								href='/'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Home
							</Link>
							<Link
								href='/about'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								About
							</Link>
							<Link
								href='/projects'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Projects
							</Link>
							<Link
								href='/blog'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Blog
							</Link>
							<Link
								href='/resume'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Resume
							</Link>
							<Link
								href='/contact'
								className='text-sm text-muted-foreground hover:text-accent transition-colors'
							>
								Contact
							</Link>
						</div>

						{/* Social Handles */}
						<div className='flex-1 flex flex-col gap-4 text-xs'>
							<h3 className='font-semibold text-lg mb-2'>Social</h3>
							<a
								href='https://github.com/nickfrostcode'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<FaGithub className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									GitHub
								</span>
							</a>

							<a
								href='https://linkedin.com/nickfrostcode'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<FaLinkedinIn className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									LinkedIn
								</span>
							</a>

							<a
								href='https://x.com/nickfrostcode'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<FaXTwitter className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									X (formerly Twitter)
								</span>
							</a>

							<a
								href='https://github.com/'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<FaInstagram className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									Instagram
								</span>
							</a>
							<a
								href='https://github.com/'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<FaWhatsapp className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									Whatsapp
								</span>
							</a>

							<a
								href='https://github.com/'
								target='_blank'
								rel='noreferrer'
								className='group flex items-center gap-2'
							>
								<LuMail className='w-4 h-4 group-hover:text-accent transition-colors text-muted-foreground' />
								<span className='text-muted-foreground group-hover:text-accent transition-colors'>
									Email
								</span>
							</a>
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
