import Image from "next/image";
import ecvLogo from "../../../public/ecvLogo.svg";

export default function EcvLogo() {
	return (
		<>
			<section className='bg-ecv-purple p-2 rounded-sm self-center'>
				<Image
					src={ecvLogo}
					alt='ECV logo'
					className='h-7 w-32 md:h-20 md:w-40'
				/>
			</section>
		</>
	);
}
