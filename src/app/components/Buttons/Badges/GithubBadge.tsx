import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function GithubBadge() {
	return (
		<>
			<Badge
				asChild
				variant='yellow'>
				<Link
					href='https://github.com/aanatema'
					className='uppercase'>
					GitHub
				</Link>
			</Badge>
		</>
	);
}
