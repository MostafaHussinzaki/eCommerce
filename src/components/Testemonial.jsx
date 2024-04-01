import star from "../assets/star.png";

const Testemonial = function () {
	return (
		<div className="testemonial">
			<p className="star">
				{[1, 2, 3, 4, 5].map((_, i) => (
					<img src={star} alt="star" key={i} />
				))}
			</p>
			<p className="pargraph">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia
				vero libero expedita alias iusto inventore voluptatem et odio.
			</p>
			<h3> Elon Mask</h3>
		</div>
	);
};

export default Testemonial;
