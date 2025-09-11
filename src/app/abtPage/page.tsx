import { FolderOpen } from "lucide-react";
import NavigationBar from "../components/NavigationBar";
import { abtMissionsList } from "./components/AbtMissionsList";
import AbtMissions from "./components/AbtMissions";
import AbtTechnoList from "./components/AbtTechnoList";
import { Separator } from "@/components/ui/separator";
import References from "../components/HomepageComponents/References";
import ReferencesBadge from "../components/Buttons/Badges/ReferencesBadge";

export default function AbtPage() {
	return (
		<>
			<NavigationBar />
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Missions AB Tasty
					</h1>
				</header>
				<AbtTechnoList />
				<div className='self-center mb-5'>
					<ReferencesBadge />
				</div>
				<Separator />
				<section className='mt-5'>
					{abtMissionsList.map((mission, idx) => (
						<AbtMissions
							key={idx}
							{...mission}
						/>
					))}
				</section>
				<References />
			</main>
		</>
	);
}
