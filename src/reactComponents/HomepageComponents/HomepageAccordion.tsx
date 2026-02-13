import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import FrontendTechnoList from "../TechnoList/FrontendTechnoList";
import BackendTechnoList from "../TechnoList/BackendTechnoList";
import BiomeProject from "../Buttons/BiomeProject";
import PortfolioProject from "../Buttons/PortfolioProject";
import TopovisioProject from "../Buttons/TopovisioProject";
import SchoolProjects from "../Buttons/SchoolProjects";

import ResumeBadge from "../Buttons/Badges/ResumeBadge";
import Experiences from "./Experiences";
import AboutSection from "./AboutSection";

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
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-6 m-5 ml-15 '>
					<BiomeProject />
					<PortfolioProject />
					<TopovisioProject />
					<SchoolProjects />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
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
