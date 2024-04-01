import truckImg from "../assets/truck.png";
import commentImg from "../assets/comment.png";
import shoppingBagImg from "../assets/shopping-bag.png";
import Spinner from "../components/ui/Spinner";
import { useNavigation } from "react-router-dom";

import Button from "../components/ui/Button";

const ContactusPage = function () {
	const navigation = useNavigation();
	return (
		<section className="contact-us-page container">
			{navigation.state === "loading" && <Spinner />}
			<h1>Contact</h1>

			<div className="contact-us-page__timing">
				<div>
					<img src={shoppingBagImg} alt="shopping-bag" />
					<span>Expert sales service</span>
					<p>
						123-456-7890 <br />
						Mon-Fri: 8 am - 5 pm <br /> Sat-Sun: 12 pm - 6 pm
					</p>
				</div>
				<hr />
				<div>
					<img src={commentImg} alt="comment" />
					<span>Customer service</span>
					<p>
						123-456-7890
						<br /> Mon-Fri: 8 am - 5 pm <br />
						Sat-Sun: 12 pm - 6 pm
					</p>
				</div>
				<hr />

				<div>
					<img src={truckImg} alt="loading-truck" />
					<span>Home install & delivery</span>
					<p>
						123-456-7890 <br />
						Mon-Fri: 8 am - 5 pm <br />
						Sat-Sun: 12 pm - 6 pm
					</p>
				</div>
			</div>
			<div className="contact-us-page__content">
				<div className="contact-us-page__content__text">
					<div className="border-bottom">
						<h4>
							If you have a question, please contact customer service below.
						</h4>
						<p>
							Contact us to provide a comment or ask a question about your local
							store or our corporate headquarters
						</p>
						<a href="#">Call 1-800-234-5678</a>
						<a href="#">Email customer service</a>
					</div>
					<div className="border-bottom">
						<h5>Investor & Suppliers</h5>
						<a href="#">Email Investor Relations</a>
						<a href="#">Apply to become suppliers</a>
					</div>
					<div>
						<h5>Keep in touch</h5>
					</div>
				</div>
				<div className="contact-us-page__content__form">
					<form>
						<label htmlFor="name">Name *</label>
						<div>
							<input
								type="text"
								id="name"
								className="input"
								placeholder="First"
							/>
							<input
								type="text"
								id="name"
								className="input"
								placeholder="Last"
							/>
						</div>
						<label htmlFor="email">Email *</label>
						<input
							type="text"
							id="email"
							className="input"
							placeholder="user@gmail.com"
						/>
						<label htmlFor="subject">Subject *</label>
						<input
							type="text"
							id="subject"
							className="input"
							placeholder="Subject"
						/>
						<label htmlFor="message">Comment or Message *</label>
						<textarea id="message" className="input"></textarea>
						<Button>Send Message</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactusPage;
