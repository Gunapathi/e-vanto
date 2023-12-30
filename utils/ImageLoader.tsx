import Image from "next/image";

const ImageLoader = ({
	src,
	sizes,
	unoptimized,
	priority,
	loading,
	className,
	quality,
	width,
	height,
	fill,
	style,
	placeholder,
	...all
}: any) => {
	return Image({
		src: src,
		sizes,
		unoptimized,
		priority,
		loading,
		className,
		quality,
		width,
		height,
		fill,
		style,
		placeholder,
		...all,
	});
};

export default ImageLoader;
