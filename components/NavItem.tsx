"use client";

import { NavItemsParams } from "@lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ href, title, className }: NavItemsParams) => {
	const pathname = usePathname();

	return (
		<Link
			href={`${href}`}
			className={`mb-3 md:mb-0 md:mr-8 last:mr-0 relative font-medium text-[15px] md:text-[16px] group text-light md:text-dark`}>
			{title}
			<span
				className={`h-[1px] inline-block bg-light md:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					pathname === `${href}` ? "w-full" : "w-0"
				} ${className ? className : ''}`}>
				&nbsp;
			</span>
		</Link>
	);
};

export default NavItems;
