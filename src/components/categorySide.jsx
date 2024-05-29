import { useRouteLoaderData, NavLink } from "react-router-dom";

const CategorySide = function () {
	const categories = useRouteLoaderData("headerData");
	return (
		<aside className="category-side">
			<h1>Categories</h1>
			<ul>
				{categories.map((category) => (
					<li to={category.slug} key={category.name}>
						<NavLink
							to={category.slug}
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							{category.name}
						</NavLink>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default CategorySide;
