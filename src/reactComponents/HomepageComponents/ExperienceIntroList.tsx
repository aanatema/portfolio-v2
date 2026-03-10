// ExperienceIntroList.tsx
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import AbtastyLogo from "@/reactComponents/Images/AbtastyLogo";
import AdaLogo from "@/reactComponents/Images/AdaLogo";
import UnivLogo from "@/reactComponents/Images/UnivLogo";
import EcvLogo from "../Images/EcvLogo";

export const ExperienceIntroList = [
	{
		logo: <EcvLogo />,
		context: "[Formation] / [24 mois]",
		duration: "[Septembre 2026 - Septembre 2028]",
		content: (
			<>
				<p>
					Master en Développement Frontend à{" "}
					<a
						href='https://www.ecv.fr/digital/mastere-developpement-web/'
						className='underline'
						target='_blank'>
						l&apos;École de Création Visuelle
					</a>{" "}
					(ECV) de Nantes. Le programme combine développement avancé,
					gestion de projet et collaboration avec les équipes produit
					et design. Il vise à former des développeurs capables de
					piloter des projets techniques, concevoir des expériences
					utilisateurs innovantes et contribuer aux décisions
					techniques et créatives des produits digitaux.
				</p>
			</>
		),
	},
	{
		logo: <AbtastyLogo />,
		context: "[Alternance] / [12 mois]",
		duration: "[Mai 2024 - Mai 2025]",
		content: (
			<>
				<p>
					Développeuse frontend au sein du SaaS{" "}
					<a
						href='https://www.abtasty.com/fr/'
						className='underline'
						target='_blank'>
						AB Tasty
					</a>{" "}
					dans une équipe de 9 personnes*, j&apos;ai contribué au
					développement de plusieurs projets React / Typescript, à
					l&apos;amélioration de la couverture de tests ainsi qu&apos;
					à la création et mise à jour de documentation technique.
				</p>
				<p className='text-muted-foreground text-sm justify-end'>
					<br />
					*1 Tech Lead / 1 Product Manager / 1 Lead Dev / 4 Devs / 1
					Designer / 1 QA
				</p>
			</>
		),
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
				Cursus de 24 mois avec Ada Tech School pour obtenir le titre
				<strong>
					RNCP VI développeur concepteur d&apos;applications
				</strong>
				.
				<br /> L&apos;école met l’accent sur la pratique,
				l&apos;autonomie et la collaboration en nous assignant des
				projets collectifs intégrant les rituels de travail (sprints,
				code reviews, rétro, démos...) en pratique dans les entreprises.
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
			</p>
		),
	},
];
