import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ReferencesBadge() {
	return (
		<>
			<Badge
				asChild
				variant='yellow'>
				<Link
					href='/abtasty'
					className='uppercase'>
					Recommandations
				</Link>
			</Badge>
		</>
	);
}
