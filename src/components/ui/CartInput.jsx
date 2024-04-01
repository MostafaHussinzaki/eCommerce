import { useState } from "react";

const CartInput = function ({
	handleAddItem = () => {},
	handleRemoveItem = () => {},
	quantity = 1,
}) {
	const [count, setCount] = useState(quantity);
	// start from getting cart count outside this compnent
	const handleInputChange = (event) => {
		const newValue = parseInt(event.target.value);
		if (!isNaN(newValue) && newValue >= 0) {
			setCount(newValue);
		}
	};

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
		handleAddItem();
	};

	const decrement = () => {
		if (count > 0) {
			setCount((prevCount) => prevCount - 1);
			handleRemoveItem();
		}
	};

	return (
		<div className="cart-input">
			<button onClick={decrement}>-</button>
			<input
				type="text"
				// onChange={handleInputChange}
				value={count}
				data-count={count}
			/>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default CartInput;
