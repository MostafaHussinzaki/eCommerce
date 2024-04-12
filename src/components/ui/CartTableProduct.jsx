import { Link } from "react-router-dom";
import CartInput from "./CartInput";
import deleteImg from "../../assets/delete.png";

import { priceFormatter } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slice/cartSlice";

const CartTableProduct = function ({ id, image, name, price, quantity }) {
	const dispatch = useDispatch();

	const handleAddItem = () => {
		dispatch(
			cartAction.addItem({ item: { id, name, price, image }, quantity: 1 })
		);
	};

	const handleRemoveItem = () => {
		dispatch(cartAction.removeItem({ id }));
	};
	const handleRemoveProduct = () => {
		dispatch(cartAction.removeProduct({ id }));
	};

	const totalPrice = priceFormatter(price * quantity);

	const formatedPrice = priceFormatter(price);
	return (
		<tr>
			<td className="delete-button">
				<img src={deleteImg} alt="" onClick={handleRemoveProduct} />
			</td>
			<td className="table-product__img">
				<img src={image} alt="" />
			</td>
			<td>
				<span className="mobile-label">Product:</span>
				<Link to={`/products/${id}`}>{name}</Link>
			</td>
			<td className="table-price">
				<span className="mobile-label">Price:</span>
				{formatedPrice}
			</td>
			<td className="no-padding">
				<span className="mobile-label">Quantity:</span>
				<CartInput
					key={quantity}
					handleAddItem={handleAddItem}
					handleRemoveItem={handleRemoveItem}
					quantity={quantity}
				/>
			</td>
			<td className="table-price">
				<span className="mobile-label">Subtotal:</span>
				{totalPrice}
			</td>
		</tr>
	);
};

export default CartTableProduct;
