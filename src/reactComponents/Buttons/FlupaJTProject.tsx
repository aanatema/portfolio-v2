import { FileText } from "lucide-react";
import Link from "next/link";

export default function FlupaJTProject() {
	return (
		<>
			<Link
				href='/flupaJT'
				className='flex col-2 gap-5 hover:underline hover:cursor-pointer'>
				<FileText className='h-8 w-8 shrink-0 stroke-1 stroke-yellow' />
				<div className='flex flex-col '>
					<p className='uppercase tracking-[3]'>
						Journée thématique : UX en Résonnance
					</p>
					<p>
						Site pour un des événements de l&apos;association FLUPA{" "}
					</p>
				</div>
			</Link>
		</>
	);
}
