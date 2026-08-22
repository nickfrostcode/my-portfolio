/** @format */

"use client";

import { useMode } from "@/context/ModeContext";
import { biography } from "@/lib/data";

export function Biography() {
	const { mode } = useMode();
	const bio = biography[mode];

	return (
		<section className='w-full py-20 bg-background'>
			<div className='container px-5 w-full max-w-5xl mx-auto space-y-8'>
				<div className='space-y-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
						Who is Nicholas Benson?
					</h2>
				</div>

				<div className='text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose space-y-6 text-pretty'>
					<p>{bio.intro[0]}</p>

					<p>{bio.intro[1]}</p>

					<blockquote className='border-l-4 border-accent pl-6 italic text-foreground/70 text-xl font-medium leading-relaxed my-4'>
						&quot;{bio.quote}&quot;
					</blockquote>

					<p>{bio.intro[2]}</p>

					<div className='space-y-10'>
						{bio.sections.map((section) => (
							<div key={section.heading}>
								<h3 className='text-xl md:text-2xl font-semibold text-foreground'>
									{section.heading}
								</h3>
								<p>{section.body}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
