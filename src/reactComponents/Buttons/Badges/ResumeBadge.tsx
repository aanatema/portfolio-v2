import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ResumeBadge() {
    return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link href='https://drive.google.com/file/d/1UVDIrrWzIw7hXvhiFd0elewsjYQMmNZA/view?usp=sharing'>
					CV
				</Link>
			</Badge>
		</>
	);
}