"use client";

import { useEffect, useState } from "react";
import ImageLoader from "@utils/ImageLoader";
import { MinusSvg, PlusSvg } from "@utils/constants/icons";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "@lib/store/slices/productSlice";

const CartItem = ({ item }: any) => {
	const [qty, setQty] = useState(item.quantity);
	const dispatch = useDispatch();

	const removeProduct = (id: any) => {
		dispatch(deleteProduct({ id }));
	};

	useEffect(() => {
		dispatch(addProduct({ id: item.id, quantity: qty }));
	}, [qty]);

	return (
		<div
			key={item.id}
			className="flex flex-col md:flex-row items-center justify-start mb-[30px] last:mb-0">
			<button
				className="cursor-pointer px-[10px] py-[2px] text-light bg-red-500 rounded-md flex items-center justify-center mb-[10px] md:mb-0 md:mr-[20px] last:mr-0"
				onClick={() => removeProduct(item.id)}>
				Delete
			</button>
			<div className="max-w-[150px] relative block mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
				<ImageLoader
					src={item?.thumbnail}
					alt={item?.title}
					width={150}
					height={100}
				/>
			</div>
			<p className="text-[14px] leading-[1.2] font-bold mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
				{item?.title}
			</p>
			<div className="flex h-[30px] mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
				<div className="flex h-[30px] mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
					<button
						className="cursor-pointer px-[2px] py-[2px] bg-gray-100 rounded-md flex items-center justify-center"
						onClick={() => setQty(qty - 1)}>
						<MinusSvg
							width={35}
							height={35}
						/>
					</button>
					<input
						type="text"
						value={item?.quantity}
						className={`w-full h-full rounded-md mx-2 px-2 bg-gray-100 outline-none max-w-[100px]`}
						onChange={(e: any) => {
							e.target.value < 1
								? setQty(1)
								: e.target.value === 0
								? setQty(1)
								: setQty(e.target.value);
						}}
						onBlur={(e: any) => e.target.value > 0 && setQty(1)}
						onKeyPress={(e: any) => {
							!/[0-9]/.test(e.key) && e.preventDefault();
						}}
					/>
					<button
						className="cursor-pointer px-[2px] py-[2px] bg-gray-100 rounded-md flex items-center justify-center"
						onClick={() => setQty(qty + 1)}>
						<PlusSvg
							width={35}
							height={35}
						/>
					</button>
				</div>
			</div>
			<p className="text-[14px] leading-[1.2] font-bold mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
				${item?.price}
			</p>
			<p className="text-[14px] leading-[1.2] font-bold mb-[10px] md:mb-0 md:mr-[20px] last:mr-0">
				{item?.quantity} x ${item?.price} = $
				{item?.quantity * item?.price}
			</p>
		</div>
	);
};

export default CartItem;
