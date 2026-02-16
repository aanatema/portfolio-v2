import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import GoalListComponent from "../../reactComponents/GoalListComponent";
import { goalsList } from "./components/goalsList";

export default function FlupaJTPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify lg:text-pretty md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Flupa, Journée thématique : UX en Résonnance
					</h1>
				</header>
				{/* <section className='flex justify-center mt-5 mb-5'>
					<BiomeLogo />
				</section> */}

				<section>
					<Accordion
						type='single'
						collapsible
						className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Contexte]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col'>
								<p>
									FLUPA est une association rassemblant des
									professionnels du design d&apos;expérience
									utilisateur. À l&apos;occasion de la
									renaissance de leur &quot;Journée
									thématique&quot;, je me suis portée
									volontaire pour aider l&apos;équipe
									communication.
									<br />
									Le site a pour objectifs de présenter
									l&apos;évenement et les thématiques,
									communiquer le programme et dévoiler les
									orateurices qui l&apos;animeront ainsi que
									de partager toutes les infos utiles pour les
									intervenant(e)s et le public.
								</p>
								<section className='flex flex-col gap-4 items-center '>
									<div className='flex gap-4 my-2'>
										{" "}
										<Badge
											asChild
											variant='blue'>
											<Link
												href='https://flupa.eu/'
												target='_blank'
												className='uppercase'>
												FLUPA
											</Link>
										</Badge>
										<Badge
											asChild
											variant='pink'>
											<Link
												href='https://journee-thematique.flupa.eu/'
												target='_blank'
												className='uppercase'>
												Journée thématique
											</Link>
										</Badge>
									</div>
								</section>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Technos]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col mx-1'>
								<p>
									Pour respecter les contraintes de temps et
									permettre à tous les membres de
									l&apos;équipe de prendre la relève dans le
									cas d&apos;un imprévu, c&apos;est{" "}
									<strong>Webflow</strong> qui a été choisi.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Objectifs]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col   '>
								{goalsList.map((goal, idx) => (
									<GoalListComponent
										key={idx}
										{...goal}
									/>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-5'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Résultats]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col   '>
								<p>
									Développement des mes compétences sur un
									outil no-code
									<br />
									Objectifs fonctionnels et techniques
									atteints
									<br />
									Amélioration de mes capacités
									d&apos;adaptation grâce à la collaboration
									en asynchrone avec différentes équipes
									(Communication, Logistique, Programmation)
									ainsi qu&apos;à la gestion des imprévus et
									des changements de dernière minutes.
									<br />
									Création d&apos;une architecture et
									d&apos;une UI cohérente et réutilisable
									<br />
									Planification, organisation et développement
									d&apos;un projet soumis à des contraintes de
									temps et à une organisation changeante.
									<br />
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
