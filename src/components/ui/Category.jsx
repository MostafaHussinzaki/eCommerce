import { Link } from "react-router-dom";

const Category = function ({ title, number }) {
	return (
		<Link to={`/shop/${title}`}>
			<div>
				<h2>{title}</h2>
				<p>5 items</p>
			</div>
		</Link>
	);
};

export default Category;
