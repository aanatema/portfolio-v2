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
						Récemment diplômée après deux ans d’études dont 12 mois
						d’
						<a
							href='/abtasty'
							className='underline font-bold'>
							alternance au sein du SaaS AB Tasty
						</a>
						, j’ai choisi de poursuivre sur un Master Frontend afin
						d’élargir le champ de mes compétences dans ce domaine.
						<br />
						C’est dans ce carde que je cherche une{" "}
						<strong>alternance</strong> de 24 mois pour une rentrée
						en <strong>Septembre 2026</strong>.
						<br />
						<br />
						Ma première alternance m’a permis d’évoluer au sein
						d’une équipe agile internationale avec une collaboration
						régulière avec les équipes, Design, Produit et QA.
						<br />
						J’ai pu développer mes compétences en travaillant sur
						des projets matures, avec leurs propres standards,
						enjeux et complexités; contribuer au développement et à
						l’évolution de fonctionnalités dans un environnement
						<strong> React - Typescript</strong>; participer à
						l’évolution et à la structuration de l’architecture
						React.
						<br />
						J’ai pris l’initiative de mettre à jour et de créer de
						la documentation sur les projets qui m’ont été assignés
						afin de simplifier les contributions et de garder une
						trâce de leurs évolutions.
						<br />
						<br />
						Pour ma seconde alternance, je souhaite affiner mes
						connaissances, être challengée et travailler sur des
						projets variés au sein d’une équipe dynamique aux
						missions clairement définies.
					</p>
					<br />

					<header className='font-medium uppercase'>
						[Ce que j&apos;apporte]
					</header>
					<br />
					<p>
						Une première expérience professionnelle au sein
						d&apos;un environnement exigeant avec une équipe
						structurée responsable d&apos;une section précise des
						services d&apos;AB Tasty. <br />
						Je suis familière avec le fonctionnement d&apos;une
						équipe tech, aux rituels agile, à m&apos;adapter aux
						standards de qualité et processus en vigueur dans les
						projets et comprends les enjeux de faire partie
						d&apos;un plus grand ensemble. J&apos;apprends vite et
						m&apos;investis pleinement pour mon équipe et dans les
						tâches qui me sont confiées.
					</p>
				</section>
			</main>
		</>
	);
}
