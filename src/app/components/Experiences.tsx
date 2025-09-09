import { ExperienceIntroList } from "./ExperienceIntroList";
import ExperienceIntro from "./ExperienceIntro";

export default function Experiences() {
	return (
		<>
			{ExperienceIntroList.map((exp, index) => (
				<ExperienceIntro
					key={index}
					{...exp}
				/>
			))}
		</>
	);
}
