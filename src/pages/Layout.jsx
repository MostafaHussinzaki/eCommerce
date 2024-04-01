import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ScrollToTop from "../components/ScrollToTop";

const Layout = function () {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Cart />
			<ScrollToTop />
		</>
	);
};

export default Layout;
