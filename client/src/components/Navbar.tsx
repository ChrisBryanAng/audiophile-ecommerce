import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="fixed z-50 bg-black2 w-full flex justify-between p-6 text-white">
			<div className="flex justify-center items-center">
				<GiHamburgerMenu className="h-6 w-6" />
			</div>
			<div className="text-center font-extrabold text-white text-3xl">
				audiophile
			</div>
			<div className="flex justify-center items-center">
				<BsCart2 className="h-6 w-6" />
			</div>
		</div>
	);
};

export default Navbar;
