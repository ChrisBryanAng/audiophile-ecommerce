import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

type TCategory = {
	label: string;
	image: string;
	link: string;
};

const HomeCategory = ({ label, image, link }: TCategory) => {
	return (
		<div className="relative flex flex-col pb-6 space-y-6 justify-center items-center rounded-xl">
			<div className="absolute bg-gray1 -z-50 inset-0 flex self-end h-[67%] rounded-xl" />
			<div className="relative h-32 w-24">
				<img
					alt="image-category"
					src={image}
					className="h-full w-full block object-contain rounded-xl"
				/>
				<div className="absolute inset-0 flex self-end w-full h-[20%] bg-black/60 rounded-full blur-xl" />
			</div>
			<p className="uppercase font-bold tracking-wider">{label}</p>
			<Link to={link} className="flex items-center tracking-widest text-sm">
				SHOP <FaAngleRight className="text-primary-1 ml-2" />
			</Link>
		</div>
	);
};

export default HomeCategory;
