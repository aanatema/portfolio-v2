import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
			<section className='flex gap-10 my-5'>
				<Card>
					<CardHeader>
						<div className='flex justify-center my-5'>{logo}</div>

						<CardTitle className='text-center'>{context}</CardTitle>
						<CardDescription>
							{duration && (
								<p className='text-center'>{duration}</p>
							)}{" "}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>{content}</p>
						<p>
							{techs && <div>{techs}</div>}
							{extra && (
								<div className='flex justify-end mt-6'>
									{extra}
								</div>
							)}
						</p>
					</CardContent>
				</Card>
			</section>
		</>
	);
}
