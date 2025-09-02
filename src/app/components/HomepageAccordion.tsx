import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AboutSection from "./AboutSection";
import FrontendTechnoList from "./TechnoList/FrontendTechnoList";
import BackendTechnoList from "./TechnoList/BackendTechnoList";
import BiomeProject from "./Buttons/BiomeProject";
import PortfolioProject from "./Buttons/PortfolioProject";
import TopovisioProject from "./Buttons/TopovisioProject";
import SchoolProjects from "./Buttons/SchoolProjects";
import ExperienceSection from "./ExperienceSection";

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
					<AboutSection />
					<FrontendTechnoList />
					<BackendTechnoList />
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
					<BiomeProject />
					<PortfolioProject />
					<TopovisioProject />
					<SchoolProjects />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Expérience pro</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<ExperienceSection />
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
