import { Link, useRouteError } from "react-router-dom";
import Button from "../components/ui/Button";

const ErrorPage = function () {
	const { message } = useRouteError();
	return (
		<section className="error-page">
			<h1>{message || "This page doesn't seem to exist."} </h1>
			<p>It looks like an Error Happened </p>
			<Button>
				<Link to="/">return to Home Page</Link>
			</Button>
		</section>
	);
};

export default ErrorPage;
