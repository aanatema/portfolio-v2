import LinkedinBadge from "@/reactComponents/Buttons/Badges/LinkedinBadge";
import { FolderOpen } from "lucide-react";

export default function Contact() {
	return (
		<main className='flex flex-col gap-2 justify-center mx-7 my-10 text-pretty lg:text-pretty md:mx-65'>
			<header className='flex flex-1 items-start justify-between border-b border-foreground mb-5 pb-1'>
				<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
				<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
					Contact
				</h1>
			</header>

			<br />
			<section className='flex flex-col gap-10 text-center'>
				<div className=''>
					<p className='uppercase'>[Par mail]</p>
					<p className=''>romane.boireau.dev@gmail.com</p>
				</div>
				<div>
					<p className='uppercase pb-2'>[Par message]</p>
					<LinkedinBadge />
				</div>
			</section>
		</main>
	);
}
