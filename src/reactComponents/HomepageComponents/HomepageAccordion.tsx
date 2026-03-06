import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import FrontendTechnoList from "../TechnoList/FrontendTechnoList";
import BackendTechnoList from "../TechnoList/BackendTechnoList";
import BiomeProject from "../Buttons/BiomeProject";
import TopovisioProject from "../Buttons/TopovisioProject";
import SchoolProjects from "../Buttons/SchoolProjects";
import FlupaJTProject from "../Buttons/FlupaJTProject";
import ResumeBadge from "../Buttons/Badges/ResumeBadge";
import Experiences from "./Experiences";
import AboutSection from "./AboutSection";
import Link from "next/link";
import { FolderIcon } from "lucide-react";

export function HomepageAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full mt-5 pr-7 pl-7'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>À propos</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-2 text-justify lg:text-pretty'>
					<AboutSection />
					<div className='my-4'>
						<FrontendTechnoList />
						<BackendTechnoList />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Expérience pro</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-2 text-justify lg:text-pretty ml-15 my-5'>
					<Link
						href='/abtasty'
						className='flex col-2 gap-6 hover:underline hover:cursor-pointer'>
						<FolderIcon className='h-8 w-8 shrink-0 stroke-1' />
						<p className='flex self-center tracking-[3] uppercase'>
							Développeuse frontend à AB Tasty
						</p>
					</Link>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-6 m-5 ml-15'>
					<FlupaJTProject />
					<TopovisioProject />
					<BiomeProject />
					<SchoolProjects />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-4'>
				<AccordionTrigger>Parcours</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 '>
					<Experiences />
					<div className='flex flex-col gap-4 items-center'>
						<p className='uppercase tracking-[3]'>
							{" "}
							[Cursus global]
						</p>

						<ResumeBadge />
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
