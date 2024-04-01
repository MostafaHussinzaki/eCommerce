import Menu from "./navigation/menu";
import NavigationWrapper from "./navigation/NavigationWrapper";
import MobileMenu from "./navigation/MobileMenu";
import { useLoaderData } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const Header = function () {
	const categories = useLoaderData();
	const MAXIMUM = 7;
	return (
		<>
			<header className="container header">
				<NavigationWrapper />
				<Menu categories={categories} maxCategory={MAXIMUM} />
			</header>
			<MobileMenu categories={categories} maxCategory={MAXIMUM} />
		</>
	);
};

export default Header;

export const loader = async function () {
	try {
		const res = await fetch(`${BASE_URL}/products/categories`);

		if (!res.ok) {
			throw new Error(
				"Error occured, try again later"
			);
		}
		const data = await res.json();

		return data;
	} catch (err) {
		throw new Error("Error occured, try again later");
	}
};
