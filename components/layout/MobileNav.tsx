"use client";

import { headerMainLinks } from "@utils/constants";
import { useState } from "react";
import NavItems from "./NavItem";
import { motion } from "framer-motion";
import ActionMenuList from "./ActionMenuList";

const MobileNav = () => {
	const [isMobOpen, setIsMobOpen] = useState(false);

	const handleClick = () => {
		setIsMobOpen(!isMobOpen);
	};
	return (
		<div className="block md:hidden">
			<button
				className="flex flex-col items-center justify-center z-[10] relative"
				onClick={handleClick}>
				<span
					className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isMobOpen
							? "rotate-45 translate-y-1"
							: "-translate-y-0.5"
					}`}></span>
				<span
					className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isMobOpen ? "opacity-0" : "opacity-100"
					}`}></span>
				<span
					className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isMobOpen
							? "-rotate-45 -translate-y-1"
							: "translate-y-0.5"
					}`}></span>
			</button>
			{isMobOpen ? (
				<>
					<span className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-[9]" />
					<motion.div
						initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
						animate={{ scale: 1, opacity: 1 }}
						className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] bg-dark/50 rounded-lg backdrop-blur-md py-32">
						<nav className="flex items-center flex-col justify-center mb-4">
							{headerMainLinks.length > 0 &&
								headerMainLinks.map((item) => (
									<NavItems
										key={item.label}
										href={item.route}
										title={item.label}
									/>
								))}
						</nav>
						<ActionMenuList />
					</motion.div>
				</>
			) : null}
		</div>
	);
};

export default MobileNav;
