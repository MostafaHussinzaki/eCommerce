import { useSelector } from "react-redux";
import MainNav from "./mainNav";
import SmallNav from "./smallNav";

const NavigationWrapper = function () {
	const cart = useSelector((state) => state.cart);
	const itemNumbers = cart
		.map((product) => product.quantity)
		.reduce((acc, curr) => curr + acc, 0);

	return (
		<>
			<MainNav itemNumbers={itemNumbers} />
			<SmallNav itemNumbers={itemNumbers} />
		</>
	);
};

export default NavigationWrapper;
