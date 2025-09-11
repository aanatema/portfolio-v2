import Image from "next/image";
import portfolio from "../../../../public/portfolio assets/portfolioV2Logo.svg";

export default function PortfolioLogo() {
	return (
		<>
			<section className='p-2 justify-self-center'>
				<Image
					src={portfolio}
					alt='Portfolio Logo'
					className='h-auto w-auto md:w-80 '
				/>
			</section>
		</>
	);
}
