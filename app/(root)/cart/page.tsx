import CartPriceDetails from "@comp/cart/CartPriceDetails";
import CartList from "@comp/cart/CartList";

const CartPage = async () => {
	return (
		<main className="py-[30px] w-[88%] max-w-[1300px] mx-auto">
			<div className="flex flex-col lg:flex-row justify-start">
				<div className="w-full lg:w-[70%] max-lg:pb-[30px]">
					<CartList />
				</div>
				<div className="w-full lg:ml-[10%] lg:w-[20%]">
					<CartPriceDetails />
				</div>
			</div>
		</main>
	);
};

export default CartPage;
