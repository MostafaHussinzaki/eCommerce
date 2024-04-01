import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
const mainNav = function () {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		const query = fd.get("searchQuery");
		navigate(`/search?q=${query}`);
		// care
		e.target[0].value = "";
	};

	return (
		<div className="main">
			<Link to="/">
				<img src={Logo} alt="Logo" className="logo" />
			</Link>
			<form onSubmit={handleSubmit} method="get">
				<input
					type="text"
					name="searchQuery"
					placeholder={"Search product..."}
					required
				/>
				<button type="submit">
					<img src={Search} alt="" />
				</button>
			</form>
		</div>
	);
};

export default mainNav;
