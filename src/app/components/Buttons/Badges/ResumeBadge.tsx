import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ResumeBadge() {
    return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link href='https://drive.google.com/file/d/12MQH5S-7LpIIaAfaXz9vK91MYIKKjI1N/view?usp=drive_link'>
					CV
				</Link>
			</Badge>
		</>
	);
}