/** @format */

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center bg-background text-foreground font-sans p-4'>
			<main className='flex flex-col items-center justify-center text-center space-y-12 max-w-3xl'>
				<div className='space-y-6'>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Nicholas Benson Olúwafẹ́rànmi
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground font-medium'>
						Computer Scientist bridging the gap between Software
						Engineering and Visual Design.
					</p>
				</div>

				<div className='inline-block border border-border bg-card rounded-md px-8 py-4'>
					<p className='text-ring font-mono text-sm uppercase tracking-widest font-semibold'>
						Portfolio Coming Soon
					</p>
				</div>
			</main>
		</div>
	);
}
