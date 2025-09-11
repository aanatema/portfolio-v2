import Image from "next/image";
import biome from "../../../../public/portfolio assets/biomeLogo.svg"

export default function BiomeLogo() {
	return (
		<>
			<Image
				src={biome}
				alt='Biome logo'
				className='h-25 w-50 md:h-40 md:w-80'
			/>
		</>
	);
}
