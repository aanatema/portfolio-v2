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
					target='_blank'
					className='uppercase'>
					GitHub
				</Link>
			</Badge>
		</>
	);
}
