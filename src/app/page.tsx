import { HomepageAccordion } from "./components/HomepageAccordion";
import HomepageRedirection from "./components/HomepageRedirection";

export default function Home() {
	return (
		<>
			<HomepageRedirection />
			<div>
				<HomepageAccordion />
			</div>
		</>
	);
}
