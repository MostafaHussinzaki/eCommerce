export function priceFormatter(price) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
}

export function formatPriceAfterOffer(price, offerPercent) {
	return price - price * (offerPercent / 100);
}

export function getFromLocalStorage(name) {
	return JSON.parse(localStorage.getItem(name));
}

export function addToLocalStorage(body) {
	localStorage.setItem("cart", JSON.stringify(body));
}
