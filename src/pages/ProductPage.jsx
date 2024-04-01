import ProductDetail from "../components/ui/ProductDetail";
import MoreAboutProduct from "../components/ui/MoreAboutProduct";
import ProductReview from "../components/ui/ProductReview";
import { useState } from "react";
import { BASE_URL } from "../utils/config";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

const ProductPage = function () {
	const [productContent, setProductContent] = useState("MoreAboutProduct");
	const product = useLoaderData();
	const navigation = useNavigation();

	return (
		<section className="product-page container">
			{navigation.state === "loading" && <Spinner />}
			<ProductDetail
				name={product.title}
				category={product.category}
				price={product.price}
				discountPercent={product.discountPercentage}
				images={product.images}
				description={product.description}
				brand={product.brand}
				id={product.id}
			/>
			<div className="product-page__more">
				<div className="product-page__more__nav">
					<button
						className={productContent === "MoreAboutProduct" ? "active" : ""}
						onClick={() => setProductContent("MoreAboutProduct")}
					>
						Description
					</button>
					<button
						className={productContent === "ProductReview" ? "active" : ""}
						onClick={() => setProductContent("ProductReview")}
					>
						Review
					</button>
				</div>
				{productContent === "MoreAboutProduct" && (
					<MoreAboutProduct name={product.title} />
				)}
				{productContent === "ProductReview" && (
					<ProductReview name={product.title} />
				)}
			</div>
		</section>
	);
};

export default ProductPage;

export const loader = async function ({ request, params }) {
	try {
		const productId = params.productId;
		const res = await fetch(`${BASE_URL}/products/${productId}`);
		if (!res.ok) {
			throw new Error("error from product Detail");
		}
		const data = await res.json();
		return data;
	} catch (err) {
		throw new Error("error from product Detail");
	}
};
