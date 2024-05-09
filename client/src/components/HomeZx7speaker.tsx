import { Link } from "react-router-dom";

import Zx7SpeakerImageMobile from "/assets/home/mobile/image-speaker-zx7.jpg";

const HomeZx7speaker = () => {
	return (
		<div className="relative rounded-lg overflow-clip">
			<div className="absolute inset-0 pl-6 flex flex-col justify-center space-y-8">
				<p className="uppercase text-black1 font-bold text-3xl w-max tracking-wider">
					Zx7 Speaker
				</p>
				<Link
					to="/product/zx7-speaker"
					className="uppercase text-black1 hover:text-white font-bold bg-transparent hover:bg-black1 border-2 border-solid w-max border-black1 py-3 text-sm px-10"
				>
					See Product
				</Link>
			</div>
			<div>
				<img
					alt="zx7-mobile"
					src={Zx7SpeakerImageMobile}
					className="h-full w-full object-cover block"
				/>
			</div>
		</div>
	);
};

export default HomeZx7speaker;
