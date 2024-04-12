import { useEffect } from "react";
import CartItem from "./ui/CartItem";
import { createPortal } from "react-dom";
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { priceFormatter } from "../utils/helper";

const Cart = function () {
	const cart = useSelector((state) => state.cart);
	const totalPrice = priceFormatter(
		cart.reduce((acc, curr) => acc + +curr.price * +curr.quantity, 0)
	);

	const onClose = () => {
		document.querySelector(".cart-modal").close();
	};
	useEffect(() => {
		const dialog = document.querySelector(".cart-modal");
		const eventFunction = (event) => {
			if (event.target === dialog) {
				dialog.close();
			}
		};
		dialog.addEventListener("click", eventFunction);

		return removeEventListener("click", eventFunction);
	}, []);

	return createPortal(
		<dialog className="cart-modal">
			<div className="cart-modal__title">
				<h1>Shopping Cart</h1>
				<span onClick={onClose}>×</span>
			</div>
			<>
				<div className="cart-modal__items">
					{cart.length > 0 &&
						cart.map((product) => (
							<CartItem
								id={product.id}
								name={product.name}
								quantity={product.quantity}
								image={product.image}
								price={product.price}
								key={product.id}
							/>
						))}
					{cart.length <= 0 && (
						<p style={{ color: "gray", textAlign: "center" }}>
							Mo Product in the cart
						</p>
					)}
				</div>
				<div className="cart-modal__total">
					<p>
						<span>Subtotal:</span> <span>{totalPrice}</span>
					</p>
				</div>
			</>

			<div className="cart-modal__buttons">
				{cart.length > 0 && (
					<>
						<Button>
							<Link onClick={onClose} to="/cart">
								View Cart
							</Link>
						</Button>
						<Button>
							<Link onClick={onClose} to="/checkout">
								Checkout
							</Link>
						</Button>
					</>
				)}
				{cart.length <= 0 && (
					<Button>
						<Link onClick={onClose} to="/shop">
							Continue Shopping
						</Link>
					</Button>
				)}
			</div>
		</dialog>,
		document.getElementById("modal-root")
	);
};

export default Cart;
