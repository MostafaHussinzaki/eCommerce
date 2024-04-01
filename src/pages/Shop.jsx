import CategorySide from "../components/categorySide";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

const Shop = function () {
	const navigation = useNavigation();
	return (
		<>
			{navigation.state === "loading" && <Spinner />}
			<main className="shop container">
				<CategorySide />
				<Outlet />
			</main>
		</>
	);
};

export default Shop;
