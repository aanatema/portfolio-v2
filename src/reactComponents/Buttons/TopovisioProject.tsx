import { FileText } from "lucide-react";
import Link from "next/link";

export default function TopovisioProject() {
	return (
		<>
			<Link
				href='/topovisioPage'
				className='flex col-2 gap-5'>
				<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-blue' />
				<div className='flex flex-col '>
					<p className='uppercase tracking-[3]'>Topovisio</p>
					<p>Site vitrine</p>
				</div>
			</Link>
		</>
	);
}
