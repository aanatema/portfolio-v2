import Image from "next/image";
import univLogo from "../../../public/logoUniv.svg";

export default function UnivLogo() {
	return (
		<>
			<section className='bg-card p-2 rounded-sm self-center'>
				<Image
					src={univLogo}
					alt='AB Tasty logo'
					className='h-15 w-30 md:h-30 md:w-40'
				/>
			</section>
		</>
	);
}
