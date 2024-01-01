"use client";

import ImageLoader from "@utils/ImageLoader";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	LikedSvg,
	MinusSvg,
	NotLikedSvg,
	PlusSvg,
} from "@utils/constants/icons";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { addProduct } from "@lib/store/slices/cartSlice";

const ProductItem = ({ data, classname, showDesc }: any) => {
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
				rating: data?.rating,
				total: data?.price * qty,
			};
			dispatch(addProduct(productDetails));
		}
	};

	return (
		<div
			className={`group mb-[30px] my-[20px] rounded-lg shadow-[rgba(0,0,0,0.24)_0px_0px_6px] bg-slate-100 ${
				classname ? classname : ""
			}`}>
			<div className="w-full p-[10px] pb-0 block bg-white">
				<div className="h-[250px] md:h-[200px] relative overflow-hidden">
					<ImageLoader
						src={data?.thumbnail}
						fill
						alt={data?.title}
						className={`object-cover group-hover:scale-[1.1] transition-all duration-300 ease-in-out w-full`}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
					/>
				</div>
			</div>
			<div className="px-2 py-4">
				<div className="flex items-center justify-start mb-[10px]">
					<span className="text-[12px] leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-blue-200">
						&#128947;: {data?.rating}
					</span>
					<span className="text-[12px] leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-green-300">
						{data?.discountPercentage}% Offer
					</span>
					<span className="text-[12px] capitalize leading-[1.2] font-medium rounded-md px-[10px] py-[4px] mr-[10px] last:mr-0 bg-gray-300">
						{data?.brand}
					</span>
				</div>
				<Link
					className="text-[18px] capitalize font-medium leading-[1.2] mb-[10px] line-clamp-2 underline"
					href={`/product/${data?.id}`}>
					{data?.title}
				</Link>
				<div className="flex mb-[15px] items-center justify-start">
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
					<p className="text-[22px] leading-[1.2] font-bold">
						${data?.price}
					</p>
				</div>
				{showDesc && (
					<p className="text-[14px] font-normal leading-[1.2] mb-[15px] line-clamp-2">
						{data?.description}
					</p>
				)}
				<div className="flex h-[30px]">
					<button
						className="cursor-pointer px-[2px] py-[2px] rounded-md flex items-center justify-center"
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
						className={`w-full h-full rounded-md mx-2 px-2 bg-white outline-none max-w-[100px]`}
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
						className="cursor-pointer px-[2px] py-[2px] rounded-md flex items-center justify-center"
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
		</div>
	);
};

export default ProductItem;
