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
					<Link href='/abtasty'>
						<MenubarItem className='uppercase tracking-[3]'>
							Alternance AB Tasty
						</MenubarItem>
					</Link>
					<MenubarSeparator />
					<Link href='/abtasty#references'>
						<MenubarItem className='uppercase tracking-[3]'>
							Références
						</MenubarItem>
					</Link>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Projets</MenubarSubTrigger>
						<MenubarSubContent>
							<Link href='/biome'>
								<MenubarItem> Biome</MenubarItem>
							</Link>
							<Link href='/esg17'>
								<MenubarItem>ESG17</MenubarItem>
							</Link>
							<Link href='/flupaJT'>
								<MenubarItem>
									Flupa, Journée thématique
								</MenubarItem>
							</Link>
							<Link href='/topovisio'>
								<MenubarItem>Topovisio</MenubarItem>
							</Link>
							<Link href='/school-projects'>
								<MenubarItem>Projets école</MenubarItem>
							</Link>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<Link href='/contact'>
						<MenubarItem className='uppercase tracking-[3]'>
							Contact
						</MenubarItem>
					</Link>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
