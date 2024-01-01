import MenuTransitionEffect from "@comp/common/MenuTransitionEffect";

const AboutPage = () => {
	return (
		<main className="pt-[30px] w-[88%] max-w-[1300px] mx-auto">
			<MenuTransitionEffect />
			<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#000] xl:leading-[50px] font-bold capitalize mb-[15px] md:mb-[20px]">
				About Page
			</h2>
		</main>
	);
};

export default AboutPage;
