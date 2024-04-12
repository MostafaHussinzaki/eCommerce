import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = function () {
	return (
		<footer className="">
			<section className="footer-links container">
				<div>
					<img src={Logo} alt="" />
				</div>
				<div>
					<h2>Shop</h2>
					<ul>
						<li>
							<Link to="/best-seller">Hot deals</Link>
						</li>
						<li>
							<Link to="/shop">Categories</Link>
						</li>
						<li>
							<a href="#">Brands </a>
						</li>
						<li>
							<a href="#">Rebates</a>
						</li>
						<li>
							<a href="#">Weekly deals</a>
						</li>
					</ul>
				</div>
				<div>
					<h2>Need help?</h2>
					<ul>
						<li>
							<Link to="/contact-us">Contact</Link>
						</li>
						<li>
							<a href="#">Order tracking</a>
						</li>
						<li>
							<a href="#">FAQs</a>
						</li>
						<li>
							<a href="#">Return policy</a>
						</li>
						<li>
							<a href="#">Privacy policy</a>
						</li>
					</ul>
				</div>
				<div>
					<h2>Contact</h2>
					<ul>
						<li>
							<a href="#">123 Fifth Avenue, New York, NY 10160</a>
						</li>
						<li>
							<a href="#">contact@info.com</a>
						</li>
						<li>
							<a href="#">929-242-6868</a>
						</li>
					</ul>
				</div>
			</section>
			<section className="footer-copywrites container">
				<p>© 2024 eCommerce Store. Powered by eCommerce Store</p>
			</section>
		</footer>
	);
};

export default Footer;
