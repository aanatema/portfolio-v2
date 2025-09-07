
import { Badge } from "@/components/ui/badge";
import { FolderOpen } from "lucide-react";
import NavigationBar from "../components/NavigationBar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import GithubBadge from "../components/Buttons/Badges/GithubBadge";
import Link from "next/link";

export default function SchoolProjectsPage() {
	return (
		<>
			<NavigationBar />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6 text-justify'>
				<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Projets d&apos;école
					</h1>
				</header>

				<section className=''>
					<Card>
						<CardHeader>
							<CardTitle>Portfolio [Première version]</CardTitle>
							<CardDescription>
								Projet ayant pour but de présenter les projets
								réalisés pendant la formation.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Badge variant='pink'>React</Badge>
							<Badge variant='yellow'>Bootstrap</Badge>
							<Badge variant='blue'>Email JS</Badge>
						</CardContent>
						<CardFooter>
							<GithubBadge />
						</CardFooter>
					</Card>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>
									Spots & Potes [App Android]
								</CardTitle>
								<CardDescription>
									Projet d&apos;application mobile Android
									reliée à une base de données en utilisant
									Android Studio. Découverte et application de
									l&apos;architecture MVVM.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Badge variant='pink'>Android Studio</Badge>
								<Badge variant='yellow'>Kotlin</Badge>
								<Badge variant='blue'>GradleGo</Badge>
								<Badge variant='pink'>MySQL</Badge>
								<Badge variant='yellow'>RetroFit</Badge>
							</CardContent>
							<CardFooter>
								<GithubBadge />
							</CardFooter>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Consonea [Projet Fullstack]</CardTitle>
								<CardDescription>
									Création d&apos;un site e-commerce avec API
									et base de données fonctionnelles.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Badge variant='pink'>React</Badge>
								<Badge variant='yellow'>Bootstrap</Badge>
								<Badge variant='blue'>Express</Badge>
								<Badge variant='pink'>MySQL</Badge>
								<Badge variant='yellow'>Node</Badge>
							</CardContent>
							<CardFooter>
								<GithubBadge />
							</CardFooter>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>
									Kind Glyphs [Chrome Extension]
								</CardTitle>
								<CardDescription>
									Extension navigateur qui censure les mots
									choisis pour une navigation plus agréable.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Badge variant='pink'>JavaScript</Badge>
								<Badge variant='yellow'>Html</Badge>
								<Badge variant='blue'>Css</Badge>
							</CardContent>
							<CardFooter>
								<GithubBadge />
							</CardFooter>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Pico Resto [Mini Jeu]</CardTitle>
								<CardDescription>
									Mini jeu où l&apos;on prépare et sers les
									commandes des clients.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Badge variant='pink'>Pico-8</Badge>
								<Badge variant='yellow'>Lua</Badge>
							</CardContent>
							<CardFooter>
								<Badge
									asChild
									variant='blue'>
									<Link
										href='https://www.lexaloffle.com/bbs/?tid=53280'
										className='uppercase'>
										Jouer au jeu
									</Link>
								</Badge>
								<GithubBadge />
							</CardFooter>
						</Card>
					</div>
				</section>
			</main>
		</>
	);
}
