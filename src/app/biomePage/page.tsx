import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import BiomeLogo from "../components/Images/BiomeLogo";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavigationBar from "../components/NavigationBar";

export default function BiomePage() {
	return (
		<>
			<NavigationBar />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6 text-justify'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Biome
					</h1>
				</header>
				<section className='flex justify-center mt-5mb-5'>
					<BiomeLogo />
				</section>

				<section className=''>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						defaultValue='item-1'>
						<AccordionItem value='item-1'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								Contexte
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Biome est une application web de
									bibliothèque virtuelle développée dans le
									cadre de mon
									<strong> projet de fin d’études</strong>.
									<br /> L’idée est de permettre aux
									utilisateurs d&apos;avoir un carnet de
									lecture en ligne : ajouter des livres à
									partir de leur ISBN, de partager leurs avis
									et de consulter ceux des autres. Le projet
									m’a permis de mettre en pratique mes
									compétences en <strong>React</strong>,
									<strong> TypeScript</strong>,
									<strong> Express</strong>,
									<strong> Prisma </strong>
									et <strong> PostgreSQL</strong>, en incluant
									un focus sur l’authentification et la
									gestion des données.
								</p>
								<br />

								<section className='flex justify-end'>
									<Badge
										asChild
										variant='yellow'>
										<Link
											href='https://github.com/aanatema/project-biome'
											className='uppercase'>
											Biome sur GitHub
										</Link>
									</Badge>
								</section>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								Objectifs
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									L’objectif principal était de créer une
									application fonctionnelle et sécurisée,
									offrant une expérience simple et intuitive
									pour rechercher et ajouter des livres. Le
									projet visait aussi à renforcer mes
									compétences en backend, notamment dans la
									gestion de bases relationnelles,
									l’implémentation de JWT pour
									l’authentification, et la communication
									entre le frontend et l’API.
								</p>
								<br />
								<header className='font-bold'>Frontend</header>
								<section className='flex flex-row gap-2 uppercase h-5 text-sm overflow-scroll'>
									<p>React</p>
									<Separator orientation='vertical' />
									<p>Typescript</p>
									<Separator orientation='vertical' />
									<p>Tailwind</p>
									<Separator orientation='vertical' />
									<p>Shadcn/ui</p>
									<Separator orientation='vertical' />
								</section>
								<br />
								<header className='font-bold'>Backend</header>
								<section className='flex flex-row gap-2 mb-2 uppercase overflow-scroll h-5'>
									<p>Node</p>
									<Separator orientation='vertical' />
									<p>Express</p>
									<Separator orientation='vertical' />
									<p>Typescript</p>
									<Separator orientation='vertical' />
									<p>PostgreSQL</p>
									<Separator orientation='vertical' />
									<p>Prisma</p>
									<Separator orientation='vertical' />
									<p>JWT</p>
									<Separator orientation='vertical' />
									<p>bcrypt</p>
								</section>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								Resultats et futur
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									L’application permet aujourd’hui de gérer un
									compte utilisateur, d’ajouter un livre par
									son ISBN, d’écrire et de consulter des avis.
									Les principales fonctionnalités sont
									opérationnelles et offrent une base solide.
									Les prochaines améliorations prévues
									concernent le déploiement en ligne, l’ajout
									de tests automatisés et la dockerisation
									pour faciliter la mise en production et
									l’évolutivité.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
