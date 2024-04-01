import { Link } from "react-router-dom";

const SearchProductItem = function ({ image, name, id }) {
	return (
		<Link className="search-page--item" to={`/products/${id}`}>
			<img src={image} alt="item image" />
			<div>
				<h2>{name}</h2>
				<div>
					<h3>Key features</h3>
					<ul>
						<li>Newest technology</li>
						<li>Best in class components</li>
						<li>Dimensions -69.5 x 75.0 x 169.0</li>
						<li>12 years warranty</li>
					</ul>
				</div>
			</div>
		</Link>
	);
};

export default SearchProductItem;
