import { FileText } from "lucide-react";
import Link from "next/link";

export default function PortfolioProject() {
	return (
		<>
			<Link
				href='/portfolio'
				className='flex col-2 gap-5'>
				<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-yellow' />
				<div className='flex flex-col'>
					<p className='uppercase tracking-[3]'>Portfolio</p>
					<p>Projet perso</p>
				</div>
			</Link>
		</>
	);
}
