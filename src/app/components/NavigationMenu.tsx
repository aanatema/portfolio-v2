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
							<MenubarItem> Intro</MenubarItem>
							<MenubarItem>Présentation</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Projets</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem> Biome</MenubarItem>
							<MenubarItem>Portfolio</MenubarItem>
							<MenubarItem>Topovisio</MenubarItem>
							<MenubarItem>Projets d&apos;école</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Parcours</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>AB Tasty</MenubarItem>
							<MenubarItem>Ada Tech School</MenubarItem>
							<MenubarItem>Licence LTMI</MenubarItem>
							<MenubarItem>CV</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem className='uppercase tracking-[3]'>
						Intérêts
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem className='uppercase tracking-[3]'>
						Contact
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
