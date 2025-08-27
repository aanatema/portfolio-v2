import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function LinkedinBadge() {
	return (
		<>
			<Badge
				asChild
				variant='blue'>
				<Link
					href='https://linkedin.com/in/romane-boireau'
					className='uppercase'>
					Linkedin
				</Link>
			</Badge>
		</>
	);
}
