import CartInput from "./CartInput";
import Button from "./Button";
import { priceFormatter, formatPriceAfterOffer } from "../../utils/helper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/slice/cartSlice";
import { addToLocalStorage } from "../../utils/helper";

const ProductDetail = function ({
	name,
	category,
	price,
	discountPercent,
	images,
	description,
	brand,
	id,
}) {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [isViewCart, setIsViewCart] = useState(false);

	const [activeImage, setActiveImage] = useState(0);

	const formattedPrice = priceFormatter(price);
	const priceAfterOffer = priceFormatter(
		formatPriceAfterOffer(price, discountPercent)
	);

	const handleAddtoCart = function (id, name, price, image) {
		const quantity = +document.querySelector(".cart-input > input").dataset
			.count;

		dispatch(
			cartAction.addItem({
				item: { id, name, price, image },
				quantity,
			})
		);
		
		setIsViewCart(true);
	};

	return (
		<div className="product-detail">
			<div className="product-detail__images">
				<div className="product-detail__images__main">
					<img src={images[activeImage]} alt="" />
				</div>
				<div className="product-detail__images__select">
					<img
						src={images[0]}
						alt=""
						onClick={() => setActiveImage(0)}
						className={activeImage === 0 ? "active" : ""}
					/>
					<img
						src={images[1]}
						alt=""
						onClick={() => setActiveImage(1)}
						className={activeImage === 1 ? "active" : ""}
					/>
					<img
						src={images[2]}
						alt=""
						onClick={() => setActiveImage(2)}
						className={activeImage === 2 ? "active" : ""}
					/>
					<img
						src={images[3]}
						alt=""
						onClick={() => setActiveImage(3)}
						className={activeImage === 3 ? "active" : ""}
					/>
				</div>
			</div>
			<div className="product-detail__text">
				<p className="product-detail__text__path">
					<Link to="/">Home</Link>/
					<Link to={`/shop/${category}`}>{category}</Link>/{name}
				</p>
				<h1 className="product-detail__text__name">{name}</h1>
				<p className="product-detail__text__description">{description}</p>
				<p className="product-detail__text__price">
					<span className="salexx">{formattedPrice}</span>
					<span className="realxx">{priceAfterOffer}</span>
				</p>
				<p className="product-detail__text__description">{brand}</p>
				<div className="product-detail__text__feature">
					<h3>Key features</h3>
					<ul>
						<li>Lorem, ipsum.</li>
						<li>Lorem, ipsum dolor.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem, ipsum.</li>
					</ul>
				</div>
				<div className="product-detail__text__action">
					<CartInput />
					<Button
						onClick={() =>
							handleAddtoCart(
								id,
								name,
								formatPriceAfterOffer(price, discountPercent),
								images[0]
							)
						}
					>
						Add to Cart
					</Button>
					{isViewCart && <Link to="/cart">View Cart</Link>}
				</div>
				<div>
					<p className="product-detail__text__category">
						Category: <Link to={`/shop/${category}`}>{category}</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
