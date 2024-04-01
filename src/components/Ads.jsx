import ad1 from "../assets/ad1.jpg";
import ad2 from "../assets/ad2.jpg";

const Ads = function () {
	return (
		<section className="ads container">
			<a href="#">
				<img src={ad1} alt="" />
			</a>
			<a href="#">
				<img src={ad2} alt="" />
			</a>
		</section>
	);
};

export default Ads;
