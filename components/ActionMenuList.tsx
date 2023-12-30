import ImageLoader from "@utils/ImageLoader";
import { motion } from "framer-motion";
import NavItems from "./NavItem";

const ActionMenuList = () => {
	return (
		<div className="inline-flex items-center justify-center">
			<motion.div
				whileHover={{ y: -2 }}
				whileTap={{ scale: 0.9 }}
				className="hidden md:block p-2 mr-4 last:mr-0 rounded-full bg-slate-200 cursor-pointer">
				<ImageLoader
					src={"/images/svg/magnifier.svg"}
					width={20}
					height={20}
					className="max-w-[20px]"
					alt={"search"}
				/>
			</motion.div>
			<NavItems
				href={"/cart"}
				title={`Cart [${0}]`}
			/>
			<NavItems
				href={"/login"}
				title={`Login`}
			/>
		</div>
	);
};

export default ActionMenuList;
