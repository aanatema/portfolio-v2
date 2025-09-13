import Link from "next/link";
import ProfilePicture from "../Images/ProfilePicture";
import GithubBadge from "../Buttons/Badges/GithubBadge";
import LinkedinBadge from "../Buttons/Badges/LinkedinBadge";
import ResumeBadge from "../Buttons/Badges/ResumeBadge";

export default function AboutSection() {
	return (
		<>
			<section className='flex justify-center'>
				<ProfilePicture />
			</section>

			<section className='mb-2'>
				<header className='font-bold'>Intro</header>
				<p className='tracking-[3] text-start uppercase'>
					[Open to work] / [Nantes]
				</p>
				<br />
				<p>
					Après deux ans de formation, dont douze mois en alternance,
					je cherche a intégrer une équipe dynamique et bienveillante.
					J&apos;ai une préférence marquée pour le front mais suis
					également ouverte a développer mes compétences en back.
					<br />
				</p>
				<section>
					<Link
						href='/aboutPage'
						className='underline'>
						<p>Lire plus</p>
					</Link>
				</section>
			</section>
			<section className='flex flex-row gap-2 justify-center'>
				<ResumeBadge />
				<LinkedinBadge />
				<GithubBadge />
			</section>
		</>
	);
}
