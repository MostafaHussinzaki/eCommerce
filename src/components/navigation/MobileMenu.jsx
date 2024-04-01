import arrowdown from "../../assets/arrowdown.png";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/slice/uiSlice";
import { Link } from "react-router-dom";

const MobileMenu = function ({ categories, maxCategory }) {
	const dispatch = useDispatch();
	const isShowMenu = useSelector((state) => state.ui.menu);
	const isShowCategoryMenu = useSelector((state) => state.ui.categoryMenu);

	const handleCloseMenu = () => {
		// take care
		dispatch(uiActions.toggleCategoryMenu());
		dispatch(uiActions.toggleMenu());
	};
	const handleToggleCategoryMenu = () => {
		dispatch(uiActions.toggleCategoryMenu());
	};

	const toggleMenu = () => {
		dispatch(uiActions.toggleMenu());
	};

	const formatCategories = categories.slice(1, 7);
	const isMore = categories.length > maxCategory;

	return (
		<nav
			className="menuMobile"
			style={{ transform: isShowMenu ? "translatey(0%)" : "translatey(-100%)" }}
		>
			<ul>
				<li className="allProduct">
					<div>
						<Link to={"shop"} onClick={toggleMenu}>
							All products
						</Link>
						<span onClick={handleToggleCategoryMenu}>
							<img src={arrowdown} alt="" />
						</span>
					</div>
					<ul
						className="allProduct-category"
						style={{ display: isShowCategoryMenu ? "block" : "none" }}
					>
						{formatCategories.map((category) => (
							<li key={category} onClick={handleCloseMenu}>
								<Link to={`/shop/${category}`}>&gt; {category}</Link>
							</li>
						))}
						{isMore && (
							<li
								style={{ textDecoration: "underline" }}
								onClick={handleCloseMenu}
							>
								<a href="#category-section">&gt; more...</a>
							</li>
						)}
					</ul>
				</li>
				<li onClick={toggleMenu}>
					<Link to="/best-seller">Best Seller</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link to="/search">Search</Link>
				</li>
				<li>
					<Link to="/contact-us" onClick={toggleMenu}>
						Contact us
					</Link>
				</li>
				<li>Gift Card</li>
				<li>Shipping & Return</li>
				<li>Track Order</li>
			</ul>
		</nav>
	);
};

export default MobileMenu;
