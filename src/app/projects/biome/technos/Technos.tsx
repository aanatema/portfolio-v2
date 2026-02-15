import { Separator } from "@/components/ui/separator";

interface TechnoListProps {
	category: string;
	items: string[];
}

export default function TechnoList({ category, items }: TechnoListProps) {
	return (
		<>
			<header className='font-bold'>{category}</header>
			<section className='flex flex-row gap-4 mt-1 mb-4 sm:pb-10 uppercase overflow-x-scroll overflow-y-hidden lg:overflow-hidden h-5'>
				{items.map((item, idx) => (
					<span key={idx}>
						<p>{item}</p>
						<Separator
							orientation='vertical'
							className='h-7'
						/>
						{idx < items.length - 1}
					</span>
				))}
			</section>
		</>
	);
}
