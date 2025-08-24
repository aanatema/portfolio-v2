import HomepageRedirection from "@/app/components/HomepageRedirection";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";

export default function BiomePage() {
	return (
		<>
			<HomepageRedirection />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6 text-justify'>
				<header className='flex flex-1 items-start justify-between border-b mb-10'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Biome
					</h1>
				</header>
				<section className=''>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						defaultValue='item-1'>
						<AccordionItem value='item-1'>
							<AccordionTrigger withIcons={false}>
								Contexte
							</AccordionTrigger>
							<AccordionContent className='flex flex-col gap-4 text-balance'>
								<p>
									Biome est une application web de
									bibliothèque virtuelle développée dans le
									cadre de mon projet de fin d’études. L’idée
									est de permettre aux utilisateurs d’ajouter
									des livres à partir de leur ISBN, de
									partager leurs avis et de consulter ceux des
									autres. Le projet m’a permis de mettre en
									pratique mes compétences en React,
									TypeScript, Express, Prisma et PostgreSQL,
									avec un focus sur l’authentification et la
									gestion des données.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger withIcons={false}>
								Objectifs
							</AccordionTrigger>
							<AccordionContent className='flex flex-col gap-4 text-balance'>
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
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger withIcons={false}>
								Resultats et futur
							</AccordionTrigger>
							<AccordionContent className='flex flex-col gap-4 text-balance'>
								<p>
									L’application permet aujourd’hui de gérer un
									compte utilisateur, d’ajouter un livre par
									son ISBN, et d’écrire ou consulter des avis.
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
