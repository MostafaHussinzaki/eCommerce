import Testemonial from "./Testemonial";

const Testemonials = function () {
	return (
		<section className="testemonials container">
			<div className="">
				<h1>What is everyone saying?</h1>
				<div>
					{[1, 2, 3, 4, 5, 6].map((ele) => (
						<Testemonial key={ele} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testemonials;
