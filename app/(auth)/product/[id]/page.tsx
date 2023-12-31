import ImageSlider from "@comp/common/ImageSlider";
import ProductDetails from "@comp/product/ProductDetails";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const data = await fetch(
		`${process.env.DUMMY_JSON_URI}/products/${params.id}`
	).then((res) => res.json());

	return {
		title: data.title,
		description: data.description,
		keyword: data.category,
	};
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
	const data = await fetch(
		`${process.env.DUMMY_JSON_URI}/products/${params.id}`
	).then((res) => res.json());

	return (
		<main className="w-[88%] max-w-[1300px] mx-auto pt-[30px]">
			<div className="flex flex-col lg:flex-row justify-center">
				<div className="w-full md:w-[50%] lg:w-[30%] relative block pb-[50px]">
					<ImageSlider
						imageList={data?.images}
						title={data?.title}
					/>
				</div>
				<div className="w-full md:w-[50%] lg:w-[70%] pl-[60px]">
					<ProductDetails data={data} />
				</div>
			</div>
		</main>
	);
};

export default ProductDetailsPage;
