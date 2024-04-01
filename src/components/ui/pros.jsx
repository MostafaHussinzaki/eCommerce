const Pros = function ({ imgSrc, label, description }) {
	return (
		<div>
			<img src={imgSrc} alt={label} />
			<div>
				<h3>{label}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Pros;
