import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import pp from "../../../public/pp.jpg";
import abtasty from "../../../public/abtasty.png";
import { ChevronDown, FileText, FolderIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function HomepageAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full mt-5 pr-6 pl-6'
			defaultValue='item-1'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>À propos</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance text-justify'>
					<section className='flex justify-center'>
						<Image
							src={pp}
							alt='Romane Boireau photo'
							className='rounded-sm h-35 w-35 md:h-76 md:w-76'
						/>
					</section>

					<section className='mb-2'>
						<header className='font-bold'>Intro</header>
						<p className='tracking-[3] text-start uppercase'>
							[Open to work] / [Nantes]
						</p>
						<br />
						<p>
							Après deux ans de formation, dont douze mois en
							alternance, je cherche a intégrer une équipe
							dynamique et bienveillante. J&apos;ai une préférence
							marquée pour le front mais suis également ouverte a
							développer mes compétences en back.
							<br />
						</p>
					</section>
					<section className='flex flex-row gap-2 justify-end'>
						<Badge
							asChild
							variant='pink'>
							<Link href='https://drive.google.com/file/d/12MQH5S-7LpIIaAfaXz9vK91MYIKKjI1N/view?usp=drive_link'>
								CV
							</Link>
						</Badge>
						<Badge
							asChild
							variant='blue'>
							<Link
								href='https://linkedin.com/in/romane-boireau'
								className='uppercase'>
								Linkedin
							</Link>
						</Badge>
						<Badge
							asChild
							variant='yellow'>
							<Link
								href='https://github.com/aanatema'
								className='uppercase'>
								GitHub
							</Link>
						</Badge>
					</section>
					<header className='font-bold'>Frontend</header>
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
					</section>
					<Link
						href='/aboutPage'
						className='flex justify-center'>
						<ChevronDown stroke='grey' />
					</Link>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-6 text-balance pl-10'>
					<Link
						href='/biomePage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-pink self-center' />
						<div className='flex flex-col'>
							<p className='uppercase tracking-[3]'>Biome</p>
							<p>Projet de diplôme</p>
						</div>
					</Link>
					<Link
						href='/portfolioPage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-yellow' />

						<div className='flex flex-col'>
							<p className='uppercase tracking-[3]'>Portfolio</p>
							<p>Projet perso</p>
						</div>
					</Link>
					<Link
						href='/topovisioPage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-blue' />
						<div className='flex flex-col '>
							<p className='uppercase tracking-[3]'>Topovisio</p>
							<p>Site vitrine</p>
						</div>
					</Link>
					<Link
						href='/schoolPage'
						className='flex col-2 gap-5'>
						<FolderIcon className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center tracking-[3] uppercase'>
							Projets d&apos;école
						</p>
					</Link>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Expérience pro</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<section className='flex col-2 gap-10'>
						<Image
							src={abtasty}
							alt='AB Tasty logo'
							className='rounded-sm h-15 w-65 md:h-40 md:w-40 self-center'
						/>

						<section>
							<br />
							<p className='text-justify'>
								AB Tasty est une entreprise française proposant
								des solutions d&apos;A/B testing, de
								personnalisation et d&apos;analytics.
							</p>
						</section>
					</section>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-4'>
				<AccordionTrigger>Intérêts</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day
						return policy. If you&apos;re not completely satisfied,
						simply return the item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return
						shipping and full refunds processed within 48 hours of
						receiving the returned item.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-5'>
				<AccordionTrigger>Contact</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day
						return policy. If you&apos;re not completely satisfied,
						simply return the item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return
						shipping and full refunds processed within 48 hours of
						receiving the returned item.
					</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
