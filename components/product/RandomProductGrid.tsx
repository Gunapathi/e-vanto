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
			<h2 className="text-[32px] leading-[1.2] font-bold text-center mb-[40px]">
				You May be Intrested on
			</h2>
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
