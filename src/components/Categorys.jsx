import { useRouteLoaderData } from "react-router-dom";
import Category from "./ui/Category";

const Categorys = function () {
	const categories = useRouteLoaderData("headerData");
	return (
		<>
			<section className="category container" id="category-section">
				<h1>Categories</h1>
				<div>
					{categories.map((category) => (
						<Category title={category} key={category} />
					))}
				</div>
			</section>
		</>
	);
};

export default Categorys;
