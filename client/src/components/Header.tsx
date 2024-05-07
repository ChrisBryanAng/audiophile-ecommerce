import HeaderImage from "/assets/home/mobile/image-header.jpg";

const Header = () => {
	return (
		<div className="h-[75%]">
			<div className="relative z-10 h-full flex flex-col justify-center items-center">
				<p className="w-full mt-24 mb-4 text-gray1 text-sm uppercase tracking-[0.8em] text-center">
					NEW PRODUCT
				</p>
				<p className="uppercase mb-8 text-white text-4xl tracking-wider font-bold text-center ">
					XX99 MARK II HEADPHONES
				</p>
				<p className="text-gray2 mb-8 tracking-wide text-center text-lg w-[90%]">
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</p>
				<div className="w-full flex justify-center items-center">
					<button
						type="button"
						className="bg-primary-1 py-4 px-12 text-white uppercase hover:bg-primary-2"
					>
						See Product
					</button>
				</div>

				<div className="absolute top-0 h-max w-full -z-50">
					<img
						alt="image-header"
						src={HeaderImage}
						className="h-full w-full object-cover block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
