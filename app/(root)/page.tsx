import { getData } from "@utils/getData";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "E-Vanto",
	description: "E-Vanto for product purchase",
};

export default async function Home() {
	const data = await getData();

	return (
		<main className={`w-[88%] max-w-[1300px] mx-auto`}>
			This is home page
			<Link href={"/"} className="relative block h-[700px]">Hello</Link>
		</main>
	);
}
