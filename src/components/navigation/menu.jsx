import arrowdown from "../../assets/arrowdown.png";
import shopCart from "../../assets/shopCart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const menu = function ({ categories, maxCategory }) {
	const cart = useSelector((state) => state.cart);
	const itemNumbers = cart
		.map((product) => product.quantity)
		.reduce((acc, curr) => curr + acc, 0);

	const formatCategories = categories.slice(1, 7);
	const isMore = categories.length > maxCategory;

	const openCart = function () {
		document.querySelector(".cart-modal").showModal();
	};

	return (
		<nav className="menu">
			<ul className="navigation">
				<li className="allProduct">
					<Link to="/shop">All products</Link>
					<span>
						<img src={arrowdown} alt="" />
					</span>
					<ul className="allProduct-category allProduct-category1">
						{formatCategories.map((category) => (
							<li key={category.name}>
								<Link to={`/shop/${category.slug}`}>{category.name}</Link>
							</li>
						))}
						{isMore && (
							<li style={{ textDecoration: "underline" }}>
								<a href="/#category-section">more...</a>
							</li>
						)}
					</ul>
				</li>
				<li>
					<Link to="/best-seller">Best Seller</Link>
				</li>
				<li>
					<Link to="/search">Search</Link>
				</li>
				<li>
					<Link to="/contact-us">Contact us</Link>
				</li>
				<li>Gift Card</li>
				<li>Shipping & Return</li>
				<li>Track Order</li>
			</ul>
			<ul className="action">
				<li
					className="shopCart"
					onClick={openCart}
					style={{ cursor: "pointer" }}
				>
					<img src={shopCart} alt="Cart" />
					<p>{itemNumbers}</p>
				</li>
				<li>Login</li>
			</ul>
		</nav>
	);
};

export default menu;
