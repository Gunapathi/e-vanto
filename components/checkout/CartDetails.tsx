"use client";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { updateCartTotal } from "@lib/store/slices/cartSlice";

const CartDetails = () => {
	const products = useSelector((state: any) => state.cart.products);

	const [disTotal, setDisTotal] = useState<number>(0);
	const [orderTotal, setOrderTotal] = useState<number>(0);
	const dispatch = useDispatch();

	const CalcTotal = () => {
		let _cartTotal = 0;
		let _disTotal = 0;

		if (products.length > 0) {
			products.forEach(
				(item: any) => (_cartTotal += item?.quantity * item?.price)
			);
		}

		setOrderTotal(_cartTotal - _disTotal);
		dispatch(updateCartTotal({ cartTotal: _cartTotal - _disTotal }));
	};

	useEffect(() => {
		CalcTotal();
	}, [products]);

	return (
		<section>
			<div className="mb-[30px]">
				{products.length > 0 ? (
					products.map((item: any) => {
						return (
							<CartItem
								key={item?.id}
								item={item}
							/>
						);
					})
				) : (
					<p className="text-[22px] leading-[1.2] border-b-[2px] border-dotted border-[#000] pb-[20px]">
						Cart is empty
					</p>
				)}
			</div>
			<div className="w-full md:w-1/2 mr-0 ml-auto ">
				<div className="flex items-center justify-between text-[22px] lg:text-[24px] font-bold leading-[1.2] mb-[5px] last:mb-0">
					<span className="w-1/2">Cart Total</span>
					<span className="w-1/2 text-right">${orderTotal}</span>
				</div>
				<div className="flex items-center justify-between opacity-50 text-[16px] lg:text-[18px] font-medium leading-[1.2] mb-[5px] last:mb-0">
					<span className="w-1/2">Discount</span>
					<span className="w-1/2 text-right">${disTotal}</span>
				</div>
			</div>
		</section>
	);
};

export default CartDetails;
