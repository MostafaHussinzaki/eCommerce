import { priceFormatter } from "../../utils/helper";

const CheckoutItem = function ({ image, name, quantity, price }) {
	const formattedPrice = priceFormatter(price * quantity);
	return (
		<div className="checkout-item">
			<div className="dodo">
				<img src={image} alt={name} />
				<span>{name}</span>
				<span>× {quantity}</span>
			</div>
			<div className="soso">
				<span>{formattedPrice}</span>
			</div>
		</div>
	);
};

export default CheckoutItem;
