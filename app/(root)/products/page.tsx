import MenuTransitionEffect from "@comp/common/MenuTransitionEffect";
import ProductFilter from "@comp/product/ProductFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Categories | E-Vanto",
	description: "E-Vanto for product purchase",
};

const ProductsPage = async () => {
	const data = await fetch(`${process.env.STATIC_URL}/api/products`).then(
		(res) => res.json()
	);
	return (
        <div className="max-md:px-[15px]">
            <MenuTransitionEffect />
			<ProductFilter data={data} />
		</div>
	);
};

export default ProductsPage;
