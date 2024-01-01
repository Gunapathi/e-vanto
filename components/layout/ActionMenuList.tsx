import NavItems from "./NavItem";

const ActionMenuList = () => {
	return (
		<div className="inline-flex items-center justify-center">
			<NavItems
				href={"/checkout"}
				title={`Checkout`}
			/>
			<NavItems
				href={"/login"}
				title={`Login`}
			/>
		</div>
	);
};

export default ActionMenuList;
