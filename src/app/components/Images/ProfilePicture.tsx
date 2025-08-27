import Image from "next/image";
import pp from "../../../../public/pp.jpg";

export default function ProfilePicture() {
    return (
		<>
			<Image
				src={pp}
				alt='Romane Boireau photo'
				className='rounded-sm h-35 w-35 md:h-76 md:w-76'
			/>
		</>
	);
}