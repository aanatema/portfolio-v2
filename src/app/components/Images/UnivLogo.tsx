import Image from "next/image";
import univLogo from "../../../../public/portfolio assets/univLogo.svg";

export default function UnivLogo() {
	return (
		<>
			<Image
				src={univLogo}
				alt='AB Tasty logo'
				className='h-15 w-30 md:h-40 md:w-40'
			/>
		</>
	);
}
