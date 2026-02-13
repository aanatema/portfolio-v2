import Link from "next/link";
import ProfilePicture from "../Images/ProfilePicture";
import GithubBadge from "../Buttons/Badges/GithubBadge";
import LinkedinBadge from "../Buttons/Badges/LinkedinBadge";
import ResumeBadge from "../Buttons/Badges/ResumeBadge";

export default function AboutSection() {
	return (
		<>
			{/* <section className='flex justify-center'>
				<ProfilePicture />
			</section> */}

			<section className=''>
				<p>
					Développeuse <strong>front-end</strong> diplômée, avec une
					première expérience d’un an en environnement SaaS et un
					intérêt pour le back, je cherche une{" "}
					<strong> alternance </strong> dans le cadre de mon{" "}
					<a href='https://www.ecv.fr/digital/mastere-developpement-web/'>
						Master Frontend
					</a>{" "}
					à l’ECV Nantes.
					<br />
					<br />
					<strong>Durée :</strong> 24 mois
					<br />
					<strong>Rythme :</strong> 4 Jr entreprise / 1 Jr école
					<br />
					<strong>Rentré :</strong> Septembre 2026
				</p>
				<section className='justify-self-end'>
					<br />

					<Link
						href='/about'
						className='underline'>
						<p>En savoir plus</p>
					</Link>
				</section>
			</section>
			<section className='flex flex-row gap-2 my-4 justify-evenly'>
				<ResumeBadge />
				<LinkedinBadge />
			</section>
		</>
	);
}
