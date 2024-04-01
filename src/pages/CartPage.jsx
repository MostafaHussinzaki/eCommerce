import CartTableProduct from "../components/ui/CartTableProduct";
import Button from "../components/ui/Button";
import { useSelector } from "react-redux";
import { priceFormatter } from "../utils/helper";
import { useState } from "react";
import Message from "../components/ui/Message";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

const CartPage = function () {
	const navigation = useNavigation();

	const [isCoupon, setIsCoupon] = useState(false);

	const cart = useSelector((state) => state.cart);
	const totalPrice = priceFormatter(
		cart.reduce((acc, curr) => acc + +curr.price * +curr.quantity, 0)
	);

	const handleShowCoupon = () => {
		setIsCoupon(true);
	};

	return (
		<section className="cart-page container">
			<h1>Cart</h1>
			{navigation.state === "loading" && <Spinner />}
			{cart.length > 0 && (
				<div>
					<table className="cart-page__table">
						<thead>
							<tr className="">
								<th></th>
								<th></th>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((product) => (
								<CartTableProduct
									id={product.id}
									image={product.image}
									name={product.name}
									price={product.price}
									quantity={product.quantity}
									key={product.id}
								/>
							))}
						</tbody>
					</table>
					<div className="cart-page__infos">
						<div className="cart-page__infos__title">
							<h2>Cart totals</h2>
						</div>
						<div className="cart-page__infos__totals">
							<p>
								<span>Subtotal</span>
								{totalPrice}
							</p>
							<p>
								<span>Total</span>
								{totalPrice}
							</p>
						</div>
						<div className="cart-page__infos__coupon">
							<p onClick={handleShowCoupon} style={{ cursor: "pointer" }}>
								Have a Coupon?
							</p>
							<form className={!isCoupon ? "hidden" : ""}>
								<input type="text" placeholder="Coupon Code" />
								<Button>Apply</Button>
							</form>
						</div>
						<Button>
							<Link to="/checkout">Proceed to Checkout</Link>
						</Button>
					</div>
				</div>
			)}

			{cart.length <= 0 && (
				<>
					<Message type="successful">Your cart is currently empty.</Message>
					<Button>
						<Link to="/shop">Return To Shop</Link>
					</Button>
				</>
			)}
		</section>
	);
};

export default CartPage;
