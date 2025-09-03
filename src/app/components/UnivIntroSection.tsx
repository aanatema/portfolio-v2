import UnivLogo from "./Images/UnivLogo";

export default function UnivIntroSection() {
	return (
		<>
			<section className=' p-2 rounded self-center bg-card'>
				<UnivLogo />
			</section>
			<section className='mb-2'>
				<div className=' flex flex-col'>
					<p className='tracking-[3] uppercase self-center'>
						[Licence] / [3 ans]
					</p>
					<p className='text-center'>
						Langues Traductions et Médiations Interculturelles
					</p>
				</div>
				<br />
				<p className='text-justify '>
					La filière LTMI de l’Université de Poitiers forme aux
					langues étrangères et à leurs applications dans des
					contextes professionnels et interculturels. J’y ai étudié l’
					<strong>anglais </strong>, le <strong> russe </strong> et l’
					<strong>italien </strong>, en développant des compétences en
					traduction, communication et médiation entre cultures.
					<br />
					J&apos;ai beaucoup apprécié la diversité qu&apos;apporte
					l&apos;étude des cultures, littératures et civilisations
					étrangères. C&apos;est ce besoin de{" "}
					<strong> variété </strong> qui m&apos;a dirigée vers le
					développement web lors de ma réorientation.
				</p>
			</section>
		</>
	);
}
