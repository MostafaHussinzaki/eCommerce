import ProductItem from "../components/ui/ProductItem";
import { BASE_URL } from "../utils/config";
import {
	useSearchParams,
	useParams,
	useLoaderData,
	NavLink,
} from "react-router-dom";

const Products = function () {
	const { products, total } = useLoaderData("products");
	const { category } = useParams();
	const pageNumbers = Math.round(total / 10);
	const [searchParams] = useSearchParams();
	let page = searchParams.get("page") || 0;

	if (page === 0) page = 1;
	const fromTo = {
		from: page === 1 ? page : page * 10 - 9,
		to: page * 10 > total ? total : page * 10,
	};

	return (
		<div>
			<h1>{category ? category : "Shop"}</h1>
			<div>
				<p>
					Showing {fromTo.from}–{fromTo.to} of {total} results
				</p>

				<p>Default Sorting</p>
			</div>
			<div className="products-container">
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
			{!category && (
				<div className="pagination">
					{Array(pageNumbers)
						.fill(1)
						.map((_, i) => (
							<NavLink
								to={`?page=${i + 1}`}
								key={i}
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								{i + 1}
							</NavLink>
						))}
				</div>
			)}
		</div>
	);
};

export default Products;

export const loader = async function ({ request, params }) {
	try {
		if (params.category) {
			const res = await fetch(
				`${BASE_URL}/products/category/${params.category}`
			);
			if (!res.ok) {
				throw new Error("Error occured, try again later");
			}
			const data = await res.json();
			return data;
		} else {
			const searchParams = new URL(request.url).searchParams;
			const page = searchParams.get("page") || 0;
			const res = await fetch(
				`${BASE_URL}/products?limit=10&skip=${(page - 1) * 10}`
			);
			if (!res.ok) {
				throw new Error("Error occured, try again later");
			}
			const data = await res.json();
			return data;
		}
	} catch (err) {
		throw new Error("Error occured, try again later");
	}
};
