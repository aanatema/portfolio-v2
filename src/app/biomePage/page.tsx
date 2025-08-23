import HomepageRedirection from "@/app/components/HomepageRedirection";
import { FolderOpen } from "lucide-react";

export default function BiomePage() {
    return (
        <>
            <HomepageRedirection />
			<main className='flex flex-col gap-2 justify-center mt-10 pr-6 pl-6'>
				<header className='flex flex-1 items-start justify-between border-b'>
					<FolderOpen className='h-8 w-8 shrink-0 stroke-1' />
					<h1 className='text-left text-md font-medium tracking-wide uppercase self-center'>
						Biome
					</h1>
                </header>
                </main>
        </>
        
    )
}