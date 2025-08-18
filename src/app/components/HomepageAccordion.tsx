import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import pp from "../../../public/pp.jpg";
import { FileText, FolderIcon } from "lucide-react";
import { Folder } from "lucide-react";

export function HomepageAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full mt-10 pr-6 pl-6'
			defaultValue='item-1'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>About</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance text-justify'>
					<section className='flex justify-center'>
						<Image
							src={pp}
							alt='Romane Boireau photo'
							className='rounded-sm h-38 w-38 md:h-76 md:w-76'
						/>
					</section>

					<section>
						<header className='font-bold'>TL:DR</header>
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

					<section>
						<header className='font-bold'>Présentation</header>
						<br />
						<p>
							Issue d’un cursus littéraire, j’ai choisi de me
							réorienter afin de m’aligner avec mon besoin de
							réaliser des tâches concrètes et utiles.
							<br />
							Mon alternance au sein d’
							<strong>AB Tasty</strong> m’a permis d’appliquer
							cette volonté dans diverses situations réelles :
							implémenter des fonctionnalités demandées par les
							clients, documenter et actualiser nos processus
							internes, améliorer les interfaces pour une
							utilisation fluidifiée.
						</p>
						<br />
						<p>
							J’apprécie beaucoup échanger sur les questions d’
							<strong>UI/UX</strong> et les prendre en
							considération dans mes projets pro et perso. Il es
							important pour moi de travailler dans une équipe
							variée où l’on peut prendre le temps d’échanger et
							de se challenger les uns les autres. J’aime
							apprendre, partager et communiquer sur le terrain
							professionnel comme personnel.
						</p>
						<br />
					</section>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance pl-10'>
					<section className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1' />
						<p>Biome</p>
					</section>
					<section className='flex col-2 gap-5'>
						<FileText className='h-8 w-8 shrink-0 stroke-1' />
						<p>Topovisio</p>
					</section>
					<section className='flex col-2 gap-5'>
						<FolderIcon className='h-8 w-8 shrink-0 stroke-1' />
						<p>Projets d&apos;école</p>
					</section>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Expérience pro</AccordionTrigger>
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
