"use client";

import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import axios from "axios";

const RandomProductGrid = ({ postList }: any) => {
	const settings = {
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
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
