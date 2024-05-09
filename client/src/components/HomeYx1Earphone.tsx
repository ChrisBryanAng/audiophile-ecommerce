import { Link } from "react-router-dom";

import Yx1EarphoneImageMobile from "/assets/home/mobile/image-earphones-yx1.jpg";

const HomeYx1Earphone = () => {
	return (
		<div className="rounded-lg overflow-clip">
			<img
				alt="yx1-mobile"
				src={Yx1EarphoneImageMobile}
				className="h-full w-full object-cover block rounded-lg"
			/>
			<div className="bg-gray1 flex flex-col rounded-lg h-[200px] w-full justify-center space-y-8 mt-8 p-6">
				<p className="uppercase text-black1 font-bold text-3xl w-max tracking-wider">
					Yx1 Earphones
				</p>
				<Link
					to="/product/zx7-speaker"
					className="uppercase text-black1 hover:text-white font-bold bg-transparent hover:bg-black1 border-2 border-solid w-max border-black1 py-3 text-sm px-10"
				>
					See Product
				</Link>
			</div>
		</div>
	);
};

export default HomeYx1Earphone;
