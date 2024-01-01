import MenuTransitionEffect from "@comp/common/MenuTransitionEffect";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login | E-Vanto",
	description: "E-Vanto for product purchase",
};

const LoginPage = () => {
	return (
		<main className="pt-[30px] w-[88%] max-w-[1300px] mx-auto">
			<MenuTransitionEffect />
			<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#000] xl:leading-[50px] font-bold capitalize mb-[15px] md:mb-[20px]">
				Login Page
			</h2>
		</main>
	);
};

export default LoginPage;
