import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavigationBar from "../components/NavigationBar";

export default function portfolioPage() {
	return (
		<>
			<NavigationBar />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6 text-justify'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Portfolio
					</h1>
				</header>

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
									Cette version de mon portfolio à pour but de
									montrer l&apos;évolution de celui-ci ainsi
									que les compétences et projets que j&apos;ai
									développé depuis sa première version.
								</p>
								<br />

								<section className='flex justify-end'>
									<Badge
										asChild
										variant='yellow'>
										<Link
											href='https://github.com/aanatema/portfolio-v2'
											className='uppercase'>
											Portfolio sur GitHub
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
									Ce portfolio avait plusieurs objectifs :
									travailler sur un projet uniquement front
									après le développement fullstack de mon
									projet de diplôme et mettre à jour et en
									avant mes projets et compétences.
									<br />
									Je voulais également expérimenter avec
									<strong> Next.js </strong> et son système de
									routing basé sur les dossiers, et continuer
									à utiliser <strong> Tailwind </strong> avec
									lequel j&apos;ai apprécié travailler sur mon
									projet de{" "}
									<a
										href='/biomePage'
										className='underline'>
										diplôme
									</a>
									.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								Technos
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<section className='flex flex-row gap-2 uppercase h-5 text-sm overflow-scroll h-5'>
									<p>React</p>
									<Separator orientation='vertical' />
									<p>Next</p>
									<Separator orientation='vertical' />
									<p>Typescript</p>
									<Separator orientation='vertical' />
									<p>Tailwind</p>
									<Separator orientation='vertical' />
									<p>Shadcn/ui</p>
								</section>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								Resultats et futur
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Le portfolio présente de manière claire et
									fluide mon parcours, mes projets et
									compétences. Les prochaines améliorations
									concernent l&apos;ajout de tests
									automatisés, la mise en place d&apos;un mode
									sombre ainsi que la traduction en anglais du
									site.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
