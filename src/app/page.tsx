import { HomepageAccordion } from "./components/HomepageComponents/HomepageAccordion";
import HomepageRedirection from "./components/HomepageComponents/HomepageRedirection";

export default function Home() {
	return (
		<>
			<HomepageRedirection />
			<main className='md:mx-65'>
				<HomepageAccordion />
			</main>
		</>
	);
}
