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

			<section className='pt-5'>
				<p className='tracking-[2] text-start uppercase'>
					[Open to work] / [Nantes]
				</p>
				<br />
				<p>
					Développeuse junior diplômée après deux ans de formation
					dont un an en <strong> alternance </strong>, j’ai développé
					une vraie affinité pour le <strong>front-end</strong>,
					notamment tout ce qui touche à l’UI et l’UX. Naturellement
					<strong> curieuse</strong>, j&apos;aime découvrir de
					nouveaux domaines et suis ouverte à renforcer mes
					compétences backend.
					<br />
					Aujourd&apos;hui, je cherche à intégrer une{" "}
					<strong> équipe dynamique </strong>
					et <strong> bienveillante </strong> dans laquelle je
					pourrais m&apos;investir en continuant d&apos;apprendre.
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
				<GithubBadge />
			</section>
		</>
	);
}
