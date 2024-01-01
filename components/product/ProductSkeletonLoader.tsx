const ProductSkeletonLoader = ({ classname }: any) => {
	return (
		<div
			className={`w-full mb-[40px] sm:w-[calc((100%_/_2)_-_15px)] sm:m-[0_30px_40px_0] md:w-[calc((100%_/_3)_-_15px)] md:m-[0_22px_40px_0] lg:w-[calc((100%_/_3)_-_26px)] lg:m-[0_39px_60px_0] ${
				classname ? classname : ""
			}`}>
			<div className={`mb-[15px] lg:mb-[20px] relative pt-[59.5%]`}>
				<span
					className={
						"object-cover absolute inset-0 w-full h-full skeleton-loader"
					}
				/>
			</div>
			<div className={`flex items-center justify-items-start flex-wrap`}>
				<span
					className={`block px-[40px] py-[5px] relative rounded-[3px] mr-[10px] mb-[15px] skeleton-loader`}
				/>
				<span
					className={`block px-[40px] py-[5px] relative rounded-[3px] mr-[10px] mb-[15px] skeleton-loader`}
				/>
			</div>
			<p
				className={`mb-[15px] w-[88%] md:max-w-[300px] py-[12px] relative rounded-[3px] skeleton-loader`}
			/>
			<p
				className={`text-[16px] leading-[26px] text-[#212529] line-clamp-3 mb-[5px]`}>
				<span
					className={`w-full block relative rounded-[3px] py-[8px] mb-[10px] skeleton-loader`}
				/>
				<span
					className={`w-1/2 block relative rounded-[3px] py-[8px] mb-[10px] skeleton-loader`}
				/>
			</p>
			<div className={`flex items-center flex-wrap`}>
				<span
					className={`block px-[40px] py-[12px] relative rounded-[3px] mr-[10px] last:mr-0 mb-[15px] skeleton-loader`}
				/>
				<span
					className={`block px-[40px] py-[12px] relative rounded-[3px] mr-[10px] last:mr-0 mb-[15px] skeleton-loader max-w-[100px] w-full`}
				/>
				<span
					className={`block px-[40px] py-[12px] relative rounded-[3px] mr-[10px] last:mr-0 mb-[15px] skeleton-loader`}
				/>
			</div>
		</div>
	);
};

export default ProductSkeletonLoader;
