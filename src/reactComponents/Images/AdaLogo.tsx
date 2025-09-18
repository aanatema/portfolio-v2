import Image from "next/image";
import adaLogo from "../../../public/logoAda.svg";

export default function AdaLogo() {
	return (
		<>
			<section className='bg-ada-pink p-2 rounded-sm self-center'>
				<Image
					src={adaLogo}
					alt='AB Tasty logo'
					className='h-7 w-32 md:h-20 md:w-40'
				/>
			</section>
		</>
	);
}
