import Image from "next/image";
import pp from "../../../public/pp.jpg";
import { FolderOpen } from "lucide-react";
import NavigationBar from "../components/NavigationBar";

export default function AboutPage() {
	return (
		<>
			<NavigationBar />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6'>
				<header className='flex flex-1 items-start justify-between border-b'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						À propos
					</h1>
				</header>
				<section className='flex justify-center mt-10'>
					<Image
						src={pp}
						alt='Romane Boireau photo'
						className='rounded-sm h-38 w-38 md:h-76 md:w-76 '
					/>
				</section>
				<section className=''>
					<br />
					<header className='font-bold'>Présentation</header>
					<br />
					<p className='text-balance text-justify'>
						Issue d’un cursus littéraire, j’ai choisi de me
						réorienter afin de m’aligner avec mon besoin de réaliser
						des tâches concrètes et utiles.
						<br />
						Mon alternance au sein d’
						<strong>AB Tasty</strong> m’a permis d’appliquer cette
						volonté dans diverses situations réelles : implémenter
						des fonctionnalités demandées par les clients,
						documenter et actualiser nos processus internes,
						améliorer les interfaces pour une utilisation
						fluidifiée.
					</p>
					<br />
					<p className='text-balance text-justify'>
						J’apprécie beaucoup échanger sur les questions d’
						<strong>UI/UX</strong> et les prendre en considération
						dans mes projets pro et perso. Il es important pour moi
						de travailler dans une équipe variée où l’on peut
						prendre le temps d’échanger et de se challenger les uns
						les autres. J’aime apprendre, partager et communiquer
						sur le terrain professionnel comme personnel.
					</p>
					<br />
				</section>
			</main>
		</>
	);
}
