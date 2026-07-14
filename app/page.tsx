/** @format */

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center bg-[#F0EDE9] dark:bg-[#111111] text-[#111111] dark:text-[#F0EDE9] font-sans p-4'>
			<main className='flex flex-col items-center justify-center text-center space-y-12 max-w-3xl'>
				<div className='space-y-6'>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Nicholas Benson Oluwaferanmi
					</h1>
					<p className='text-lg md:text-xl text-[#6E6E6E] font-medium'>
						Computer Scientist bridging the gap between Software
						Engineering and Visual Design.
					</p>
				</div>

				<div className='inline-block border border-[#D3D0CC] dark:border-[#2E2E2E] bg-[#E5E2DE] dark:bg-[#1C1C1C] rounded-md px-8 py-4'>
					{/* Using accent-pressed (#00A8CC) for light mode contrast, raw accent (#00D4FF) for dark mode */}
					<p className='text-[#00A8CC] dark:text-[#00D4FF] font-mono text-sm uppercase tracking-widest font-semibold'>
						Portfolio Coming Soon
					</p>
				</div>
			</main>
		</div>
	);
}
