import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";

export default function NavigationBar() {
	return (
		<nav className='flex cols-2 justify-between items-center m-6 border-b border-foreground bg-background'>
			<Link href='homepage'>
				<h1 className='text-xl font-bold uppercase tracking-[3]'>
					Romane Boireau
				</h1>
			</Link>

			<NavigationMenu />
		</nav>
	);
}
