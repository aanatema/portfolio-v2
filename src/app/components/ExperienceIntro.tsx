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
			<section className='mb-2'>
				<div className='flex flex-col items-center text-center uppercase tracking-[3]'>
					{context}
					{duration && <p className='text-center'>{duration}</p>}
				</div>
				<br />
				<div className='text-justify'>{content}</div>
				{techs && <div className='mt-2'>{techs}</div>}
				{extra && <div className='flex justify-end mt-2'>{extra}</div>}
			</section>
		</>
	);
}
