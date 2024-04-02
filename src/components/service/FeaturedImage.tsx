
interface Props {
	featuredImage: string;
	featuredImage2: string;
}

export default function ({ featuredImage, featuredImage2 }: Props) {
	return (
		<div className="lg:w-1/2 px-10 pb-20">
			<div className="relative">
				<img src={featuredImage2} className="pb-[40px] pr-[40px]" alt="image" />
				<img src={featuredImage} className="left-[40px] top-[40px] absolute w-full h-full object-cover" alt="image" />
			</div>
		</div>
	)
}