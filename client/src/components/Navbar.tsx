import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed z-50 bg-black2 w-full flex justify-between items-center p-6 md:p-8 text-white">
      <div className="flex justify-center items-center">
        <GiHamburgerMenu className="h-6 md:h-7 w-6 md:w-7" />
      </div>
      <div className="text-center w-full md:text-start md:pl-14 md:pb-1 font-extrabold text-white text-3xl">
        audiophile
      </div>
      <div className="flex justify-center items-center">
        <BsCart2 className="h-6 md:h-7 w-6 md:w-7" />
      </div>
    </div>
  );
};

export default Navbar;
