import ProductItem from "./ui/ProductItem";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";
import { Link } from "react-router-dom";
import Spinner from "./ui/Spinner";

const BestSeller = function () {
	const [bestSeller, setBestSeller] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: "",
	});

	useEffect(() => {
		const loadData = async function () {
			setIsLoading(true);
			try {
				const res = await fetch(`${BASE_URL}/products?limit=15`);
				if (!res.ok) {
					setError({
						isError: true,
						message: "Error occured while loading this data, try again later ",
					});
				}
				const data = await res.json();

				setBestSeller([...data?.products]);
			} catch (error) {
				setError({
					isError: true,
					message: "Error occured  while loading this data, try again later",
				});
			} finally {
				setIsLoading(false);
			}
		};

		loadData();
	}, [setBestSeller, setError, setError]);
	return (
		<section className="container">
			<div className="best-seller container">
				<div className="best-seller__title">
					<h1>Today’s best deal</h1>
					<p>
						<Link to="/best-seller">See more...</Link>
					</p>
				</div>
				<div className="best-seller__items">
					{isLoading && <Spinner />}
					{error.isError && <p>{error.message}</p>}
					{!isLoading &&
						!error.isError &&
						bestSeller.map((product, i) => (
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
		</section>
	);
};

export default BestSeller;
