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
							<Link href='/'>
								<MenubarItem> Intro</MenubarItem>
							</Link>
							<Link href='/about'>
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
							<Link href='/schoolProjectsPage'>
								<MenubarItem>Projets d&apos;école</MenubarItem>
							</Link>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<Link href='/abtPage'>
						<MenubarItem className='uppercase tracking-[3]'>
							Missions AB Tasty
						</MenubarItem>
					</Link>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
