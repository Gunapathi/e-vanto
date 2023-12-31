import AnimatedText from "../common/AnimatedText";
import ImageLoader from "@utils/ImageLoader";

const HomeBanner = () => {
	return (
		<section
			className={`h-[calc(100vh_-_60px)] max-md:h-[calc(100vh_-_90px)] flex items-center justify-center relative`}>
			<div className="absolute inset-0 w-full h-full z-[-1]">
				<ImageLoader
					src={`/images/banner/demo-fashion-1.jpg`}
					fill
					alt={"banner 1"}
					className={`object-cover`}
				/>
			</div>
			<div className="w-[88%] max-w-[700px] mx-auto flex flex-col items-center max-lg:text-center">
				<AnimatedText
					text={
						"Feeling in love? Make Your Fashion Statement With E-Vanto"
					}
					className="!text-6xl !text-left text-light max-xl:!text-5xl max-lg:!text-center max-lg:!text-6xl max-md:!text-5xl max-sm:!text-3xl"
				/>
				<p className="my-4 text-base font-medium text-light max-md:text-sm max-sm:text-xs">
					Sell online, in person, and around the world with the
					marketing tools, social integrations, and sales channels you
					need to get your products in front of customers.
				</p>
			</div>
		</section>
	);
};

export default HomeBanner;
