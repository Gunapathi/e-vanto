import { SectionLayoutParams } from "@lib/types";

const SectionLayout = ({ children, className }: SectionLayoutParams) => {
	return (
		<section
			className={`w-[88%] max-w-[1300px] mx-auto relative block ${className ? className : ""}`}>
			{children}
		</section>
	);
};

export default SectionLayout;
