import { FolderIcon } from "lucide-react";
import Link from "next/link";

export default function SchoolProjects() {
	return (
		<>
			<Link
				href='/schoolProjectsPage'
				className='flex col-2 gap-5'>
				<FolderIcon className='h-8 w-8 shrink-0 stroke-1' />
				<p className='flex self-center tracking-[3] uppercase'>
					Projets d&apos;école
				</p>
			</Link>
		</>
	);
}
