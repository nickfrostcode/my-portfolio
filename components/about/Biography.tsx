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
						I'm a Computer Scientist, Software Developer, and Graphic
						Designer who enjoys building digital products that combine
						reliable engineering with thoughtful design. I believe great
						software is created when technology and design work together,
						not as separate disciplines but as complementary parts of the
						same solution.
					</p>

					<p className='-mt-7'>
						My journey into technology started with a genuine curiosity
						about how software works and how digital products are built.
						That curiosity eventually led me to study Computer Science,
						where I developed a strong foundation in software engineering,
						algorithms, databases, and modern web technologies. Along the
						way, I discovered graphic design, which broadened my
						perspective on creating products that are not only functional
						but also intuitive and visually refined.
					</p>

					<blockquote className='border-l-4 border-accent pl-6 italic text-foreground/70 text-xl font-medium leading-relaxed'>
						"I believe the best digital products are built when strong
						engineering meets thoughtful design."
					</blockquote>

					<p>
						Today, I build modern web applications from the frontend to
						the backend, with a focus on writing maintainable code,
						designing scalable systems, and delivering experiences that
						feel simple and reliable to the people who use them. Whether
						it's architecting an application, developing reusable
						components, or improving performance, I enjoy solving problems
						through practical and well-structured software.
					</p>

					<div className='space-y-10'>
						<div>
							<h3 className='text-xl md:text-2xl font-semibold text-foreground'>
								Why both design and engineering?
							</h3>
							<p>
								For me, development and design have never been separate
								interests. While software engineering provides the
								structure, logic, and reliability behind an application,
								design shapes how people experience and interact with
								it. Having experience in both disciplines allows me to
								bridge the gap between technical implementation and user
								experience, creating products that are practical,
								accessible, and enjoyable to use.
							</p>
						</div>

						<div>
							<h3 className='text-xl md:text-2xl font-semibold text-foreground'>
								What drives my work?
							</h3>
							<p>
								I'm motivated by continuous learning and meaningful
								problem-solving. I enjoy exploring new technologies,
								improving my skills, and taking on projects that
								challenge me to think differently. Beyond development
								and design, I've also had the opportunity to serve in
								student leadership, experiences that strengthened my
								ability to collaborate, communicate, and build solutions
								that create a positive impact within my community. Every
								project I work on is another opportunity to grow while
								creating something useful, reliable, and purposeful.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
