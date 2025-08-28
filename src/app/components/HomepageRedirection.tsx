import Link from "next/link";

export default function HomepageRedirection() {
	return (
		<Link href='homepage'>
			<nav className='grid grid-cols-1 gap-2 justify-items-center m-5'>
				<h1 className='text-xl font-bold uppercase tracking-wide'>
					Romane Boireau
				</h1>
				<h2 className='text-md uppercase tracking-[3]'>
					Junior frontend developer
				</h2>
			</nav>
		</Link>
	);
}
