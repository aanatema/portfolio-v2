import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ReferencesBadge() {
	return (
		<>
			<Badge
				asChild
				variant='yellow'>
				<Link
					href='/abtasty#references'
					target='_blank'
					className='uppercase'>
					Lettres de recommendations
				</Link>
			</Badge>
		</>
	);
}
