import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function References() {
    return (
		<section id='references'>
			<h1 className='uppercase tracking-[3] text-center'>
				Contacts de références
			</h1>
			<br />
			<Card>
				<CardHeader>
					<CardTitle>Simen BJERKESET ANDERSEN</CardTitle>
					<CardDescription>
						Technical Team Lead à AB Tasty
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						Simen a été mon manager pendant mon alternance. Il a
						assuré mon intégration au sein de l&apos;équipe ainsi
						que mon évolution technique et professionnelle grâce aux
						projets qu&apos;il m&apos;a confié.
					</p>
				</CardContent>
				<CardFooter>
					<Badge
						asChild
						variant='blue'>
						<Link
							href='https://www.linkedin.com/in/simen-bjerkeset-andersen/'
							className='uppercase'>
							Linkedin
						</Link>
					</Badge>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Goulwen LE FUR</CardTitle>
					<CardDescription>
						Lead Product Manager à AB Tasty
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						Goulwen a été mon PM au cours de mon alternance. Il a
						choisi les sujets sur lesquels j&apos;ai été amenée à
						travailler et m&apos;a aussi fait découvrir les enjeux
						de son rôle et la relation entre nos deux métiers.
					</p>
				</CardContent>
				<CardFooter>
					<Badge
						asChild
						variant='blue'>
						<Link
							href='https://www.linkedin.com/in/goulwen-le-fur/'
							className='uppercase'>
							Linkedin
						</Link>
					</Badge>
				</CardFooter>
			</Card>
		</section>
	);
}