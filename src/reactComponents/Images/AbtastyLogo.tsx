import Image from "next/image";
import abtasty from "../../../public/logoAbTasty.png";
import Link from "next/link";

export default function AbtastyLogo() {
	return (
		<>
			<section className='bg-abt-blue p-2 rounded-sm self-center'>
				<Link href='https://www.abtasty.com/fr/'>
					<Image
						src={abtasty}
						alt='AB Tasty logo'
						className='h-7 w-32 md:h-13 md:w-55'
					/>
				</Link>
			</section>
		</>
	);
}
