import {
	useNavigate,
	useSearchParams,
	useLoaderData,
	useNavigation,
} from "react-router-dom";
import SearchProductItem from "../components/ui/SearchProductItem";
import { BASE_URL } from "../utils/config";
import Spinner from "../components/ui/Spinner";

const SearchPage = function () {
	const { products } = useLoaderData();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const navigation = useNavigation();

	const query = searchParams.get("q");

	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		const queryLocal = fd.get("searchQuery");
		navigate(`/search?q=${queryLocal}`);
	};

	return (
		<section className="search-page container">
			<div className="search-page__items">
				{navigation.state === "loading" && <Spinner />}
				{products.length === 0 && (
					<div className="search-page__items__error">
						<h1 className="">Search Resault for: {query}</h1>
						<p className="">
							Sorry, but nothing matched your search terms. Please try again
							with some different keywords.
						</p>
						<form onSubmit={handleSubmit} method="get">
							<input
								type="text"
								placeholder={query}
								required
								name="searchQuery"
							/>
							<button type="submit">Search</button>
						</form>
					</div>
				)}
				{navigation.state !== "loading" &&
					products.length > 0 &&
					products.map((product) => (
						<SearchProductItem
							image={product.images[0]}
							name={product.title}
							key={product.id}
							id={product.id}
						/>
					))}
			</div>
			<div className="search-page__actions">
				<form onSubmit={handleSubmit} method="get">
					<input type="text" placeholder={query} required name="searchQuery" />
					<button type="submit">Search</button>
				</form>

				<h2>Recent Posts</h2>
				<h2>Recent Comments</h2>
				<h2>Archives</h2>
				<h2>Categories</h2>
			</div>
		</section>
	);
};

export default SearchPage;

export const loader = async function ({ request }) {
	try {
		const searchParams = new URL(request.url).searchParams;
		const searchQuery = searchParams.get("q");

		const res = await fetch(`${BASE_URL}/products/search?q=${searchQuery}`);
		if (!res.ok) {
			throw new Error(
				"Error happened while try to search for this data. try again later"
			);
		}
		const data = await res.json();
		return data;
	} catch (err) {
		throw new Error(
			"Error happened while try to search for this data. try again later"
		);
	}
};
