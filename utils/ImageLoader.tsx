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
	return (
		<Image
			src={src}
			sizes={sizes}
			unoptimized={unoptimized}
			priority={priority}
			loading={loading}
			className={className}
			quality={quality}
			width={width}
			height={height}
			style={style}
			placeholder={placeholder}
			{...all}
		/>
	);
};

export default ImageLoader;
