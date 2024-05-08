import { Link } from "react-router-dom";

import SpeakerImage from "/assets/image-removebg-category-speakers.png";

const HomeZx9Speaker = () => {
	return (
		<div className="relative flex flex-col bg-primary-1 rounded-xl justify-between items-center pt-6 pb-20 space-y-12">
			<div className="absolute flex left-[3.5px] top-1 border-[1px] inset-0 border-white/50 rounded-full h-[50%] w-[98%]">
				<div className="absolute top-[28px] left-[26px] border-[1px] border-white/50 rounded-full h-[85%] w-[85%]" />
			</div>
			<div className="h-56 w-52">
				<img
					alt="zx9-speaker"
					src={SpeakerImage}
					className="h-full w-full object-contain block"
				/>
			</div>
			<p className="uppercase pb-2 text-center text-white text-4xl font-bold tracking-wider">
				Zx9 <br /> speaker
			</p>
			<p className="text-center font-thin text-white tracking-wider capitalize">
				upgrade to premium speakers that are phenomenally built to deliver truly
				remarkable sound.
			</p>
			<Link
				to="/products/zx9-speaker"
				className="bg-black1 hover:bg-white py-4 px-8 text-sm text-white hover:text-black1 uppercase tracking-wider"
			>
				see product
			</Link>
		</div>
	);
};

export default HomeZx9Speaker;
