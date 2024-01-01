"use client";

import { useEffect, useState } from "react";
import ImageLoader from "@utils/ImageLoader";
import { MinusSvg, PlusSvg } from "@utils/constants/icons";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "@lib/store/slices/cartSlice";

const CartItem = ({ item }: any) => {
	const [qty, setQty] = useState(item.quantity);
	const dispatch = useDispatch();

	const removeProduct = () => {
		dispatch(deleteProduct({ id: item.id }));
	};

	useEffect(() => {
		dispatch(addProduct({ id: item.id, quantity: qty }));
	}, [qty]);

	return (
		<div
			key={item.id}
			className={`${item.id} flex flex-row items-end justify-between py-[20px] md:py-[30px] first:pt-0 border-b-[2px] border-dotted border-[#000]`}>
			<div className="flex flex-row w-[80%] lg:w-[70%] max-w-[450px]">
				<div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] relative block mr-[20px] flex-shrink-0">
					<ImageLoader
						src={item?.thumbnail}
						alt={item?.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
						className={`absolute inset-0 w-full h-full object-cover rounded-full`}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<p className="text-[18px] leading-[1.2] xl:text-[22px] font-bold mb-[5px] line-clamp-2">
							{item?.title}
						</p>
						<p className="text-[16px] leading-[1.2] font-medium mb-[5px] opacity-50">
							Rating: {item?.rating}
						</p>
					</div>
					<div className="flex flex-col items-start md:flex-row md:items-center mt-[20px]">
						<div className="flex h-[30px]">
							<button
								className="cursor-pointer"
								onClick={() => setQty(qty - 1)}>
								<MinusSvg
									width={30}
									height={30}
								/>
							</button>
							<input
								type="text"
								value={item?.quantity}
								className={`w-full h-full font-bold text-center rounded-md mx-2 px-2 bg-gray-100 border-[1px] border-solid border-primaryRed outline-none max-w-[50px]`}
								onChange={(e: any) => {
									e.target.value < 1
										? setQty(1)
										: e.target.value === 0
										? setQty(1)
										: setQty(e.target.value);
								}}
								onBlur={(e: any) =>
									e.target.value > 0 && setQty(1)
								}
								onKeyPress={(e: any) => {
									!/[0-9]/.test(e.key) && e.preventDefault();
								}}
							/>
							<button
								className="cursor-pointer"
								onClick={() => setQty(qty + 1)}>
								<PlusSvg
									width={30}
									height={30}
								/>
							</button>
						</div>
						<button
							className="cursor-pointer text-primaryRed font-bold mt-[10px] md:mt-0 md:ml-[30px]"
							onClick={removeProduct}>
							Remove
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-[20%] lg:w-[30%]">
				<p className="hidden md:block text-[18px] leading-[1.2] opacity-50 font-bold w-1/2 text-right md:pr-[10px] last:pr-0">
					{item?.quantity} x ${item?.price}
				</p>
				<p className="text-[22px] leading-[1.2] font-bold w-full md:w-1/2 text-right md:pr-[10px] last:pr-0">
					${item?.quantity * item?.price}
				</p>
			</div>
		</div>
	);
};

export default CartItem;
