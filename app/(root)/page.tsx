import MenuTransitionEffect from "@comp/common/MenuTransitionEffect";
import HomeBanner from "@comp/Home/HomeBanner";
import RandomProductGrid from "@comp/product/RandomProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "E-Vanto",
	description: "E-Vanto for product purchase",
};

export default async function Home() {
	const data = await fetch(`${process.env.DUMMY_JSON_URI}/products`).then(
		(res) => res.json()
	);

	return (
		<main className={``}>
			<MenuTransitionEffect />
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
