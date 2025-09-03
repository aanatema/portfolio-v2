import Image from "next/image";
import adaLogo from "../../../../public/portfolio assets/adaLogo.svg";

export default function AdaLogo() {
	return (
		<>
			<Image
				src={adaLogo}
				alt='AB Tasty logo'
				className='h-7 w-32 md:h-40 md:w-40'
			/>
		</>
	);
}
