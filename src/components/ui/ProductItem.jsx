import cartImg from "../../assets/shopCart.png";
import star from "../../assets/star.png";
import { formatPriceAfterOffer, priceFormatter } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/slice/cartSlice";

import { useState } from "react";
import { Link } from "react-router-dom";
import { addToLocalStorage } from "../../utils/helper";

const ProductItem = function ({
	image,
	rating,
	name,
	price,
	discountPercent,
	id,
}) {
	const cart = useSelector((state) => state.cart);
	const [hovering, setHovering] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();
	const ratingStar = Math.round(rating);

	const formattedPrice = priceFormatter(price);
	const priceAfterOffer = priceFormatter(
		formatPriceAfterOffer(price, discountPercent)
	);

	const handleAddtoCart = (id, name, price, image) => {
		setIsLoading(true);
		setTimeout(() => {
			dispatch(
				cartAction.addItem({ item: { id, name, price, image }, quantity: 1 })
			);
			setIsLoading(false);
		}, 2000);
	};

	return (
		<div
			className="product-item"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div className="product-image">
				<img src={image} alt="Item Image" />
				<span className="sale">Sale!</span>
				<span className={`product-cart ${hovering ? "visiple" : ""}`}>
					<span>
						<span className="xx">{isLoading ? "Loading" : "Add To Cart"}</span>
						<span className="arrow"></span>
					</span>
					<img
						style={{ cursor: "pointer" }}
						src={cartImg}
						alt="cart-Image"
						onClick={() =>
							handleAddtoCart(
								id,
								name,
								formatPriceAfterOffer(price, discountPercent),
								image
							)
						}
					/>
				</span>
			</div>
			<Link to={`/products/${id}`}>
				<p className="star">
					{Array(ratingStar)
						.fill(1)
						.map((_, i) => (
							<img src={star} alt="star" key={i} />
						))}
				</p>
				<div className="product-details">
					<h2>{name}</h2>
					<p>
						<span className="old">{formattedPrice}</span>
						<span className="new">{priceAfterOffer}</span>
					</p>
				</div>
			</Link>
		</div>
	);
};

export default ProductItem;
