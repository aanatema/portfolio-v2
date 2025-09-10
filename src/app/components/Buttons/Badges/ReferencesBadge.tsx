import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ReferencesBadge() {
	return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link
					href='#references'
					className='uppercase'>
					Contacts de références
				</Link>
			</Badge>
		</>
	);
}
