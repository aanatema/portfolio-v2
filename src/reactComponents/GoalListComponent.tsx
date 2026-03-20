interface GoalsListProps {
	category: string;
	items: string[];
}

export default function GoalListComponent({ category, items }: GoalsListProps) {
	return (
		<>
			<header className='font-bold mt-4'>{category}</header>
			<ul>
				{items.map((item, idx) => (
					<span key={idx}>
						<li>{item}</li>
						{idx < items.length - 1}
					</span>
				))}
			</ul>
		</>
	);
}
