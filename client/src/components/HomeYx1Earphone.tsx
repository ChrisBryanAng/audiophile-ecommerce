import { Link } from "react-router-dom";

const HomeYx1Earphone = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 h-[520px] md:h-[420px] w-[336px] md:w-[720px] lg:w-[1370px] rounded-lg overflow-clip">
      <div className="h-[450px] md:h-[420px] w-full md:w-[50%] rounded-lg bg-header-yx1-mobile md:bg-header-yx1-tablet lg:bg-header-yx1-desktop bg-cneter bg-no-repeat bg-cover" />
      <div className="bg-gray1 flex flex-col rounded-lg h-[400px] md:h-full w-full md:w-[50%] justify-center space-y-8 mt-6 md:mt-0 p-6 md:p-0">
        <p className="uppercase text-black1 font-bold text-3xl md:text-3xl w-max tracking-wider md:ml-10 lg:ml-24">
          Yx1 Earphones
        </p>
        <Link
          to="/products/yx1-earphones"
          className="uppercase text-black1 hover:text-white md:ml-10 lg:ml-24 font-bold bg-transparent hover:bg-black1 border-2 border-solid w-max border-black1 py-3 md:py-4 text-sm px-10"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default HomeYx1Earphone;
