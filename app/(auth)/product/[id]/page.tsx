import ImageSlider from "@comp/common/ImageSlider";
import MenuTransitionEffect from "@comp/common/MenuTransitionEffect";
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
			<MenuTransitionEffect />
			<div className="flex flex-col lg:flex-row justify-center">
				<div className="w-full max-lg:max-w-[350px] max-lg:mx-auto lg:w-[50%] xl:w-[30%] relative block pb-[50px]">
					<ImageSlider
						imageList={data?.images}
						title={data?.title}
					/>
				</div>
				<div className="w-full lg:w-[50%] xl:w-[70%] lg:pl-[60px] max-lg:pb-[40px]">
					<ProductDetails data={data} />
				</div>
			</div>
		</main>
	);
};

export default ProductDetailsPage;
