import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import BiomeLogo from "../../../reactComponents/Images/BiomeLogo";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BiomeReportBadge from "@/reactComponents/Buttons/Badges/BiomeReportBadge";
import BiomeDiapoBadge from "@/reactComponents/Buttons/Badges/BiomeDiapoBadge";
import { biomeTechnoList } from "./technos/BiomeTechnoList";
import TechnoList from "./technos/Technos";
import GoalListComponent from "./goals/GoalListComponent";
import { goalsList } from "./goals/goalsList";

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
								{goalsList.map((goal, idx) => (
									<GoalListComponent
										key={idx}
										{...goal}
									/>
								))}
								<p>
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
						<AccordionItem value='item-5'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Résultats]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col   '>
								<p>
									Renforcement de mes compétences backend
									(gestion de relations, authentification et
									sécurité des données, middleware)
									<br />
									Objectifs fonctionnels et techniques
									atteints
									<br />
									Focus sur les règles d&apos;accessibilités
									(WCAG)
									<br />
									Création d&apos;une UI cohérente et
									réutilisable
									<br />
									Planification, organisation et développement
									d&apos;un projet fullstack en autonomie
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
