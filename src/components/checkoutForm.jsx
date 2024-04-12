import Button from "./ui/Button";
import Message from "./ui/Message";
import Options from "./Options";

import { useState } from "react";

const CheckoutForm = function ({ totalPrice }) {
	const [isCoupon, setIsCoupon] = useState(false);

	const handleShowCoupon = () => {
		setIsCoupon(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="checkout-data__form">
			<form onSubmit={handleSubmit}>
				<div className="checkout-data__form__customer">
					<h2>Customer information</h2>
					<input
						type="text"
						name=""
						id=""
						placeholder="Username or Email Address *"
						className="input"
						required
					/>
				</div>
				<div className="checkout-data__form__billing">
					<h2>Billing details</h2>
					<div className="flex">
						<input
							type="text"
							placeholder="First name *"
							className="input"
							required
						/>
						<input
							type="text"
							placeholder="last name*"
							className="input"
							required
						/>
					</div>
					<input type="text" placeholder="Company name" className="input" />
					<Options />
					<div className="flex">
						<input
							type="text"
							placeholder="House number and street number*"
							className="input"
							required
						/>
						<input
							type="text"
							placeholder="Apartment, suite, unit, etc. (optional)"
							className="input"
						/>
					</div>
					<div className="flex">
						<input
							type="text"
							placeholder="town/City*"
							className="input"
							required
						/>
						<input
							type="text"
							placeholder="ZIP Code*"
							className="input"
							required
						/>
					</div>
					<input type="text" placeholder="Phone*" className="input" />
				</div>
				<div className="checkout-data__form__additional">
					<h2>Additional information</h2>
					<textarea
						name=""
						placeholder="Notes about your order, e.g. special notes for delivery."
						className="input"
					/>
					<div className="">
						<p style={{ cursor: "pointer" }} onClick={handleShowCoupon}>
							Have a Coupon?
						</p>
						<span className={!isCoupon ? "hidden" : ""}>
							<input type="text" placeholder="Coupon Code" className="input" />
							<Button>Apply</Button>
						</span>
					</div>
				</div>
				<div>
					<h2>Payment</h2>
					<Message type="successful">
						Sorry, it seems that there are no available payment methods. Please
						contact us if you require assistance or wish to make alternate
						arrangements.
					</Message>
				</div>
				<Button type="submit" disaple>
					Place Order: {totalPrice}
				</Button>
			</form>
		</div>
	);
};

export default CheckoutForm;
