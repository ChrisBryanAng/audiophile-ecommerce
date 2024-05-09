import BestGearImage from "/assets/shared/mobile/image-best-gear.jpg";

const HomeBestGear = () => {
	return (
		<div className="flex flex-col space-y-12 text-center">
			<div className="rounded-lg overflow-clip">
				<img
					alt="best-gear"
					src={BestGearImage}
					className="h-full w-full object-cover block"
				/>
			</div>
			<p className="text-black1 text-3xl px-2 font-bold uppercase tracking-wider">
				Bringing you the <span className="text-primary-1">best</span> audio gear
			</p>
			<p className="font-light capitalize px-2">
				Located at the heart of New York City, Audiophile is the premier store
				for high end headphones, earphones, speakers, and audio accessories. We
				have a large showroom and luxury demonstration rooms available for you
				to browse and experience a wide range of our products. Stop by our store
				to meet some of the fantastic people who make Audiophile the best place
				to buy your portable audio equipment.
			</p>
		</div>
	);
};

export default HomeBestGear;
