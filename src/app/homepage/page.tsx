import { HomepageAccordion } from "@/app/components/HomepageAccordion";
import HomepageRedirection from "@/app/components/HomepageRedirection";

export default function Homepage() {
	return (
		<>
			<HomepageRedirection />
			<HomepageAccordion />
		</>
	);
}