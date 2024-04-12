import deleteImgSrc from "../../assets/delete.png";
import CartInput from "./CartInput";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slice/cartSlice";
import { priceFormatter } from "../../utils/helper";

const CartItem = function ({ name, image, id, quantity, price }) {
	const dispatch = useDispatch();

	const totalPrice = priceFormatter(price * quantity);

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
	return (
		<div className="cart-modal__items__item">
			<img src={image} alt="" />
			<div className="cart-modal__items__item__detail">
				<div className="item-name">
					<p>{name}</p>
					<span style={{ cursor: "pointer" }}>
						<img src={deleteImgSrc} alt="" onClick={handleRemoveProduct} />
					</span>
				</div>
				<div className="item-actions">
					<CartInput
						key={quantity}
						quantity={quantity}
						handleAddItem={handleAddItem}
						handleRemoveItem={handleRemoveItem}
					/>
					<p>Total: {totalPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
