import ImageLoader from "@utils/ImageLoader";

const SearchItem = () => {
	return (
		<div className="inline-flex items-center justify-center relative h-[40px] bg-light rounded-xl px-3 py-1 cursor-pointer">
			<div className="max-w-[20px] mr-2">
				<ImageLoader
					src={"/images/svg/magnifier.svg"}
					width={20}
					height={20}
					className="max-w-[24px]"
					alt={'search'}
				/>
			</div>
			<input
				type="text"
				className={`bg-transparent outline-none`}
				placeholder="Search..."
			/>
		</div>
	);
};

export default SearchItem;
