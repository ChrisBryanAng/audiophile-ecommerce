import HomeNavigationLink from "./HomeNavigationLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";

import { navLinks } from "../utils/helpers";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full lg:w-[80%] flex justify-between items-center p-6 md:p-8 lg:p-0 lg:py-8 text-white lg:border-b-[1px] lg:border-b-solid lg:border-b-gray-700 bg-transparent">
      <div className="lg:hidden flex justify-center items-center">
        <GiHamburgerMenu className="h-6 md:h-7 w-6 md:w-7" />
      </div>
      <div className="text-center w-full lg:w-fit md:text-start md:pl-14 lg:pl-0 md:pb-1 font-extrabold text-white text-3xl">
        audiophile
      </div>
      <div className="hidden lg:flex gap-8 -ml-32 uppercase">
        {navLinks?.map((url: TNavLink) => (
          <div key={url?.label} className="w-full text-center md:text-start">
            <HomeNavigationLink label={url?.label} link={url?.link} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <BsCart2 className="h-6 md:h-7 w-6 md:w-7" />
      </div>
    </div>
  );
};

export default Navbar;
