import Link from "next/link";
import AbtastyLogo from "./Images/AbtastyLogo";
import { Badge } from "@/components/ui/badge";
import AbtTechnoList from "./TechnoList/AbtTechnoList";

export default function AbtIntroSection() {
	return (
		<>
			<section className=' p-2 rounded self-center bg-abt-blue'>
				<AbtastyLogo />
			</section>
			<section className='mb-2'>
				<p className='tracking-[3] text-start uppercase flex justify-center'>
					[Alternance] / [12 mois]
				</p>
				<p className='tracking-[3] text-start uppercase flex justify-center'>
					[Mai 2024 - Mai 2025]
				</p>
				<br />
				<p className='text-justify '>
					<a
						href='https://www.abtasty.com/fr/'
						className='underline'>
						AB Tasty
					</a>{" "}
					est une entreprise française proposant des solutions
					d&apos;A/B testing, de personnalisation et d&apos;analytics.
					<br />
					Au cours de mon alternance, j’ai notamment contribué au
					développement front-end de plusieurs projets, participé à
					l’amélioration de fonctionnalités existantes, ainsi
					qu&apos;a la mise a jour et création de documentaion.
				</p>
				<AbtTechnoList />
				<div className='flex justify-end mb-2'>
					<Badge
						asChild
						variant='blue'>
						<Link
							href='/experiencePage'
							className='uppercase'>
							Mes missions
						</Link>
					</Badge>
				</div>
			</section>
		</>
	);
}
