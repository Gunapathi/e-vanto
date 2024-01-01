"use client";

import ImageLoader from "@utils/ImageLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ title, imageList }: any) => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{imageList.length > 0 &&
				imageList.map((item: any, i: number) => (
					<div
						key={i}
						className={`h-[200px] md:h-[320px] lg:h-[400px] w-full relative group rounded-lg overflow-hidden`}>
						<ImageLoader
							key={i}
							src={item}
							alt={`${title}-1`}
							fill
							className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out`}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
						/>
					</div>
				))}
		</Slider>
	);
};

export default ImageSlider;
