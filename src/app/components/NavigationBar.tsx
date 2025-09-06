import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";

export default function NavigationBar() {
	return (
		<nav className='flex cols-2 justify-between items-center pt-3 pb-3 pr-5 pl-5 border-b border-foreground bg-background'>
			<Link href='homepage'>
				<h1 className='text-xl font-bold uppercase tracking-wide'>
					Romane Boireau
				</h1>
			</Link>

			<NavigationMenu />
		</nav>
	);
}
