import supportTeamImgSrc from "../assets/electronic-store-support-team.png";

const ContactusSection = function () {
	return (
		<section className="contact-us-section container">
			<div className="contact-us-section__connection">
				<div className="contact-us-section__connection__image">
					<div>
						<p>Have any questions?</p>
						<h3>Contact us</h3>
					</div>
					<img src={supportTeamImgSrc} alt="" />
				</div>
				<div className="contact-us-section__connection__customer">
					<p>Customer service</p>
					<h3>1-222-345-6789</h3>
				</div>
				<div className="contact-us-section__connection__expert">
					<p>Expert advice</p>
					<h3>123-456-7890</h3>
				</div>
			</div>
		</section>
	);
};

export default ContactusSection;
