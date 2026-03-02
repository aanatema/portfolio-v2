import { FolderOpen } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import { schoolProjects } from "./components/SchoolProjectCardList";

export default function SchoolProjectsPage() {
	return (
		<>
			<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-justify lg:text-pretty md:mx-65'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1 '>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Projets d&apos;école
					</h1>
				</header>
				<p className='mb-10 '>
					{" "}
					Projets réalisé sur des périodes de 2 semaines en équipe de
					4 (4 semaines pour Consonéa et 8 personnes) en appliquant la
					méthodologie <strong>Agile</strong>.
					<br />
					<br />
					Ils ont permis de simuler le développement de projets dans
					des conditions proches des standards entreprises (tickets,
					deadlines, technos imposées, cahier des charges,
					retrospéctive...). Rapport oral et écrit des projets à
					chaque fin de développement.
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
