import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BiomeReportBadge() {
	return (
		<>
			<Badge
				asChild
				variant='blue'>
				<Link
					href='https://docs.google.com/document/d/1_87XS-Gj1mehjreemKiT1jZnhUIqP2ZP_lK126-xy6c/edit?usp=sharing'
					className='uppercase'>
					Rapport
				</Link>
			</Badge>
		</>
	);
}


