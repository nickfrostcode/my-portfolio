/** @format */

export function Biography() {
	return (
		<section className='w-full py-20 bg-background'>
			<div className='container px-5 w-full max-w-5xl mx-auto space-y-8'>
				<div className='space-y-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
						Who is Nicholas Benson?
					</h2>
				</div>

				<div className='text-md md:text-lg text-muted-foreground leading-relaxed md:leading-loose space-y-10 text-pretty'>
					<p>
						I'm a highly motivated
						Computer Scientist and Software Engineer bridging the gap
						between hardcore engineering and aesthetic visual design.
					</p>
					<p className="-mt-7">
						My journey didn't start with a perfectly planned curriculum. It began with a sheer curiosity about how digital systems were built. I spent countless nights disassembling open-source projects, breaking code just to see how to fix it, and realizing that programming wasn't just about syntax—it was about solving human problems. This curiosity eventually pushed me to pursue a formal degree in Computer Science, where I fell in love with the underlying architecture of the web, algorithms, and the raw performance of scalable systems.
					</p>
					
					<blockquote className="border-l-4 border-accent pl-6 italic text-foreground/70 text-xl font-medium leading-relaxed">
						"Great software isn't just written; it's engineered with empathy for the user and respect for the machine."
					</blockquote>

					<p>
						With a strong academic foundation in algorithms and software
						architecture, I specialize in building scalable systems that
						don't just work flawlessly behind the scenes, but also provide
						an intuitive, engaging, and premium experience for users on
						the frontend. I thrive in environments where technical
						complexity meets creative design.
					</p>
					
					<div className="space-y-10">
						<div>
							<h3 className="text-xl md:text-2xl font-semibold text-foreground">Why design AND engineering?</h3>
							<p>
								Early in my career, I noticed a massive disconnect between backend architecture and frontend user experience. Engineers would build incredibly robust, scalable systems that were ultimately frustrating to use. Designers would craft beautiful interfaces that were practically impossible to implement efficiently. I decided to live in the intersection of both. By understanding the constraints of the backend and the nuances of visual design, I can architect solutions that are both technically sound and visually stunning.
							</p>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-semibold text-foreground">What drives my work?</h3>
							<p>
								Impact and performance. Whether I'm designing a brand identity, optimizing a PostgreSQL database, or animating a React component, my goal is always to create something that feels lightning-fast and native. Beyond the editor, I'm passionate about exploring
								human-computer interaction, contributing to open-source
								projects, and constantly challenging myself to learn new tools
								in the rapidly evolving AI and software landscapes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
