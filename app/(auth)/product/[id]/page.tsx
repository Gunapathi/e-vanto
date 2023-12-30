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
		<main>
			<div>main</div>
		</main>
	);
};

export default ProductDetailsPage;
