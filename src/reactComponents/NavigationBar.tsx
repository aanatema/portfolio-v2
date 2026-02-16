import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";

export default function NavigationBar() {
	return (
		<nav className=' m-7 pb-1 border-b border-foreground bg-background'>
			<section className='flex cols-2 justify-between items-center'>
				<Link href='/'>
					<h1 className='text-xl font-bold uppercase tracking-[3]'>
						Romane Boireau
					</h1>
				</Link>

				<NavigationMenu />
			</section>
			<p className='text-sm text-muted-foreground uppercase '>
				Développeuse frontend
			</p>
		</nav>
	);
}
