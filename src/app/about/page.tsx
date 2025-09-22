import { FolderOpen } from "lucide-react";

export default function AboutPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 md:mx-55'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						À propos
					</h1>
				</header>
				<section className='text-justify lg:text-pretty'>
					<br />
					<header className='font-medium uppercase'>
						[Présentation]
					</header>
					<br />
					<p className=''>
						Issue d’un cursus littéraire, j’ai choisi de me
						réorienter afin de m’aligner avec mon besoin de réaliser
						des tâches concrètes et utiles. J&apos;ai donc choisi le
						développement web et c&apos;est avec Ada Tech School que
						j&apos;ai commencé ma formation pour le titre{" "}
						<strong>
							RNCP VI développeur concepteur d&apos;applications
						</strong>
						.
						<br />
						<br />
						Mon{" "}
						<a
							href='/abtasty'
							className='underline font-bold'>
							alternance
						</a>{" "}
						au sein d’
						<strong>AB Tasty</strong> m’a permis d&apos;atteindre
						cette recherche d&apos;utilité dans diverses situations
						réelles : implémenter des fonctionnalités demandées par
						les clients, documenter et actualiser nos processus
						internes, améliorer les interfaces pour une utilisation
						fluidifiée.
						<br />À la suite de ces 12 mois d&apos;alternance, j’ai
						obtenu mon <strong> diplôme </strong> avec la
						présentation de mon projet{" "}
						<a
							href='/biome'
							className='underline'>
							Biome
						</a>
						, un carnet de lecture en ligne qui s’affranchit des
						algorithmes des réseaux sociaux.
					</p>
					<br />
					<br />
					<header className='font-medium uppercase'>
						[Ce que j&apos;aime et cherche]
					</header>
					<br />
					<p>
						J’aime prendre le temps de m’intéresser à ce que font
						les autres membres de mon équipe pour discuter et
						apprendre d’eux. Je tiens à avoir une{" "}
						<strong> vision globale </strong> du / des projets et
						des enjeux de l’entreprise dans laquelle je suis. Il est
						important pour moi que les différentes équipes ne soient
						pas uniquement cantonnées à leurs projets sans
						compréhension collective.
						<br />
						<br />
						J’apprécie beaucoup échanger sur les questions d’
						<strong>UI/UX </strong>
						et autres enjeux liés aux différents rôles d’une équipe
						(QA, PM…), travailler dans une équipe variée où l’on
						peut prendre le temps d’échanger et de se challenger les
						uns les autres. J’aime{" "}
						<strong>apprendre et partager</strong> avec mon équipe
						mais aussi les autres membres du bureau.
					</p>
					<br />
					<br />
					<header className='font-medium uppercase'>
						[Ce que j&apos;apporte]
					</header>
					<br />
					<p>
						Comme évoqué plus tôt j&apos;aime apprendre et partager
						ce qui fait de moi quelqu&apos;un de volontaire et animé
						par l&apos;envie de{" "}
						<strong> faire avancer les choses</strong>. Mon goût
						pour le design me permet de porter une attention
						particulière à l&apos;éxpérience utilisateur et la
						<strong> qualité des interfaces </strong>lors du
						développement de fonctionnalités et facilite les
						échanges avec l&apos;équipe design.
						<br />
						<br />
						Mon passage au sein d&apos;AB Tasty m&apos;a permis de
						mettre en application mes connaissances sur des{" "}
						<strong>projets matures et complexes</strong> en
						m&apos;adaptant aux standards de qualité et processus en
						vigueur. J&apos;ai pu développer mes compétences,
						notamment en <strong>React</strong> et{" "}
						<strong>Typescript </strong> en conditions réelles.
						<br />
						<br />
						J&apos;aime écrire de la <strong>documentation</strong>,
						une tâche essentielle au développement de chaque projet
						mais qui est pourtant trop peu appréciée.
					</p>
				</section>
			</main>
		</>
	);
}
