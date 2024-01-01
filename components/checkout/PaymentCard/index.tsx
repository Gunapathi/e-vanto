"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	updateCartTotal,
	updateShippingAddress,
} from "@lib/store/slices/cartSlice";
import Styles from "./paymentCard.module.scss";
import HandleError from "@comp/common/HandleError";

interface CardDetails {
	cardNumber: string;
	validThru: string;
	cardName: string;
	cvv: string;
}

interface ShippingDetails {
	fullName: string;
	address: string;
	zipcode: string;
	city: string;
	country: string;
	phoneNumber: string;
	shippingMethod: string;
}

const PaymentAndShipping = () => {
	const [cardDetails, setCardDetails] = useState<CardDetails>({
		cardNumber: "1111111111111111",
		validThru: "1111",
		cardName: "test",
		cvv: "123",
	});

	const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
		fullName: "test name",
		address: "test address",
		zipcode: "111111",
		city: "test city",
		country: "test country",
		phoneNumber: "0123456789",
		shippingMethod: "free",
	});

	const cartTotal = useSelector((state: any) => state.cart.totalCartValue);
	const dispatch = useDispatch();

	const [shippingFee, setShippingFee] = useState<any>(0);
	const [orderTotal, setOrderTotal] = useState(cartTotal);

	useEffect(() => {
		setOrderTotal(cartTotal);
	}, [cartTotal]);

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = e.target;
		value = value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
		value = value.substring(0, 19);

		setCardDetails({ ...cardDetails, cardNumber: value });
	};

	const handleValidThruChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = e.target;
		value = value.replace(/\D/g, "").replace(/(\d{2})(?=\d{2})/g, "$1/");
		value = value.substring(0, 5);

		setCardDetails({ ...cardDetails, validThru: value });
	};

	const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.target;
		const maxLength = name === "cvv" ? 3 : Infinity;

		value = value.substring(0, maxLength);

		setCardDetails({ ...cardDetails, [name]: value });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const maxLength =
			name === "zipcode" ? 6 : name === "phoneNumber" ? 10 : Infinity;

		const formattedValue =
			name === "zipcode" || name === "phoneNumber"
				? value.replace(/\D/g, "").substring(0, maxLength)
				: value;

		if (name === "cardName") {
			setCardDetails({ ...cardDetails, cardName: formattedValue });
		} else {
			setShippingDetails({ ...shippingDetails, [name]: formattedValue });
		}
	};

	const handleShippingMethodChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = e.target;
		setShippingDetails({ ...shippingDetails, shippingMethod: value });
		if (value === "free") {
			setShippingFee(0);
			setOrderTotal(cartTotal);
			dispatch(updateCartTotal({ cartTotal: orderTotal }));
		}
		if (value === "express") {
			setShippingFee(12);
			setOrderTotal(cartTotal + 12);
			dispatch(updateCartTotal({ cartTotal: orderTotal }));
		}
	};

	const [orderDetails, setOrderDetails] = useState<any>({});
	const products = useSelector((state: any) => state.cart.products);

	useEffect(() => {
		console.log(orderDetails);
	}, [orderDetails]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (orderTotal > 0) {
			dispatch(updateShippingAddress({ ...shippingDetails }));
			setOrderDetails(() => ({
				orderTotal: orderTotal,
				cartItems: products,
				shippingDetails: shippingDetails,
			}));
			setHandleError(true);
			setErrorMsg("Order Placed!!! Verify on console");
			setHandleType("success");
		} else {
			setHandleError(true);
			setErrorMsg("Error placing order! Check cart and order details");
			setHandleType("error");
		}
	};

	const [handleError, setHandleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [handleType, setHandleType] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setHandleError(false);
		}, 3000);
	}, [handleError]);

	return (
		<form onSubmit={handleSubmit}>
			{handleError && (
				<HandleError
					message={errorMsg}
					setHandleError={setHandleError}
					type={handleType}
				/>
			)}
			<div
				className={`${Styles["card-wrapper"]} max-w-[500px] mx-auto ${Styles["payment-card"]} bg-paymentCardBg px-[30px] py-[15px] rounded-[10px] shadow-lg block mb-[40px] last:mb-0`}>
				<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#fff] xl:leading-[50px] font-bold capitalize mb-[15px]">
					Payment
				</h2>
				<div className="flex mb-[10px]">
					<div className="w-full max-w-[180px] mr-[20px]">
						<p className={`${Styles["card-label"]}`}>Card Number</p>
						<input
							type="text"
							name="cardNumber"
							value={cardDetails.cardNumber}
							onChange={handleCardNumberChange}
							placeholder="card number"
							className={`${Styles["card-input"]}`}
						/>
					</div>
					<div className="max-w-[80px]">
						<p className={`${Styles["card-label"]}`}>Valid Thru</p>
						<input
							type="text"
							name="validThru"
							value={cardDetails.validThru}
							onChange={handleValidThruChange}
							placeholder="MM/YY"
							className={`${Styles["card-input"]}`}
						/>
					</div>
				</div>
				<div className="flex flex-col mb-[10px] max-w-[180px] ml-0 mr-auto">
					<p className={`${Styles["card-label"]}`}>Name</p>
					<input
						type="text"
						name="cardName"
						value={cardDetails.cardName}
						onChange={handleInputChange}
						placeholder="Name on Card"
						className={`${Styles["card-input"]}`}
					/>
				</div>
				<div className="flex flex-col mb-[10px] max-w-[80px] ml-0 mr-auto">
					<p className={`${Styles["card-label"]}`}>CVV</p>
					<input
						type="text"
						name="cvv"
						value={cardDetails.cvv}
						onChange={handleCvvChange}
						placeholder="CVV"
						className={`${Styles["card-input"]}`}
					/>
				</div>
			</div>
			<div
				className={`${Styles["card-wrapper"]} max-w-[500px] mx-auto ${Styles["shipping-card"]} bg-paymentCardBg px-[30px] py-[15px] rounded-[10px] shadow-lg block mb-[40px] last:mb-0`}>
				<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#fff] xl:leading-[50px] font-bold capitalize mb-[15px]">
					Shipping
				</h2>
				<div className="flex flex-col mb-[10px] max-w-[160px] ml-0 mr-auto">
					<p className={`${Styles["card-label"]}`}>Full Name</p>
					<input
						className={`${Styles["card-input"]}`}
						type="text"
						name="fullName"
						value={shippingDetails.fullName}
						onChange={handleInputChange}
						placeholder="full name"
					/>
				</div>
				<div className="flex flex-col sm:flex-row mb-[10px]">
					<div className="flex flex-col mb-[10px] sm:mb-0 sm:mr-[20px] last:mr-0 max-w-[200px]">
						<p className={`${Styles["card-label"]}`}>Address</p>
						<input
							className={`${Styles["card-input"]}`}
							type="text"
							name="address"
							value={shippingDetails.address}
							onChange={handleInputChange}
						/>
					</div>
					<div className="flex flex-col mr-[20px] last:mr-0 max-w-[150px]">
						<p className={`${Styles["card-label"]}`}>
							Phone Number
						</p>
						<input
							className={`${Styles["card-input"]}`}
							type="text"
							name="phoneNumber"
							value={shippingDetails.phoneNumber}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="flex mb-[10px]">
					<div className="flex flex-col mr-[20px] last:mr-0 max-w-[100px]">
						<p className={`${Styles["card-label"]}`}>zipcode</p>
						<input
							className={`${Styles["card-input"]}`}
							type="text"
							name="zipcode"
							value={shippingDetails.zipcode}
							onChange={handleInputChange}
						/>
					</div>
					<div className="flex flex-col mr-[20px] last:mr-0 max-w-[150px]">
						<p className={`${Styles["card-label"]}`}>City</p>
						<input
							className={`${Styles["card-input"]}`}
							type="text"
							name="city"
							value={shippingDetails.city}
							onChange={handleInputChange}
						/>
					</div>
					<div className="flex flex-col mr-[20px] last:mr-0 max-w-[150px]">
						<p className={`${Styles["card-label"]}`}>Country</p>
						<input
							className={`${Styles["card-input"]}`}
							type="text"
							name="country"
							value={shippingDetails.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div>
					<p
						className={`text-[20px] font-bold leading-[1.2] text-[#fff] mt-[20px] mb-[15px]`}>
						Sipping Method
					</p>
					<div className="flex flex-row mb-[10px] last:mb-0">
						<input
							type="radio"
							name="shippingMethod"
							value="free"
							checked={shippingDetails.shippingMethod === "free"}
							onChange={handleShippingMethodChange}
							className="mr-[5px] relative top-[-2px]"
						/>
						<p className={`${Styles["card-label"]}`}>
							Free Shipping (2-3 working days): Free
						</p>
					</div>
					<div className="flex flex-row mb-[10px] last:mb-0">
						<input
							type="radio"
							name="shippingMethod"
							value="express"
							checked={
								shippingDetails.shippingMethod === "express"
							}
							onChange={handleShippingMethodChange}
							className="mr-[5px] relative top-[-2px]"
						/>
						<p className={`${Styles["card-label"]}`}>
							Express Shipping(up to 24h): $12
						</p>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 mr-0 ml-auto border-y-[2px] border-dotted border-[#000] py-[15px]">
				<div className="flex items-center justify-between opacity-50 text-[16px] lg:text-[18px] font-medium leading-[1.2] mb-[5px] last:mb-0">
					<span className="w-1/2">Shipping</span>
					<span className="w-1/2 text-right">${shippingFee}</span>
				</div>
				<div className="flex items-center justify-between text-[22px] lg:text-[24px] font-bold leading-[1.2] mb-[5px] last:mb-0">
					<span className="w-1/2">Total</span>
					<span className="w-1/2 text-right">${orderTotal}</span>
				</div>
			</div>
			<div className="text-right">
				<button
					className="bg-shippingCardBg mt-[30px] ml-0 mr-auto text-[16px] leading-[1.2] font-medium px-[15px] py-[10px] rounded-md text-[#fff]"
					type="submit">
					Order and Pay
				</button>
			</div>
		</form>
	);
};

export default PaymentAndShipping;
