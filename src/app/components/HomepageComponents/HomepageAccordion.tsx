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
import ReferencesBadge from "../Buttons/Badges/ReferencesBadge";
import AboutSection from "./AboutSection";

export function HomepageAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full mt-5 pr-7 pl-7'
			defaultValue='item-1'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>À propos</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-2 text-balance text-justify'>
					<AboutSection />
					<div className='mt-4 mb-4'>
						<FrontendTechnoList />
						<BackendTechnoList />
					</div>

					<div className='self-center'>
						<ReferencesBadge />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Projets</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-6 text-balance m-5 ml-15 '>
					<BiomeProject />
					<PortfolioProject />
					<TopovisioProject />
					<SchoolProjects />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Parcours</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
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
				<AccordionContent className='flex flex-col gap-2 text-balance'>
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
