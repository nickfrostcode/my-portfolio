/** @format */
"use client";

import Image from "next/image";
import { useMode } from "@/context/ModeContext";
import { rearrangeByMode } from "@/lib/logic";
import { certificates, awards } from "@/lib/data";
import { LuAward, LuFileBadge } from "react-icons/lu";

export function CredentialsGrid() {
	const { mode } = useMode();

	const sortedCerts = rearrangeByMode(certificates, mode);
	const sortedAwards = rearrangeByMode(awards, mode);

	return (
		<section className='w-full py-20 bg-card/50 space-y-24 border-b border-border'>
			{/* CERTIFICATIONS */}
			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-10'>
				<div className='flex items-center gap-4'>
					<div className='text-center space-y-2 w-full'>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
							Certifications
						</h2>
						<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
							Academic and professional qualifications.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{sortedCerts.map((cert) => (
						<div
							key={cert.id}
							className='group flex flex-col bg-background border border-border dark:border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-lg p-3 relative'
						>
							{/* Image */}
							<div className='relative w-full aspect-video bg-muted overflow-hidden rounded-xl'>
								{cert.image ? (
									<Image
										src={cert.image}
										alt={cert.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
								) : (
									<div className='w-full h-full flex items-center justify-center bg-muted'>
										<LuFileBadge className='w-12 h-12 text-muted-foreground' />
									</div>
								)}
							</div>

							{/* Content */}
							<div className='flex flex-col flex-1 p-2 pt-5'>
								<div className='mb-4'>
									<span className='inline-block px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-muted text-muted-foreground mb-3'>
										{cert.type}
									</span>
									<h3 className='text-lg md:text-xl font-bold text-foreground mb-1 leading-tight'>
										{cert.title}
									</h3>
									<h4 className='text-sm font-medium text-accent'>
										{cert.issuer}
									</h4>
								</div>

								<p className='text-sm text-foreground/80 leading-relaxed'>
									{cert.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* AWARDS */}
			<div className='container px-4 md:px-6 w-full max-w-7xl mx-auto space-y-10'>
				<div className='flex items-center gap-4'>
					<div className='text-center space-y-2 w-full'>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
							Awards & <span className='text-accent'>Honors</span>
						</h2>
						<p className='text-muted-foreground font-medium text-center'>
							Recognition for outstanding contributions.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{sortedAwards.map((award) => (
						<div
							key={award.id}
							className='group flex flex-col bg-background border border-border dark:border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-lg p-3 relative'
						>
							{/* Image */}
							<div className='relative w-full aspect-video bg-muted overflow-hidden rounded-xl'>
								{award.image ? (
									<Image
										src={award.image}
										alt={award.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
								) : (
									<div className='w-full h-full flex items-center justify-center bg-muted'>
										<LuAward className='w-12 h-12 text-muted-foreground' />
									</div>
								)}
							</div>

							{/* Content */}
							<div className='flex flex-col flex-1 p-2 pt-5'>
								<div className='mb-4'>
									<span className='inline-block px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-muted text-muted-foreground mb-3'>
										{award.date}
									</span>
									<h3 className='text-lg md:text-xl font-bold text-foreground mb-1 leading-tight'>
										{award.title}
									</h3>
									<h4 className='text-sm font-medium text-muted-foreground'>
										{award.issuer}
									</h4>
								</div>

								<p className='text-sm text-foreground/80 leading-relaxed'>
									{award.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
