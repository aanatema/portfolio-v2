import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ResumeBadge() {
    return (
		<>
			<Badge
				asChild
				variant='pink'>
				<Link
					href='https://drive.google.com/file/d/1KAfilLLKCSPM3arqB1AdsUzR0HRW19eC/view?usp=sharing'
					target='_blank'>
					CV
				</Link>
			</Badge>
		</>
	);
}