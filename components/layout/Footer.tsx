import Link from "next/link";

const Footer = () => {
	return (
		<footer className="z-[6] relative w-full border-t-2 border-solid border-primaryRed font-medium text-[15px] md:text-[16px] bg-footerRedBg">
			<div
				className={`w-[88%] max-w-[1300px] mx-auto h-full flex items-center justify-between max-lg:flex-col py-2 md:py-4`}>
				<span>
					{new Date().getFullYear()} &copy; All Rights Reserved.
				</span>
				<div className="flex items-center lg:py-2">
					Built by&nbsp;
					<Link
						href={"https://www.github.com/gunapathi"}
						target="_blank"
						className="underline underline-offset-2">
						Gunapathi
					</Link>
				</div>
				<Link
					href={"https://www.github.com/gunapathi"}
					target="_blank"
					className="underline underline-offset-2">
					Say Hello
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
