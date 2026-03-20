import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ResumeBadge() {
    return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link
					href='https://drive.google.com/file/d/14fCU7sWwS32YraKru3EUvPvairyf7kZ4/view?usp=sharing'
					target='_blank'>
					CV
				</Link>
			</Badge>
		</>
	);
}