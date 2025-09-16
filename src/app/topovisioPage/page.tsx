import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TopovisioPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Topovisio
					</h1>
				</header>

				<section>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						defaultValue='item-1'>
						<AccordionItem value='item-1'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Contexte]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Ce projet est né pour répondre à la demande
									de l&apos;entreprise Topovisio qui
									souhaitait améliorer sa visibilité auprès de
									ses clients. Jusqu&apos;a présent les
									échanges se faisaient de manière directe
									mais de plus en plus de clients ont évoqués
									le besoin d&apos; avoir une plateforme leur
									permettant de consulter les services et
									coordonnées de l&apos; entreprise
									facilement.
									<br />
									De mon côté, ce projet est une expérience
									enrichissante car il me permet de répondre à
									un besoin concret, mais également d&apos;
									appliquer et d&apos; approfondir mes
									connaissances en développement frontend.
								</p>

								{/* <section className='flex justify-end'>
									<Badge
										asChild
										variant='yellow'>
										<Link
											href='https://github.com/aanatema/portfolio-v2'
											className='uppercase'>
											Le projet sur GitHub
										</Link>
									</Badge>
								</section> */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Objectifs]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Le but du projet est de concevoir un site
									vitrine clair, moderne et professionnel afin
									de présenter l’activité et les services de
									topographie proposés. Il donne accès
									facilement aux coordonnées et moyens de
									contact, améliore la visibilité et la
									crédibilité de l’entreprise.
									<br />
									Ce projet offre une base claire et solide
									qui permettra l&apos; évolution du site en
									même temps que le développement de l&apos;
									entreprise.
								</p>
								<div className='mt-5 mb-5 flex flex-col gap-4'>
									<header className='font-bold'>
										Technos envisagées
									</header>
									<section className='flex flex-row gap-2 uppercase overflow-scroll h-5'>
										<p>Vue.js</p>
										<Separator orientation='vertical' />
										<p>Nuxt</p>
										<Separator orientation='vertical' />
										<p>Typescript</p>
										<Separator orientation='vertical' />
										<p>Tailwind</p>
										<Separator orientation='vertical' />
										<p>PrimeVue</p>
									</section>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Statut]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Le projet Topovisio est actuellement en
									phase de conception. Une première étape de
									recherche et d’échanges avec le
									commanditaire a déjà eu lieu, ce qui a
									permis de préciser les besoins et d’orienter
									les choix techniques.
									<br />
									La charte graphique a été validée et
									l&apos;élaboration des maquettes est
									maintenant en cours.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
