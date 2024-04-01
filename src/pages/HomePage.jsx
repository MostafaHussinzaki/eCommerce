import Landing from "../components/Landing";
import Categorys from "../components/Categorys";
import Ads from "../components/Ads";
import BestSeller from "../components/BestSeller";
import Testemonials from "../components/Testemonials";
import ContactusSection from "../components/ContactusSection";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

// test

const HomePage = function () {
	const navigation = useNavigation();

	return (
		<>
			{navigation.state === "loading" && <Spinner />}
			<Landing />
			<Categorys />
			<Ads />
			<BestSeller />
			<Testemonials />
			<ContactusSection />
		</>
	);
};

export default HomePage;
