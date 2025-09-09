import Image from "next/image";
import abtasty from "../../../../public/abtasty.png";


export default function AbtastyLogo() {
    return (
		<>
			<section className='bg-abt-blue p-2 rounded-sm self-center'>
				<Image
					src={abtasty}
					alt='AB Tasty logo'
					className='h-7 w-32 md:h-40 md:w-40'
				/>
			</section>
		</>
	);
}