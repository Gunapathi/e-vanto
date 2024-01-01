"use client";

import ImageLoader from "@utils/ImageLoader";
import NavItems from "./NavItem";
import { headerMainLinks } from "@utils/constants";
import ActionMenuList from "./ActionMenuList";
import useMediaQuery from "@utils/hooks/useMediaQuery";
import MobileNav from "./MobileNav";
import { useEffect } from "react";
import Link from "next/link";

const Header = () => {
	const isPageWide = useMediaQuery("(min-width: 768px)");

	const handleWindowScroll = () => {
		let getScrollLength =
			window.pageYOffset || document.documentElement.scrollTop;
		let getHeaderEle = document.querySelector("header"); // Update with your header ID
		if (getHeaderEle) {
			let getHeaderHeight;
			// Determine header height based on conditions
			if (isPageWide) {
				getHeaderHeight = getHeaderEle.offsetHeight - 60;
			} else {
				getHeaderHeight = 0;
			}
			if (getScrollLength > getHeaderHeight) {
				getHeaderEle.classList.add("nav-fixed-top"); // Add your desired class
			} else {
				getHeaderEle.classList.remove("nav-fixed-top");
			}
		}
	};

	useEffect(() => {
		handleWindowScroll();
		window.addEventListener("scroll", handleWindowScroll);
		return () => window.removeEventListener("scroll", handleWindowScroll);
	}, []);

	return (
		<header className="py-4 md:py-6 fixed inset-0 w-full h-[60px] md:h-[90px] z-[5]">
			<div className="w-[88%] max-w-[1300px] mx-auto flex items-center justify-between">
				<MobileNav />
				<nav className="hidden md:flex items-center justify-end">
					{headerMainLinks.length > 0 &&
						headerMainLinks.map((item) => (
							<NavItems
								key={item.label}
								href={item.route}
								title={item.label}
							/>
						))}
				</nav>
				<Link
					className="max-w-[28px] md:max-w-[38px] z-[1] cursor-pointer"
					href={'/'}
				>
					<ImageLoader
						src={"/images/logo.svg"}
						width={38}
						height={38}
						alt="Logo"
						style={{
							width: "auto",
						}}
						priority
					/>
				</Link>
				<div className={`hidden md:block`}>
					<ActionMenuList />
				</div>
			</div>
		</header>
	);
};

export default Header;
