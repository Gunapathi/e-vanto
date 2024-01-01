import CartDetails from "@comp/checkout/CartDetails";
import PaymentAndShipping from "@comp/checkout/PaymentCard";

const CheckoutPage = async () => {
	return (
		<main className="py-[30px] w-[88%] max-w-[1300px] mx-auto">
			<div className="flex flex-col lg:flex-row justify-start">
				<div className="w-full lg:w-[60%] max-lg:pb-[30px] lg:pr-[50px]">
					<h2 className="text-[18px] leading-[1.2] md:text-[36px] lg:text-[40px] text-[#000] xl:leading-[50px] font-bold capitalize mb-[25px] lg:mb-[40px]">
						Shopping Cart
					</h2>
					<CartDetails />
				</div>
				<section className="w-full lg:w-[40%]">
					<PaymentAndShipping />
				</section>
			</div>
		</main>
	);
};

export default CheckoutPage;
