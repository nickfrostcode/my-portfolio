/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMode } from "@/context/ModeContext";
import { useTheme } from "next-themes";
import { LuMoon as Moon, LuSun as Sun, LuMonitor as Monitor, LuMenu as Menu, LuX as X, LuChevronDown as ChevronDown } from "react-icons/lu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const { mode } = useMode();
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [modeMenuOpen, setModeMenuOpen] = useState(false);

	useEffect(() => setMounted(true), []);

	const isLanding = ["/", "/dev", "/design"].includes(pathname);
	const activeMode = pathname.startsWith("/dev")
		? "dev"
		: pathname.startsWith("/design")
			? "design"
			: "general";

	const getHref = (hash: string, path: string) => {
		if (isLanding) return hash;
		if (activeMode === "general") return path;
		return `/${activeMode}${path}`;
	};

	const links = [
		{ label: "About", href: isLanding ? "#about" : "/about" },
		{ label: "Projects", href: isLanding ? "#projects" : "/projects" },
		{ label: "Blog", href: isLanding ? "#blog" : "/blog" },
		{ label: "Resume", href: isLanding ? "#resume" : "/resume" },
	];

	const toggleTheme = () => {
		if (theme === "light") setTheme("dark");
		else if (theme === "dark") setTheme("system");
		else setTheme("light");
	};

	const renderThemeIcon = () => {
		if (!mounted) return <Monitor className='w-4 h-4' />;
		if (theme === "dark") return <Moon className='w-4 h-4' />;
		if (theme === "light") return <Sun className='w-4 h-4' />;
		return <Monitor className='w-4 h-4' />;
	};

	return (
		<div className='sticky top-0 z-50 w-full h-13 flex justify-center items-start pointer-events-none px-4 md:px-12'>
			{/* DESKTOP NAV */}
			<nav className='hidden md:flex relative items-center justify-between w-full max-w-3xl h-13 bg-foreground rounded-b-3xl pointer-events-auto px-4'>
				{/* Left Incurve */}
				<div className='absolute top-0 -left-5 w-5 h-5 overflow-visible -scale-x-100 pointer-events-none'>
					<svg
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-full text-foreground overflow-visible'
					>
						<path
							d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
							fill='currentColor'
						/>
						<path
							d='M 20 0 C 8.954 0 0 8.954 0 20'
							className='stroke-border'
							strokeWidth='0'
							fill='none'
						/>
					</svg>
				</div>

				{/* Right Incurve */}
				<div className='absolute top-0 -right-5 w-5 h-5 overflow-visible pointer-events-none'>
					<svg
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-full text-foreground overflow-visible'
					>
						<path
							d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
							fill='currentColor'
						/>
						<path
							d='M 20 0 C 8.954 0 0 8.954 0 20'
							className='stroke-border'
							strokeWidth='0'
							fill='none'
						/>
					</svg>
				</div>

				{/* Left Logo */}
				<div className='flex items-center gap-3 text-background'>
					<div className='w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center font-bold text-lg leading-none'>
						N
					</div>
					<Link
						href={getHref("#", "/")}
						className='font-semibold text-lg tracking-tight hover:text-accent transition-colors'
					>
						Nicholas
					</Link>
				</div>

				{/* Center Links */}
				<div className='flex items-center gap-8'>
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className='text-md font-semibold text-muted-foreground transition-colors hover:text-accent'
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Right Actions */}
				<div className='flex items-center gap-3 lg:gap-4'>
					<div className='relative'>
						<button
							onClick={() => setModeMenuOpen(!modeMenuOpen)}
							className='flex items-center gap-1.5 text-md font-semibold text-muted-foreground hover:text-accent transition-colors capitalize cursor-pointer'
						>
							{activeMode}{" "}
							<motion.div animate={{ rotate: modeMenuOpen ? 180 : 0 }}>
								<ChevronDown className='w-4 h-4' />
							</motion.div>
						</button>
						<AnimatePresence>
							{modeMenuOpen && (
								<motion.div
									initial={{ clipPath: "inset(0% -25% 100% -25%)" }}
									animate={{ clipPath: "inset(0% -25% -20% -25%)" }}
									exit={{ clipPath: "inset(0% -25% 100% -25%)" }}
									transition={{
										duration: 0.4,
										ease: [0.16, 1, 0.3, 1],
									}}
									className='absolute top-9.5 left-1/2 -translate-x-1/2 w-25 flex flex-col z-40 origin-top'
								>
									<div className='relative w-full bg-foreground rounded-b-2xl flex flex-col shadow-sm'>
										{/* Left Incurve for dropdown */}
										<div className='absolute top-0 -left-5 w-5 h-5 overflow-visible -scale-x-100 pointer-events-none'>
											<svg
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='w-full h-full text-foreground overflow-visible'
											>
												<path
													d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
													fill='currentColor'
												/>
												<path
													d='M 20 0 C 8.954 0 0 8.954 0 20'
													className='stroke-border'
													strokeWidth='0'
													fill='none'
												/>
											</svg>
										</div>
										{/* Right Incurve for dropdown */}
										<div className='absolute top-0 -right-5 w-5 h-5 overflow-visible pointer-events-none'>
											<svg
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='w-full h-full text-foreground overflow-visible'
											>
												<path
													d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
													fill='currentColor'
												/>
												<path
													d='M 20 0 C 8.954 0 0 8.954 0 20'
													className='stroke-border'
													strokeWidth='0'
													fill='none'
												/>
											</svg>
										</div>
										<div className='flex flex-col pb-4 overflow-hidden rounded-b-3xl gap-3 pl-3'>
											<Link
												href='/'
												onClick={() => setModeMenuOpen(false)}
												className='text-sm text-muted-foreground hover:text-accent transition-colors font-semibold'
											>
												General
											</Link>
											<Link
												href='/dev'
												onClick={() => setModeMenuOpen(false)}
												className='text-sm text-muted-foreground hover:text-accent transition-colors font-semibold'
											>
												Developer
											</Link>
											<Link
												href='/design'
												onClick={() => setModeMenuOpen(false)}
												className='text-sm text-muted-foreground hover:text-accent transition-colors font-semibold'
											>
												Designer
											</Link>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<div className='relative'>
						<motion.button
							whileTap={{ scale: 0.8, rotate: 180 }}
							whileHover={{ scale: 1.1 }}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 10,
							}}
							onClick={toggleTheme}
							className='flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-accent transition-colors cursor-pointer'
						>
							{renderThemeIcon()}
						</motion.button>
					</div>
					<Button
						variant='secondary'
						className='rounded-3xl font-semibold bg-background hover:bg-card'
					>
						<Link href={isLanding ? "#contact" : "/#contact"}>Contact</Link>
					</Button>
				</div>
			</nav>

			{/* MOBILE NAV WRAPPER */}
			<div className='flex md:hidden relative flex-col w-max min-w-[75%] sm:min-w-[50%]'>
				{/* Left Incurve */}
				<div className='absolute top-0 -left-5 w-5 h-5 overflow-visible -scale-x-100 pointer-events-none'>
					<svg
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-full text-foreground overflow-visible'
					>
						<path
							d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
							fill='currentColor'
						/>
						<path
							d='M 20 0 C 8.954 0 0 8.954 0 20'
							className='stroke-border'
							strokeWidth='0'
							fill='none'
						/>
					</svg>
				</div>
				{/* Right Incurve */}
				<div className='absolute top-0 -right-5 w-5 h-5 overflow-visible pointer-events-none'>
					<svg
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-full text-foreground overflow-visible'
					>
						<path
							d='M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z'
							fill='currentColor'
						/>
						<path
							d='M 20 0 C 8.954 0 0 8.954 0 20'
							className='stroke-border'
							strokeWidth='0'
							fill='none'
						/>
					</svg>
				</div>

				<motion.nav
					initial={false}
					animate={{ height: isOpen ? "auto" : "3.25rem" }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className='w-full bg-foreground rounded-b-2xl pointer-events-auto overflow-hidden flex flex-col shadow-sm'
				>
					{/* Top Bar */}
					<div className='relative flex items-center justify-between w-full h-13 p-2'>
						{/* Left */}
						<div className='flex items-center gap-3 text-background'>
							<div className='w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center font-bold text-lg leading-none'>
								N
							</div>
							<Link
								href={getHref("#", "/")}
								className='font-semibold text-lg tracking-tight hover:text-accent transition-colors'
							>
								Nicholas
							</Link>
						</div>
						{/* Right Toggles */}
						<div className='flex items-center gap-2'>
							<motion.button
								whileTap={{ scale: 0.8, rotate: 180 }}
								onClick={toggleTheme}
								className='p-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer'
							>
								{renderThemeIcon()}
							</motion.button>
							<motion.button
								whileTap={{ scale: 0.8 }}
								className='p-2 text-muted-foreground hover:text-accent cursor-pointer'
								onClick={() => setIsOpen(!isOpen)}
							>
								<AnimatePresence mode='wait'>
									{isOpen ? (
										<motion.div
											key='close'
											initial={{ rotate: -90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: 90, opacity: 0 }}
											transition={{ duration: 0.15 }}
										>
											<X className='w-5 h-5' />
										</motion.div>
									) : (
										<motion.div
											key='menu'
											initial={{ rotate: 90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: -90, opacity: 0 }}
											transition={{ duration: 0.15 }}
										>
											<Menu className='w-5 h-5' />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</div>
					</div>

					{/* Mobile Drawer */}
					<div className='flex flex-col px-6 pt-3 pb-6 gap-6 w-full'>
						<div className='flex flex-col gap-5'>
							{links.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className='text-xl font-semibold text-muted-foreground hover:text-accent transition-colors'
								>
									{link.label}
								</Link>
							))}
						</div>

						<div className='grid grid-cols-3 gap-2 bg-background/10 p-1 rounded-md'>
							<Link
								href='/'
								onClick={() => setIsOpen(false)}
								className={cn(
									"text-center py-2 text-sm rounded-md transition-colors",
									activeMode === "general"
										? "bg-background font-semibold"
										: "text-muted-foreground hover:text-accent",
								)}
							>
								General
							</Link>
							<Link
								href='/dev'
								onClick={() => setIsOpen(false)}
								className={cn(
									"text-center py-2 text-sm rounded-md transition-colors",
									activeMode === "dev"
										? "bg-background font-semibold"
										: "text-muted-foreground hover:text-accent",
								)}
							>
								Dev
							</Link>
							<Link
								href='/design'
								onClick={() => setIsOpen(false)}
								className={cn(
									"text-center py-2 text-sm rounded-md transition-colors",
									activeMode === "design"
										? "bg-background  font-semibold"
										: "text-muted-foreground hover:text-accent",
								)}
							>
								Design
							</Link>
						</div>

						<Button
							variant='secondary'
							className='w-full rounded-md font-semibold bg-background text-foreground'
						>
							<Link
								href={isLanding ? "#contact" : "/#contact"}
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>
						</Button>
					</div>
				</motion.nav>
			</div>
		</div>
	);
}
