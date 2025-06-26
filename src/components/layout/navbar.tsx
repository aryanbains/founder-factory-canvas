import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAppStore } from "@/store";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/events", label: "Events" },
	{ href: "/team", label: "Team" },
	{ href: "/initiatives", label: "Initiatives" },
	{ href: "/join", label: "Join" },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { isMenuOpen, setMenuOpen } = useAppStore();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 32);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled
					? "bg-onyx/80 backdrop-blur-lg shadow-lg h-16 md:h-[64px]"
					: "bg-transparent h-20 md:h-[72px]"
			)}
		>
			<Container>
				<nav className="flex items-center justify-between h-full">
					<Link to="/" className="z-30">
						<Logo />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8 pr-14">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="relative z-30 md:hidden text-foreground"
						onClick={() => setMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</Container>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-20 bg-onyx"
					>
						<Container className="h-full flex items-center justify-center">
							<div className="flex flex-col items-center space-y-8">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										to={link.href}
										className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
										onClick={() => setMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
