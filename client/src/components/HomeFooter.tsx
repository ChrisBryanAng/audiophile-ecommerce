import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { HomeNavigationLink } from "./";
import { navLinks } from "../utils/helpers.js";

const HomeFooter = () => {
  return (
    <div className="flex flex-col mt-32 items-center md:justify-start md:items-start space-y-14 pb-12 md:px-20 lg:px-[170px] bg-black1">
      <div className="h-1 w-[15%] md:w-[11%] lg:w-[8%] bg-primary-1" />
      <div className="flex flex-col lg:flex-row justify-between md:items-start gap-11 md:gap-12 lg:items-center lg:w-full">
        <p className="text-white font-extrabold text-3xl">audiophile</p>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:gap-10 text-sm">
          {navLinks?.map((url: TNavLink) => (
            <div key={url?.label} className="w-full text-center md:text-start">
              <HomeNavigationLink label={url?.label} link={url?.link} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-14 md:gap-28 lg:justify-between lg:w-full">
        <p className="text-gray1/80 text-center md:text-start font-thin px-10 md:px-0 w-full lg:w-[42%] tracking-wide">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-4  justify-between items-center w-full lg:w-max">
          <p className="block lg:hidden text-gray1/80 tracking-wide">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex space-x-4 justify-center items-center text-white lg:self-end">
            <IoLogoFacebook className="h-8 w-8 hover:text-primary-1" />
            <IoLogoTwitter className="h-8 w-8 hover:text-primary-1" />
            <IoLogoInstagram className="h-8 w-8 hover:text-primary-1" />
          </div>
        </div>
      </div>
      <p className="hidden lg:block text-gray2/80 tracking-wide">
        Copyright 2021. All Rights Reserved
      </p>
    </div>
  );
};

export default HomeFooter;
