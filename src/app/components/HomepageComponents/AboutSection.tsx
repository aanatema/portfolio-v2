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

			<section>
				<header className='font-bold'>Intro</header>
				<p className='tracking-[3] text-start uppercase'>
					[Open to work] / [Nantes]
				</p>
				<br />
				<p>
					Développeuse junior diplômée après deux ans de formation
					dont douze mois en alternance, je cherche a intégrer une
					équipe dynamique et bienveillante. J&apos;ai une préférence
					marquée pour le front, en particulier les aspects liés à
					l&apos;UI et l&apos;UX, mais suis également curieuse et
					ouverte à l&apos;idée de développer mes compétences en back.
					<br />
					Bienvenue sur mon portfolio, n&apos;hésitez pas à y faire un
					tour pour en apprendre plus !
				</p>
				<section className='justify-self-end'>
					<Link
						href='/aboutPage'
						className='underline'>
						<p>En savoir plus</p>
					</Link>
				</section>
			</section>
			<section className='flex flex-row gap-2 mt-4 mb-4 justify-evenly'>
				<ResumeBadge />
				<LinkedinBadge />
				<GithubBadge />
			</section>
		</>
	);
}
