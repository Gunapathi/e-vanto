import HomeBanner from "@comp/home/HomeBanner";
import RandomProductGrid from "@comp/product/RandomProductGrid";
// import { getData } from "@utils/getData";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "E-Vanto",
	description: "E-Vanto for product purchase",
};

export default async function Home() {
	const data = await fetch(`${process.env.STATIC_URL}/api/products`).then(
		(res) => res.json()
	);

	return (
		<main className={``}>
			<HomeBanner />
			<div className="pt-8">
				<RandomProductGrid
					postList={data?.products
						?.sort(() => Math.random() - 0.5)
						.slice(0, 4)}
				/>
			</div>
		</main>
	);
}
