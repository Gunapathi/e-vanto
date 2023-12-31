"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartPriceDetails = () => {
	const products = useSelector((state: any) => state.products);

	const [cartTotal, setCartTotal] = useState<number>(0);
	const [disTotal, setDisTotal] = useState<number>(0);
	const [orderTotal, setOrderTotal] = useState<number>(0);

	const CalcTotal = () => {
		let _cartTotal = 0;
		let _disTotal = 0;

		if (products.length > 0) {
			products.forEach(
				(item: any) => (_cartTotal += item?.quantity * item?.price)
			);
		}

		setCartTotal(_cartTotal);
		setOrderTotal(_cartTotal - _disTotal);
	};

	useEffect(() => {
		CalcTotal();
	}, [products]);

	return (
		<div className="">
			<div className="flex items-center justify-between mb-[15px] last:mb-0">
				<span className="w-1/2 text-[12px] leading-[1.2] font-bold">
					Cart Total
				</span>
				<span className="w-1/2 text-[12px] leading-[1.2] font-medium text-right">
					${cartTotal}
				</span>
			</div>
			<div className="flex items-center justify-between mb-[15px] last:mb-0">
				<span className="w-1/2 text-[12px] leading-[1.2] font-bold">
					Discount
				</span>
				<span className="w-1/2 text-[12px] leading-[1.2] font-medium text-right">
					${disTotal}
				</span>
			</div>
			<span className="block h-[2px] w-full bg-primaryRed mb-[15px] last:mb-0" />
			<div className="flex items-center justify-between mb-[15px] last:mb-0">
				<span className="w-1/2 text-[12px] leading-[1.2] font-bold">
					Total
				</span>
				<span className="w-1/2 text-[12px] leading-[1.2] font-medium text-right">
					${orderTotal}
				</span>
			</div>
			<span className="block h-[2px] w-full bg-primaryRed mb-[15px] last:mb-0" />
		</div>
	);
};

export default CartPriceDetails;
