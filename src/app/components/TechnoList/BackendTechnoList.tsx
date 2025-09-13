import { Separator } from "@/components/ui/separator";

export default function BackendTechnoList() {
    return (
		<>
			<header className='font-bold'>Backend</header>
			<section className='flex flex-row gap-2 mb-2 uppercase overflow-x-scroll md:overflow-x-auto h-7'>
				<p>Node</p>
				<Separator orientation='vertical' />
				<p>Express</p>
				<Separator orientation='vertical' />
				<p>Typescript</p>
				<Separator orientation='vertical' />
				<p>PostgreSQL</p>
				<Separator orientation='vertical' />
				<p>Prisma</p>
			</section>
		</>
	);
}