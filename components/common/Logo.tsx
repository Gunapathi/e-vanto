import ImageLoader from "@utils/ImageLoader";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href={"/"}
				className="w-10 h-10 md:w-16 md:h-16 bg-light text-light flex items-center justify-center rounded-full border-[2px] border-solid border-primaryRed"
				whileHover={{
					backgroundColor: [
						"#f5f5f5",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#f5f5f5",
					],
					transition: { duration: 1, repeat: Infinity },
				}}>
				<ImageLoader
					src={"/images/logo.svg"}
					width={38}
					height={38}
					alt="Logo"
					style={{
						width: "auto",
					}}
                    priority
                    className="max-w-[20px] md:max-w-[28px]"
				/>
			</MotionLink>
		</div>
	);
};

export default Logo;
