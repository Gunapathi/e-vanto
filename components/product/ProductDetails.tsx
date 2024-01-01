"use client";

import {
	LikedSvg,
	MinusSvg,
	NotLikedSvg,
	PlusSvg,
} from "@utils/constants/icons";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@lib/store/slices/cartSlice";

const ProductDetails = ({ data, className = "" }: any) => {
	const [qty, setQty] = useState<any>(0);
	const [liked, setLiked] = useState<any>(false);

	const dispatch = useDispatch();
	const handleAddToCart = () => {
		if (qty > 0) {
			const productDetails = {
				id: data?.id,
				title: data?.title,
				thumbnail: data?.thumbnail,
				quantity: qty,
				price: data?.price,
				total: data?.price * qty,
			};
			dispatch(addProduct(productDetails));
		}
	};

	return (
		<div className={`${className}`}>
			<h2 className="text-[18px] md:text-[22px] lg:text-[45px] capitalize font-medium leading-[1.2] mb-[10px]">
				{data?.title}
			</h2>
			<div className="flex items-center justify-start mb-[15px] lg:mb-[20px]">
				<span className="text-[14px] leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-blue-200">
					&#128947;: {data?.rating}
				</span>
				<span className="capitalize text-[14px] leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-gray-300">
					{data?.brand}
				</span>
			</div>
			<p className="text-[18px] font-normal leading-[1.2] mb-[15px] lg:mb-[20px] max-w-[500px]">
				{data?.description}
			</p>
			<div className="flex mb-[15px] lg:mb-[20px] items-center justify-start">
				<button
					className="cursor-pointer rounded-md flex items-center justify-center mr-[10px]"
					onClick={() => setLiked(!liked)}>
					{liked ? (
						<LikedSvg
							width={35}
							height={35}
						/>
					) : (
						<NotLikedSvg
							width={35}
							height={35}
						/>
					)}
				</button>
				<p className="text-[22px] lg:text-[38px] leading-[1.2] font-bold mr-[10px]">
					${data?.price}
				</p>
				<p className="inline-block text-[14px] leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-green-300">
					{data?.discountPercentage}% Offer
				</p>
			</div>
			<div className="flex h-[30px]">
				<button
					className="cursor-pointer px-[2px] py-[2px] bg-gray-100 rounded-md flex items-center justify-center"
					onClick={() => {
						qty < 1 ? setQty(0) : setQty(qty - 1);
					}}>
					<MinusSvg
						width={35}
						height={35}
					/>
				</button>
				<input
					type="text"
					value={qty}
					className={`w-full h-full rounded-md mx-2 px-2 bg-gray-100 outline-none max-w-[100px]`}
					onChange={(e: any) => {
						e.target.value < 0
							? setQty(0)
							: e.target.value == 0
							? setQty(0)
							: setQty(e.target.value);
					}}
					onBlur={(e: any) => e.target.value == 0 && setQty(0)}
					onKeyPress={(e: any) => {
						!/[0-9]/.test(e.key) && e.preventDefault();
					}}
				/>
				<button
					className="cursor-pointer px-[2px] py-[2px] bg-gray-100 rounded-md flex items-center justify-center"
					onClick={() => {
						qty > 72 ? setQty(0) : setQty(qty + 1);
					}}>
					<PlusSvg
						width={35}
						height={35}
					/>
				</button>
			</div>
			<button
				className="mt-[25px] cursor-pointer px-[10px] py-[2px] bg-gray-100 rounded-md flex items-center justify-center"
				onClick={() => qty > 0 && handleAddToCart()}>
				Add to cart
			</button>
		</div>
	);
};

export default ProductDetails;
