"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
	const products = useSelector((state: any) => state.products);
	console.log(products);

	return (
		<div>
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
				<div>
					<p>Cart is empty</p>
				</div>
			)}
		</div>
	);
};

export default CartList;
