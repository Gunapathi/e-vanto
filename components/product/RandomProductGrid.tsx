"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";

const RandomProductGrid = ({ postList }: any) => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="max-w-[88%] mx-auto">
			<div className="max-w-[400px] mx-auto text-center md:mb-[40px]">
				<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#000] xl:leading-[50px] font-bold uppercase mb-[15px] md:mb-[20px]">
					You May be Intersted on
				</h2>
			</div>
			<div className="mb-[40px]">
				<Slider {...settings}>
					{postList.length > 0 &&
						postList.map((item: any) => (
							<ProductItem
								key={item.id}
								classname={`mx-[10px]`}
								data={item}
							/>
						))}
				</Slider>
			</div>
		</section>
	);
};

export default RandomProductGrid;
