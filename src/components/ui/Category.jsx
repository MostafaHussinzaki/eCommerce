import { Link } from "react-router-dom";

const Category = function ({ title, number, slug }) {
	return (
		<Link to={`/shop/${slug}`}>
			<div>
				<h2>{title}</h2>
				<p>5 items</p>
			</div>
		</Link>
	);
};

export default Category;
