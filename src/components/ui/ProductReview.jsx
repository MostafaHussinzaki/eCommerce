import Button from "./Button";

const ProductReview = function ({ name }) {
	return (
		<div className="product-page__more__review">
			<p>There are no review yet.</p>
			<form>
				<h1>Be the first to review {name}</h1>
				<p>
					Your email address will not be published. Required fields are marked *
				</p>
				<div>
					<label htmlFor="review">Your review *</label>
					<textarea id="review"></textarea>
				</div>
				<div>
					<label htmlFor="name">Name *</label>
					<input type="text" name="" id="name" placeholder="n.m" />
				</div>
				<div>
					<label htmlFor="email">Email *</label>
					<input type="email" id="email" placeholder="user@gmail.com" />
				</div>
				<div className="checking">
					<input type="checkbox" id="check" />
					<label htmlFor="check">
						Save my name, email, and website in this browser for the next time I
						comment.
					</label>
				</div>

				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default ProductReview;
