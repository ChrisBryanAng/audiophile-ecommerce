import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[550px] md:min-h-[700px] lg:w-full mb-6">
      <div className="relative z-10 h-full lg:w-[80%] flex flex-col justify-center items-center lg:items-start">
        <p className="w-full mb-4 md:mb-10 text-gray1/80 font-thin text-sm md:text-base uppercase tracking-[0.8em] text-center lg:text-start">
          NEW PRODUCT
        </p>
        <p className="uppercase mb-8 md:mb-12 text-white text-4xl md:text-[4rem] md:w-[60%] tracking-wider md:leading-tight font-bold text-center lg:text-start">
          XX99 MARK II HEADPHONES
        </p>
        <p className="text-gray2/80 mb-8 md:mb-12 tracking-wide text-center lg:text-start text-lg w-[90%] md:w-[45%] lg:w-[32%]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="w-full flex justify-center items-center lg:justify-start lg:items-start">
          <Link
            to="/products/xx99-mark-two-headphones"
            className="bg-primary-1 py-3 px-8 text-sm text-white uppercase hover:bg-primary-2"
          >
            See Product
          </Link>
        </div>
      </div>
      <div
        className={`absolute inset-0 -top-28 md:min-h-[700px] min-w-full -z-50 bg-header-image-mobile md:bg-header-image-tablet lg:bg-header-image-desktop bg-center bg-no-repeat bg-cover`}
      />
    </div>
  );
};

export default Header;
