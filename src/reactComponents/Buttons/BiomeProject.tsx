import { FileText } from "lucide-react";
import Link from "next/link";

export default function BiomeProject() {
	return (
		<>
			<Link
				href='/biomePage'
				className='flex col-2 gap-5'>
				<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-pink' />
				<div className='flex flex-col'>
					<p className='uppercase tracking-[3]'>Biome</p>
					<p>Projet de diplôme</p>
				</div>
			</Link>
		</>
	);
}
