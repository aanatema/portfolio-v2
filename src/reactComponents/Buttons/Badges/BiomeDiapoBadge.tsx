import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BiomeDiapoBadge() {
	return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link
					href='https://drive.google.com/file/d/1UY5lBTgjq1HEdGtcRteHPQaJEXpcKBSA/view?usp=sharing'
					target='_blank'
					className='uppercase'>
					Diapo
				</Link>
			</Badge>
		</>
	);
}
