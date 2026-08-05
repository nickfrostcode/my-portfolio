/** @format */

"use client";

import { Button } from "@/components/ui/button";

import { LuMail, LuSend } from "react-icons/lu";
import { socialLinks } from "@/lib/data";

export function Contact() {
	return (
		<section
			id='contact'
			className='w-full py-20 bg-background'
		>
			<div className='container px-4 md:px-6 w-full max-w-6xl mx-auto'>
				<div className='text-center space-y-2 mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
						Get In <span className='text-accent'>Touch</span>
					</h2>
					<p className='text-muted-foreground font-medium max-w-2xl mx-auto'>
						Have a project in mind? Let's build something great together.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8'>
					{/* Form Card (70%) */}
					<div className='bg-card border border-border rounded-3xl p-4 md:p-8'>
						<form
							className='space-y-3'
							onSubmit={(e) => e.preventDefault()}
						>
							{/* Row 1: Name & Email */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='text-sm font-medium text-foreground'
									>
										Name
									</label>
									<input
										id='name'
										type='text'
										placeholder='Jane Doe'
										className='form-input'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='text-sm font-medium text-foreground'
									>
										Email
									</label>
									<input
										id='email'
										type='email'
										placeholder='john@example.com'
										className='form-input'
										required
									/>
								</div>
							</div>

							{/* Row 2: Subject */}
							<div>
								<label
									htmlFor='subject'
									className='text-sm font-medium text-foreground'
								>
									Subject
								</label>
								<input
									id='subject'
									type='text'
									placeholder='What is this regarding?'
									className='form-input'
									required
								/>
							</div>

							{/* Row 3: Category & File */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='category'
										className='text-sm font-medium text-foreground'
									>
										Category
									</label>
									<select
										id='category'
										className='form-input cursor-pointer'
										required
										defaultValue=''
									>
										<option value=''>Select a category</option>
										<option value='freelance'>
											Freelance Project
										</option>
										<option value='fulltime'>Full-time Role</option>
										<option value='mentorship'>Mentorship</option>
										<option value='other'>Other</option>
									</select>
								</div>
								<div>
									<label
										htmlFor='attachment'
										className='text-sm font-medium text-foreground'
									>
										Attachment (Optional)
									</label>
									<input
										id='attachment'
										type='file'
										className='form-input file:border-0 file:bg-transparent file:text-sm file:font-medium text-muted-foreground cursor-pointer'
									/>
								</div>
							</div>

							{/* Row 4: Message */}
							<div>
								<label
									htmlFor='message'
									className='text-sm font-medium text-foreground'
								>
									Message
								</label>
								<textarea
									id='message'
									rows={5}
									placeholder='Tell me more about your project...'
									className='form-input resize-none h-25'
									required
								/>
							</div>

							{/* Submit */}
							<div className='pt-2'>
								<Button type='submit' className='w-full h-12'>
									<LuSend className='w-4 h-4' />
									Send Message
								</Button>
							</div>
						</form>
					</div>

					{/* Socials Card (30%) */}
					<div className='flex flex-col gap-8 h-full'>
						<div className='bg-card border border-border rounded-3xl p-6 flex-1 text-sm'>
							<h3 className='text-lg font-bold text-foreground mb-4'>
								Connect
							</h3>
							<div className='flex flex-col gap-4'>
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
											<Icon className='w-5 h-5 group-hover:text-accent transition-colors' />
											<span className='font-medium text-md text-foreground group-hover:text-accent transition-colors'>
												{social.name}
											</span>
										</a>
									);
								})}
							</div>
						</div>
						<div className='bg-card border border-border rounded-3xl p-6'>
							<p className='text-sm text-muted-foreground leading-relaxed mb-3'>
								Prefer direct emails? Feel free to reach out anytime. I
								usually respond within 24 hours.
							</p>
							<span className='block py-0.5 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/50 text-center w-full'>
								Status - Available
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
