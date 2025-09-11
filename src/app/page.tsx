import { HomepageAccordion } from "./components/HomepageComponents/HomepageAccordion";
import HomepageRedirection from "./components/HomepageComponents/HomepageRedirection";

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
