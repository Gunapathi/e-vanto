"use client";

import React, { useState, useEffect } from "react";
import Styles from "./productFilter.module.scss";
import ImageLoader from "@utils/ImageLoader";
import ProductItem from "../ProductItem";
import useOnResize from "@utils/hooks/useOnResize";

interface IProps {
	data: any;
}

function ProductFilter(props: IProps) {
	const extractCategories = (productsData: any, category: any) => {
		return Array.from(
			new Set(productsData.map((product: any) => product[category]))
		);
	};

	const initialProductList: any = props?.data?.products;
	const categories: any = extractCategories(initialProductList, "category");

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [selectedMinRating, setSelectedMinRating] = useState<number>(1);
	const [filteredProducts, setFilteredProducts] =
		useState<any>(initialProductList);

	const [searchQuery, setSearchQuery] = useState<any>();
	const [openMobileFilter, setOpenMobileFilter] = useState(false);

	const { width: isResize } = useOnResize();

	useEffect(() => {
		window.screen.width > 640 && setOpenMobileFilter(false);
	}, [isResize]);

	const filterProducts = (
		selectedCategories: string[],
		selectedBrands: string[],
		selectedMinRating: number
	) => {
		let filteredProductsList: any = filteredProducts;
		// Filter based on selected categories
		if (selectedCategories && selectedCategories.length > 0) {
			filteredProductsList = filteredProductsList.filter((product: any) =>
				selectedCategories.includes(product.category)
			);
		}
		// Filter based on selected brands
		if (selectedBrands && selectedBrands.length > 0) {
			filteredProductsList = filteredProductsList.filter((product: any) =>
				selectedBrands.includes(product.brand)
			);
		}
		// Filter based on selected minimum rating
		if (
			selectedMinRating &&
			selectedMinRating > 0 &&
			selectedMinRating <= 5
		) {
			filteredProductsList = filteredProductsList.filter(
				(product: any) => product.rating >= selectedMinRating
			);
		}

		return filteredProductsList;
	};

	// Function to filter brands based on the selected categories
	const getBrandsForCategories = (categories: string[]): string[] => {
		const brandsForCategories = initialProductList
			.filter((product: any) => categories.includes(product.category))
			.map((product: any) => product.brand);

		return Array.from(new Set(brandsForCategories));
	};

	const handleCategoryChange = (category: string) => {
		const updatedCategories = [...selectedCategories];
		const index = updatedCategories.indexOf(category);

		if (index === -1) {
			updatedCategories.push(category);
		} else {
			updatedCategories.splice(index, 1);
		}

		setSelectedCategories(updatedCategories);

		// Only perform filtering if categories are selected
		if (updatedCategories.length > 0) {
			setSelectedBrands(getBrandsForCategories(updatedCategories));
		} else {
			setSelectedBrands([]); // Clear selected brands if no categories are selected
		}
	};

	const brands: string[] = getBrandsForCategories(selectedCategories);

	const handleBrandChange = (brand: any) => {
		const updatedBrands = [...selectedBrands];
		const index = updatedBrands.indexOf(brand);

		if (index === -1) {
			updatedBrands.push(brand);
		} else {
			updatedBrands.splice(index, 1);
		}

		setSelectedBrands(updatedBrands);
	};

	const handleRatingChange = (rating: any) => {
		setSelectedMinRating(rating);
	};

	const filteredProductsAll = filterProducts(
		selectedCategories,
		selectedBrands,
		selectedMinRating
	);

	// Filter products based on search query
	const filterProductsBySearch = (query: string): any => {
		const filteredProducts = initialProductList.filter(
			(product: any) =>
				product.title.toLowerCase().includes(query.toLowerCase()) ||
				product.brand.toLowerCase().includes(query.toLowerCase())
		);
		return filteredProducts;
	};

	// Update filtered products and categories on search query change
	useEffect(() => {
		if (searchQuery) {
			const filteredProducts = filterProductsBySearch(searchQuery);
			setFilteredProducts(filteredProducts);

			const updatedCategories: any = Array.from(
				new Set(
					filteredProducts.map((product: any) => product.category)
				)
			);
			const updatedBrands: any = Array.from(
				new Set(filteredProducts.map((product: any) => product.brand))
			);

			setSelectedCategories(updatedCategories);
			setSelectedBrands(updatedBrands);
		} else {
			setSelectedCategories([]);
			setSelectedBrands([]);
			setSelectedMinRating(1);
		}
	}, [searchQuery]);

	console.log("filteredProducts", filteredProductsAll);

	return (
		<section className="pt-[20px]">
			<div className="flex flex-wrap items-start">
				<div
					className={`px-[15px] shrink-0 max-md:pt-[20px] py-[30px] fixed w-[88%] md:w-[200px] max-md:bg-slate-100 z-[5] md:z-[-1] ${
						openMobileFilter ? "left-0" : "max-md:!-left-full"
					} lg:w-[250px] top-[60px] md:top-[90px] h-[calc(100vh_-_60px)] md:h-[calc(100vh_-_90px)] overflow-hidden md:pr-[15px] border-r-[2px] border-solid border-primaryRed transition-all duration-300 ease-in-out`}>
					<div className="h-full overflow-y-auto pb-[15px] scrollbar-hide relative">
						<span
							className="md:hidden z-[10] absolute top-0 right-0 text-[15px] font-bold text-dark leading-[1.2] uppercase"
							onClick={() => setOpenMobileFilter(false)}>
							close
						</span>

						<div className="mb-[10px]">
							<h3 className={`${Styles["filter-heading"]}`}>
								Categories
							</h3>
							<div className="flex flex-col px-[10px]">
								{categories.map((category: any) => (
									<div
										className={`${Styles["filter-item"]} inline-block`}
										key={category}>
										<input
											type="checkbox"
											id={category}
											name={category}
											checked={selectedCategories.includes(
												category
											)}
											onChange={() =>
												handleCategoryChange(category)
											}
										/>
										<label htmlFor={category}>
											{category}
										</label>
									</div>
								))}
							</div>
						</div>

						<div className="mb-[10px]">
							<h3 className={`${Styles["filter-heading"]}`}>
								Ratings
							</h3>
							<div className="flex flex-col px-[10px]">
								{[...Array(5)].map((_, index) => (
									<div
										key={index}
										className={`${Styles["filter-item"]} inline-block`}>
										<div className="cursor-pointer inline-block">
											<input
												type="radio"
												id={`${index + 1}`}
												name="rating"
												value={index + 1}
												checked={
													selectedMinRating ===
													index + 1
												}
												onChange={() =>
													handleRatingChange(
														index + 1
													)
												}
											/>
											<label htmlFor={`${index + 1}`}>
												{index + 1}
											</label>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mb-[10px]">
							<h3 className={`${Styles["filter-heading"]}`}>
								Brands
							</h3>
							<div className="flex flex-col px-[10px]">
								{brands.length > 0 ? (
									brands.map((brand: any) => (
										<div
											key={brand}
											className={`${Styles["filter-item"]} inline-block`}>
											<div className="cursor-pointer inline-block">
												<input
													type="checkbox"
													id={brand}
													name={brand}
													checked={selectedBrands.includes(
														brand
													)}
													onChange={() =>
														handleBrandChange(brand)
													}
												/>
												<label htmlFor={brand}>
													{brand}
												</label>
											</div>
										</div>
									))
								) : (
									<p>Please select Category</p>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="w-full md:ml-[210px] lg:ml-[250px] md:w-[calc(100%_-_200px)] lg:w-[calc(100%_-_250px)] md:pl-[15px]">
					<div className="flex mb-[15px]">
						<div className="flex p-2 w-full md:max-w-[250px] rounded-full bg-slate-200 cursor-pointer">
							<ImageLoader
								src={"/images/svg/magnifier.svg"}
								width={20}
								height={20}
								className="max-w-[20px]"
								alt={"search"}
							/>
							<input
								type="text"
								placeholder="Search products..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="bg-transparent ml-[10px] outline-none w-full"
							/>
						</div>
						<span
							className="md:hidden shrink-0 rounded-lg p-[10px] bg-slate-200 ml-[10px]"
							onClick={() => setOpenMobileFilter(true)}>
							Open Filter
						</span>
					</div>
					<h2 className="text-[24px] leading-[1.2] sm:text-[36px] lg:text-[40px] text-[#000] xl:leading-[50px] font-bold capitalize mb-[15px] md:mb-[20px]">
						Filter Result
					</h2>
					<div className="flex flex-wrap">
						{filteredProductsAll.map((item: any) => (
							<ProductItem
								key={item.id}
								classname={`w-full md:w-[calc(100%_/_2)] lg:w-[calc(100%_/_3)] xl:w-[calc(100%_/_4)]`}
								data={item}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductFilter;
