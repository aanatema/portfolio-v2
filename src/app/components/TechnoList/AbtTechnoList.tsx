import { Separator } from "@/components/ui/separator";

export default function AbtTechnoList() {
	return (
		<>
			<div className='mt-5 mb-5 flex flex-col gap-4'>
				<header className='font-bold'>Technos</header>
				<section className='flex flex-row gap-2 uppercase h-5 overflow-scroll'>
					<p>React</p>
					<Separator orientation='vertical' />
					<p>Vite</p>
					<Separator orientation='vertical' />
					<p>Typescript</p>
					<Separator orientation='vertical' />
					<p>Jest</p>
					<Separator orientation='vertical' />
					<p>Playwright</p>
					<Separator orientation='vertical' />
					<p>Docker</p>
					<Separator orientation='vertical' />
					<p>Gitlab</p>
				</section>
				<header className='font-bold'>Outils</header>
				<section className='flex flex-row gap-2 uppercase h-5 overflow-scroll'>
					<p>Jira</p>
					<Separator orientation='vertical' />
					<p>Slack</p>
					<Separator orientation='vertical' />
					<p>Confluence</p>
				</section>
			</div>
		</>
	);
}
