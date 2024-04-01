import { useRouteLoaderData, NavLink } from "react-router-dom";

const CategorySide = function () {
	const categories = useRouteLoaderData("headerData");
	return (
		<aside className="category-side">
			<h1>Categories</h1>
			<ul>
				{categories.map((category) => (
					<li to={category} key={category}>
						<NavLink
							to={category}
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							{category}
						</NavLink>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default CategorySide;
