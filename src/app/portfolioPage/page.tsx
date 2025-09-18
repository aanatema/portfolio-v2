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
import PortfolioLogo from "../../reactComponents/Images/PortfolioLogo";

export default function portfolioPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify lg:text-pretty md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Portfolio
					</h1>
				</header>
				<section>
					<PortfolioLogo />
				</section>
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
									Ce portfolio a pour but de présenter mon{" "}
									<strong>parcours</strong>, mes{" "}
									<strong>compétences</strong> et les{" "}
									<strong>projets</strong> sur lesquels
									j&apos;ai pu travailler depuis le début de
									ma formation.
									<br />
									Il a également vocation à montrer l&apos;
									<strong>
										évolution de mes compétences
									</strong>{" "}
									en se comparant à sa{" "}
									<a
										href='https://romane-boireau.fr/accueil'
										target='blank'
										className='underline'>
										première version
									</a>
									.
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
								[Objectifs]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Ce portfolio avait plusieurs objectifs :
									travailler sur un{" "}
									<strong>projet uniquement front</strong>{" "}
									après le développement fullstack de mon
									projet de diplôme mais aussi{" "}
									<strong>mettre à jour</strong> et en avant{" "}
									<strong>mes projets</strong> et{" "}
									<strong>compétences</strong>.
									<br />
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
								[Technos]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<section className='flex flex-row gap-2 uppercase overflow-scroll h-5'>
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
								[Résultats et futur]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col text-balance'>
								<p>
									Le portfolio présente de manière claire et
									fluide mon parcours, mes projets et
									compétences.
									<br />
									Les prochaines améliorations concernent
									principalement la mise en place d&apos;un{" "}
									<strong>mode sombre</strong> ainsi que la{" "}
									<strong>traduction en anglais</strong> du
									site. Il y aura également une session de{" "}
									<strong>réfactorisation</strong> et
									d&apos;optimisation du code pour améliorer
									d&apos;avantage la qualité du code.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
