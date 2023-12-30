import Footer from "@comp/Footer";
import Header from "@comp/Header";
import { Mulish } from "next/font/google";
import "~scss/style.scss";

const mulish = Mulish({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-mulish",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={``}>
			<body className={`${mulish.variable} pt-[60px] md:pt-[90px]`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
