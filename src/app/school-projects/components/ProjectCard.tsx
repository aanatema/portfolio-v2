import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	techs: string[];
	link?: { href: string; label: string };
}

export default function ProjectCard({
	title,
	description,
	techs,
	link,
}: ProjectCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-row gap-2  uppercase text-sm overflow-scroll h-10'>
				{techs.map((tech, idx) => (
					<span
						key={idx}
						className='flex items-center gap-2 '>
						<p>{tech}</p>
						{idx < techs.length - 1}
					</span>
				))}
			</CardContent>
			<CardFooter className='flex gap-2'>
				{link && (
					<Badge
						asChild
						variant='blue'>
						<Link
							href={link.href}
							className='uppercase'>
							{link.label}
						</Link>
					</Badge>
				)}
			</CardFooter>
		</Card>
	);
}
