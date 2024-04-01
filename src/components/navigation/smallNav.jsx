import menu from "../../assets/menu.png";
import Logo from "../../assets/logo.svg";
import shopCart from "../../assets/shopCart.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/slice/uiSlice";
import { Link } from "react-router-dom";

const smallNav = function ({ itemNumbers }) {
	const dispatch = useDispatch();

	const handleToggleMenu = () => {
		dispatch(uiActions.toggleMenu());
	};
	const openCart = () => {
		document.querySelector(".cart-modal").showModal();
	};
	return (
		<div className="small-size">
			<div>
				<img
					src={menu}
					alt=""
					className="toggleMenu"
					onClick={handleToggleMenu}
					style={{cursor: 'pointer'}}
				/>
				<Link to="/">
					<img src={Logo} alt="Logo" className="Logo" />
				</Link>
			</div>
			<h6 className="shopCart" onClick={openCart} style={{cursor: 'pointer'}}>
				<img src={shopCart} alt="shopping cart" />
				<p>{itemNumbers}</p>
			</h6>
		</div>
	);
};

export default smallNav;
