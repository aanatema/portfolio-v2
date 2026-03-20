import { FolderOpen } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { abtastyTechnosList } from "./components/AbtTechnos";
import AbtTechnoList from "./components/AbtTechnosList";
import AbtastyLogo from "@/reactComponents/Images/AbtastyLogo";
import References from "@/reactComponents/HomepageComponents/References";
import { abtMissionsList } from "./components/AbtMissionsList";
import AbtMissions from "./components/AbtMissions";

export default function AbtPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify lg:text-pretty md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Développeuse Frontend à AB Tasty{" "}
					</h1>
				</header>
				<section className='flex justify-center mt-5 mb-5'>
					<AbtastyLogo />
				</section>

				<section>
					<Accordion
						type='single'
						collapsible
						className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Environnement]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col mx-1'>
								{abtastyTechnosList.map((techno, idx) => (
									<AbtTechnoList
										key={idx}
										{...techno}
									/>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Missions]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col mx-1'>
								{abtMissionsList.map((mission, idx) => (
									<AbtMissions
										key={idx}
										{...mission}
									/>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger
								withIcons={false}
								className='border-none'>
								[Contacts de références]
							</AccordionTrigger>
							<AccordionContent className='flex flex-col mx-1'>
								<References />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>
			</main>
		</>
	);
}
