import { Separator } from "@/components/ui/separator";

interface AbtMissionsProps {
	title: string;
	context: string;
	missions: string[];
}

export default function AbtMissions({
	title,
	context,
	missions,
}: AbtMissionsProps) {
	return (
		<section className=''>
			<h1 className='uppercase tracking-[3] text-left'>[{title}]</h1>

			<p className='text-muted-foreground text-sm text-justify'>
				{context}
			</p>
			<br />
			<ul className=' space-y-4'>
				{missions.map((mission, idx) => (
					<li key={idx}>{mission}</li>
				))}
				<br />
				<Separator />
				<br />
			</ul>
		</section>
	);
}
