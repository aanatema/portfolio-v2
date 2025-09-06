import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function NavigationMenu() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>
					<MenuIcon />
				</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>À propos</MenubarSubTrigger>
						<MenubarSubContent>
							<Link href='/homepage'>
								<MenubarItem> Intro</MenubarItem>
							</Link>
							<Link href='/aboutPage'>
								<MenubarItem>Présentation</MenubarItem>
							</Link>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Projets</MenubarSubTrigger>
						<MenubarSubContent>
							<Link href='/biomePage'>
								<MenubarItem> Biome</MenubarItem>
							</Link>
							<Link href='/portfolioPage'>
								<MenubarItem>Portfolio</MenubarItem>
							</Link>
							<Link href='/topovisioPage'>
								<MenubarItem>Topovisio</MenubarItem>
							</Link>
							<Link href='/'>
								<MenubarItem>Projets d&apos;école</MenubarItem>
							</Link>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Parcours</MenubarSubTrigger>
						<MenubarSubContent>
							<Link href='/'>
								<MenubarItem>AB Tasty</MenubarItem>
							</Link>
							<Link href='/'>
								<MenubarItem>Ada Tech School</MenubarItem>
							</Link>
							<Link href='/'>
								<MenubarItem>Licence LTMI</MenubarItem>
							</Link>
							<Link href='/'>
								<MenubarItem>CV</MenubarItem>
							</Link>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<Link href=''>
						<MenubarItem className='uppercase tracking-[3]'>
							Intérêts
						</MenubarItem>
					</Link>
					<MenubarSeparator />
					<Link href=''>
						<MenubarItem className='uppercase tracking-[3]'>
							Contact
						</MenubarItem>
					</Link>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
