import Link from "next/link";
import AdaLogo from "./Images/AdaLogo";
import { Badge } from "@/components/ui/badge";

export default function AbtIntroSection() {
	return (
		<>
			<section className=' p-2 rounded self-center bg-ada-pink'>
				<AdaLogo />
			</section>
			<section className='mb-2'>
				<p className='tracking-[3] text-start uppercase flex justify-center'>
					[Formation] / [24 mois]
				</p>
				<p className='tracking-[3] text-start uppercase flex justify-center'>
					[2023 - 2025]
				</p>
				<br />
				<p className='text-justify '>
					Une fois ma réorientation décidée, j&apos;ai entamé un
					cursus de 24 mois avec Ada Tech School dans le but
					d&apos;obtenir le titre{" "}
					<strong>
						RNCP VI développeur concepteur d&apos;applications
					</strong>
					. Le premier module est la formation théorique et pratique
					en présentiel et le deuxième correspond aux 12 mois en
					alternance.
					<br /> Cette formation met l’accent sur la pratique,
					l’autonomie, les projets collectifs tout en y intégrant les
					rituels de travail (sprints, code reviews, rétro, démos...)
					souvent utilisés en entreprise.
				</p>
				<div className='flex justify-end mb-2'>
					<Badge
						asChild
						variant='pink'>
						<Link
							href='/experiencePage'
							className='uppercase'>
							Mes projets d&apos;école
						</Link>
					</Badge>
				</div>
			</section>
		</>
	);
}
