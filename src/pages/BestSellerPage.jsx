import { useLoaderData, useNavigation } from "react-router-dom";
import { BASE_URL } from "../utils/config";

import ProductItem from "../components/ui/ProductItem";
import Spinner from "../components/ui/Spinner";

const BestSellerPage = function () {
	const navigation = useNavigation();
	const { products } = useLoaderData();
	return (
		<div className="best-seller-page container">
			{navigation.state === "loading" && <Spinner />}

			<h1>Best Seller</h1>
			<div className="products container">
				{products.map((product, i) => (
					<ProductItem
						key={product.id}
						image={product.images[0]}
						rating={product.rating}
						name={product.title}
						price={product.price}
						discountPercent={product.discountPercentage}
						id={product.id}
					/>
				))}
			</div>
		</div>
	);
};

export default BestSellerPage;

export const loader = async () => {
	try {
		const res = await fetch(`${BASE_URL}/products?limit=20&skip=10`);
		if (!res.ok) {
			throw new Error(
				"Error happened while try to fetch tis data. try again later"
			);
		}
		const data = await res.json();
		return data;
	} catch (err) {
		throw new Error(
			"Error happened while try to fetch tis data. try again later"
		);
	}
};
