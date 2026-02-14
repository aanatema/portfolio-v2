import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import BiomeLogo from "../../reactComponents/Images/BiomeLogo";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BiomeReportBadge from "@/reactComponents/Buttons/Badges/BiomeReportBadge";
import BiomeDiapoBadge from "@/reactComponents/Buttons/Badges/BiomeDiapoBadge";
import { biomeTechnoList } from "./technos/BiomeTechnoList";
import TechnoList from "./technos/Technos";

export default function BiomePage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify lg:text-pretty md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Biome
					</h1>
				</header>
				<section className='flex justify-center mt-5 mb-5'>
					<BiomeLogo />
				</section>

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
									Biome est une{" "}
									<strong>application web fullstack </strong>
									permettant aux utilisateurices
									d&apos;ajouter un livre via son ISBN, de
									publier un avis sur celui-ci et de consulter
									ceux de la communauté. Ce projet a été
									réalisé en autonomie dans le cadre de mon
									diplôme
									<strong>
										{" "}
										RNCP 6 Concepteur Développeur
										d&apos;Application
									</strong>
									.
								</p>
								<section className='flex flex-col gap-4 items-center '>
									<div className='flex gap-4 my-2'>
										{" "}
										<BiomeReportBadge />
										<BiomeDiapoBadge />
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
								{biomeTechnoList.map((techno, idx) => (
									<TechnoList
										key={idx}
										{...techno}
									/>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Objectifs]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col   '>
								<p>
									L’objectif principal était de créer une{" "}
									<strong>application fonctionnelle</strong>
									, permettant aux utilisateurs de créer un
									compte, ajouter des livres et avis à leur
									bibliothèque, mais également de pouvoir
									consulter celles des autres.
									<br />
									<br />
									D’un point de vue technique, ce projet
									visait à{" "}
									<strong>
										développer mes compétences en backend
									</strong>{" "}
									car je n’ai eu que des missions front au
									cours de mon alternance. J’ai ainsi pu
									améliorer mes connaissances en{" "}
									<strong>
										gestion de base de données
										relationnelles
									</strong>
									, dans l’implémentation un{" "}
									<strong>
										système d’authentification (JWT)
									</strong>{" "}
									mais aussi dans la communication entre le
									front et le back grâce à l’API.
									<br />
									<br />
									J’ai également tenu à apporter une attention
									particulière à rendre Biome{" "}
									<strong>accessible</strong> et à prendre en
									compte les{" "}
									<strong>enjeux d’écoconception</strong>.
									Cela a déterminé le choix de mes technos et
									l’aspect visuel du site.
									<br />
									<br />
									Pour plus de détails sur ce projet, mon{" "}
									<a
										href='https://docs.google.com/document/d/1_87XS-Gj1mehjreemKiT1jZnhUIqP2ZP_lK126-xy6c/edit?usp=sharing'
										target='_blank'
										className='underline'>
										rapport de projet
									</a>{" "}
									est à disposition.
								</p>
								<br />
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Résultats et futur]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col   '>
								<p>
									Les principales fonctionnalités sont
									opérationnelles et offrent une base solide.
									L’application permet aujourd’hui de{" "}
									<strong>gérer un compte utilisateur</strong>
									, d’<strong>ajouter un livre </strong>par
									son ISBN, d’écrire et de consulter des avis.
									<br />
									<br />
									Les prochaines améliorations prévues
									concernent le{" "}
									<strong>déploiement en ligne</strong>,
									l’ajout de{" "}
									<strong>tests automatisés</strong> et la
									dockerisation pour faciliter la mise en
									production et l’évolutivité.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
