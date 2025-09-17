import Image from "next/image";
import portfolio from "../../../public/logoPortfolio.svg";

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
