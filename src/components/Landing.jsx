import shippingImg from "../assets/shipping.png";
import commentImg from "../assets/comment.png";
import resetImg from "../assets/reset.png";
import visaImg from "../assets/visa.png";

import Pros from "./ui/pros";

const Landing = function () {
	return (
		<section className="landing container">
			<div className="card">
				<h1>The best home entertainment system is here</h1>
				<p>
					Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.
				</p>
				<a href="#">Shop now</a>
			</div>
			<div className="pros">
				<Pros
					imgSrc={shippingImg}
					label="Free Shipping"
					description="When you spend $80 or more"
				/>
				<Pros
					imgSrc={commentImg}
					label="We are available 24/7"
					description="Need help? contact us anytime"
				/>
				<Pros
					imgSrc={resetImg}
					label="Satisfied or return
"
					description="Easy 30-day return policy"
				/>
				<Pros
					imgSrc={visaImg}
					label="100% secure payments"
					description="Visa, Mastercard, Stripe, PayPal"
				/>
			</div>
		</section>
	);
};

export default Landing;
