import { FolderOpen } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import { schoolProjects } from "./components/SchoolProjectCardList";
import GithubBadge from "../components/Buttons/Badges/GithubBadge";

export default function SchoolProjectsPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Projets d&apos;école
					</h1>
				</header>
				<p className=' pb-4 '>
					{" "}
					Tous les projets sur <GithubBadge />
				</p>
				<section className='flex flex-col gap-4 '>
					{schoolProjects.map((project, index) => (
						<ProjectCard
							key={index}
							{...project}
						/>
					))}
				</section>
			</main>
		</>
	);
}
