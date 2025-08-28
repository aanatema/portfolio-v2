import Link from "next/link";
import AbtastyLogo from "./Images/AbtastyLogo";

export default function ExperienceSection() {
	return (
		<>
			<section className='bg-abt-blue p-2 rounded self-center'>
				<AbtastyLogo />
			</section>
			<section className='mb-2'>
				<header className='font-bold'>Intro</header>
				<p className='tracking-[3] text-start uppercase'>
					[Alternance] / [12 mois]
				</p>
				<br />
				<p className='text-justify'>
					<a
						href='https://www.abtasty.com/fr/'
						className='underline'>
						AB Tasty
					</a>{" "}
					est une entreprise française proposant des solutions
					d&apos;A/B testing, de personnalisation et d&apos;analytics.
					<br />
					Au cours de mon alternance, j’ai contribué au développement
					front-end de plusieurs projets, participé à l’amélioration
					de fonctionnalités existantes, ainsi qu&apos;a la mise a
					jour et création de documentaion.
				</p>
				<Link href='/experiencePage'>
					<p className='flex align-end underline'>Lire plus</p>
				</Link>
			</section>
		</>
	);
}
