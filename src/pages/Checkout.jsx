import CheckoutItem from "../components/ui/checkoutItem";
import CheckoutForm from "../components/checkoutForm";
import { useSelector } from "react-redux";
import { priceFormatter } from "../utils/helper";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import Message from "../components/ui/Message";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

const Checkout = function () {
	const navigation = useNavigation();
	const cart = useSelector((state) => state.cart);

	const totalPrice = priceFormatter(
		cart.reduce((acc, curr) => acc + +curr.price * +curr.quantity, 0)
	);

	return (
		<section className="checkout-page container">
			<h1>Checkout</h1>
			{navigation.state === "loading" && <Spinner />}
			{cart.length <= 0 && (
				<>
					<Message type="failed">Your Cart is empty</Message>
					<Button>
						<Link to="/shop">Return to Shop</Link>
					</Button>
				</>
			)}
			{cart.length > 0 && (
				<div className="checkout-data">
					<CheckoutForm totalPrice={totalPrice} />
					<div className="checkout-data__cart">
						<h2>Your order</h2>
						<div>
							<div className="titless">
								<span>Product</span>
								<span>Subtotal</span>
							</div>
							<div>
								{cart.map((product) => (
									<CheckoutItem
										image={product.image}
										name={product.name}
										price={product.price}
										quantity={product.quantity}
										key={product.id}
									/>
								))}
							</div>
							<div className="flex-between">
								<span>total:</span>
								<span>{totalPrice}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Checkout;
