import { Separator } from "@/components/ui/separator";

export default function FrontendTechnoList() {
    return (
		<>
			<header className='font-bold'>Frontend</header>
			<section className='flex flex-row gap-2 uppercase overflow-scroll h-5'>
				<p>React</p>
				<Separator orientation='vertical' />
				<p>Next</p>
				<Separator orientation='vertical' />
				<p>Typescript</p>
				<Separator orientation='vertical' />
				<p>Tailwind</p>
				<Separator orientation='vertical' />
				<p>Shadcn/ui</p>
			</section>
		</>
	);
}