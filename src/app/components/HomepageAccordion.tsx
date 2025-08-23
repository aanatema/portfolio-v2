import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import pp from "../../../public/pp.jpg";
import abtasty from "../../../public/abtasty.png";
import {
	ChevronDown,
	FileText,
	FolderIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomepageAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full mt-10 pr-6 pl-6'
			defaultValue='item-1'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>À propos</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance text-justify'>
					<section className='flex justify-center'>
						<Image
							src={pp}
							alt='Romane Boireau photo'
							className='rounded-sm h-38 w-38 md:h-76 md:w-76'
						/>
					</section>

					<section className='mb-5'>
						<header className='font-bold'>Intro</header>
						<p className='tracking-[3] text-start uppercase'>
							[Open to work] / [Nantes]
						</p>
						<br />
						<p>
							Diplômée après 2 ans de formation dont 12 mois en
							alternance. Je cherche un poste à temps plein.
							Orientée front mais toujours volontaire pour élargir
							le champ de mes compétences.
						</p>
					</section>
					<Link
						href='/aboutPage'
						className='flex justify-center'>
						<ChevronDown stroke='grey' />
					</Link>
					<section className='flex flex-row gap-2 justify-between'>
						<Link href='https://drive.google.com/file/d/1TlAS29rITy7vED9qf4F7MxVS0rXzEIcy/view?usp=drive_link'>
							<Button>CV</Button>
						</Link>
						<Link href='https://github.com/aanatema'>
							<Button className='uppercase'>Github</Button>
						</Link>
					</section>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance pl-10'>
					<Link
						href='/biomePage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center'>Biome</p>
					</Link>
					<Link
						href='/portfolioPage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center'>Portfolio</p>
					</Link>
					<Link
						href='/topovisioPage'
						className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center'>Topovisio</p>
					</Link>
					<Link
						href='/schoolPage'
						className='flex col-2 gap-5'>
						<FolderIcon className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center'>Projets d&apos;école</p>
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
