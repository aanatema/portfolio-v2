import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface ExperienceIntroProps {
	logo: ReactNode;
	context: ReactNode;
	duration?: string;
	content: ReactNode;
	techs?: ReactNode;
	extra?: ReactNode;
}

export default function ExperienceIntro({
	logo,
	context,
	duration,
	content,
	techs,
	extra,
}: ExperienceIntroProps) {
	return (
		<>
			{logo}
			<section className='mb-4'>
				<div className='flex flex-col items-center text-center uppercase tracking-[3]'>
					{context}
					{duration && <p className='text-center'>{duration}</p>}
				</div>
				<br />
				<div className='text-pretty'>{content}</div>
				{techs && <div>{techs}</div>}
				{extra && (
					<div className='flex justify-center mt-6'>{extra}</div>
				)}
			</section>
			<Separator />
		</>
	);
}
