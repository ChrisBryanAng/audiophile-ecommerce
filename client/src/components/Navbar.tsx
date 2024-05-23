import { useEffect } from "react";
import HomeNavigationLink from "./HomeNavigationLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";

import { navLinks } from "../utils/helpers";

type TCartModal = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: TCartModal) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCartModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 w-full lg:w-[80%] h-full flex justify-between items-center p-6 md:p-8 lg:p-0 lg:py-8 text-white lg:border-b-[1px] lg:border-b-solid lg:border-b-gray-700 bg-black2">
      <div className="lg:hidden flex justify-center items-center">
        <GiHamburgerMenu className="h-6 md:h-7 w-6 md:w-7 cursor-pointer" />
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
        <BsCart2
          className="h-6 md:h-7 w-6 md:w-7 cursor-pointer"
          onClick={handleCartModal}
        />
      </div>
    </div>
  );
};

export default Navbar;
