import Link from "next/link";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="w-full bg-card border-t border-border mt-24">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
					{/* Quick Summary */}
					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-lg">Nicholas Benson Olúwafẹ́rànmi</h3>
						<p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
							Computer Scientist bridging the gap between Software Engineering and Visual Design.
						</p>
						<p className="text-sm text-muted-foreground mt-4">
							Open to new opportunities.
						</p>
					</div>

					{/* Routes */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold text-lg mb-2">Routes</h3>
						<Link href="/" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">Home</Link>
						<Link href="/about" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">About</Link>
						<Link href="/projects" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">Projects</Link>
						<Link href="/blog" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">Blog</Link>
						<Link href="/resume" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">Resume</Link>
						<Link href="/contact" className="text-sm text-muted-foreground hover:text-accent-pressed transition-colors">Contact</Link>
					</div>

					{/* Social Handles */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold text-lg mb-2">Social</h3>
						<a href="https://github.com/nickfrostcode" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-pressed transition-colors">
							<SiGithub className="w-4 h-4" /> GitHub
						</a>
						<a href="https://linkedin.com/in/nicholasbenson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-pressed transition-colors">
							<FaLinkedin className="w-4 h-4" /> LinkedIn
						</a>
						<a href="https://twitter.com/nickfrostcode" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-pressed transition-colors">
							<SiX className="w-4 h-4" /> X (Twitter)
						</a>
					</div>
				</div>

				<div className="mt-24 pt-8 border-t border-border flex flex-col items-center justify-center relative overflow-hidden">
					<h1 className="text-[12vw] font-bold leading-none text-muted-foreground/10 select-none tracking-tighter">
						NICHOLAS
					</h1>
					<div className="absolute bottom-4 w-full flex justify-between items-end text-xs text-muted-foreground px-2">
						<p>© {new Date().getFullYear()} Nicholas Benson Olúwafẹ́rànmi</p>
						<p>All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
