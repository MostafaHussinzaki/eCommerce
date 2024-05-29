import arrowdown from "../../assets/arrowdown.png";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/slice/uiSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
	const rotationValue = isShowCategoryMenu ? 180 : 0;
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
						<motion.span
							onClick={handleToggleCategoryMenu}
							animate={{ rotate: rotationValue }}
						>
							<img src={arrowdown} alt="" />
						</motion.span>
					</div>
					<ul
						className="allProduct-category"
						style={{ display: isShowCategoryMenu ? "block" : "none" }}
					>
						{formatCategories.map((category) => (
							<li key={category.name} onClick={handleCloseMenu}>
								<Link to={`/shop/${category.slug}`}>&gt; {category.name}</Link>
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
