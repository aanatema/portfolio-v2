// ExperienceIntroList.tsx
import { Badge } from "@/components/ui/badge";
import AbtTechnoList from "../../app/abtasty/components/AbtTechnoList";
import Link from "next/link";
import AbtastyLogo from "@/reactComponents/Images/AbtastyLogo";
import AdaLogo from "@/reactComponents/Images/AdaLogo";
import UnivLogo from "@/reactComponents/Images/UnivLogo";

export const ExperienceIntroList = [
	{
		logo: <AbtastyLogo />,
		context: "[Alternance] / [12 mois]",
		duration: "[Mai 2024 - Mai 2025]",
		content: (
			<>
				<a
					href='https://www.abtasty.com/fr/'
					className='underline'
					target='_blank'>
					AB Tasty
				</a>{" "}
				est une entreprise française proposant des solutions d’A/B
				testing, de personnalisation et d’analytics. <br />
				Au cours de mon alternance, j’ai contribué au développement
				front-end de plusieurs projets, à l’amélioration de
				fonctionnalités existantes et implémentation de nouvelles.
				J&apos;ai pris également part dans la réalisation de
				documentation.
			</>
		),
		techs: <AbtTechnoList />,
		extra: (
			<Badge
				asChild
				variant='blue'>
				<Link
					href='/abtasty'
					className='uppercase'>
					Mes missions
				</Link>
			</Badge>
		),
	},
	{
		logo: <AdaLogo />,
		context: "[Formation] / [24 mois]",
		duration: "[2023 - 2025]",
		content: (
			<p>
				Une fois ma réorientation décidée, j&apos;ai entamé un cursus de
				24 mois avec Ada Tech School dans le but d&apos;obtenir le titre{" "}
				<strong>
					RNCP VI développeur concepteur d&apos;applications
				</strong>
				. Le premier module est la formation théorique et pratique en
				présentiel et le deuxième correspond aux 12 mois en alternance.
				<br /> Cette formation met l’accent sur la pratique,
				l’autonomie, les projets collectifs tout en y intégrant les
				rituels de travail (sprints, code reviews, rétro, démos...)
				souvent utilisés en entreprise.
			</p>
		),
		extra: (
			<Badge
				asChild
				variant='pink'>
				<Link
					href='/school-projects'
					className='uppercase'>
					Mes projets d&apos;école
				</Link>
			</Badge>
		),
	},
	{
		logo: <UnivLogo />,
		context: "[Licence] / [3 ans]",
		duration: "Langues Traductions et Médiations Interculturelles",
		content: (
			<p>
				La filière LTMI de l’Université de Poitiers forme aux langues
				étrangères et à leurs applications dans des contextes
				professionnels et interculturels. J’y ai étudié l’
				<strong>anglais</strong>, le <strong> russe </strong> et l’
				<strong>italien</strong>, en développant des compétences en
				traduction, communication et médiation entre cultures.
				<br />
				J&apos;ai beaucoup apprécié la diversité qu&apos;apporte
				l&apos;étude des cultures, littératures et civilisations
				étrangères. C&apos;est ce besoin de <strong>
					{" "}
					variété{" "}
				</strong>{" "}
				qui m&apos;a dirigée vers le développement web lors de ma
				réorientation.
			</p>
		),
	},
];
