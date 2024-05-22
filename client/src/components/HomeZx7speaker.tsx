import { Link } from "react-router-dom";

const HomeZx7speaker = () => {
  return (
    <div className="h-full w-[336px] md:w-[720px] lg:w-[1370px] rounded-lg overflow-clip bg-header-zx7-mobile md:bg-header-zx7-tablet lg:bg-header-zx7-deskop bg-no-repeat bg-center bg-cover">
      <div className="h-[420px] w-full pl-6 md:pl-16 lg:pl-28 flex flex-col justify-center space-y-8 md:space-y-12">
        <p className="uppercase text-black1 font-bold text-3xl md:text-4xl w-max tracking-wider">
          Zx7 Speaker
        </p>
        <Link
          to="/products/zx7-speaker"
          className="uppercase text-black1 hover:text-white font-bold bg-transparent hover:bg-black1 border-2 border-solid w-max border-black1 py-3 md:py-4 text-sm px-10"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default HomeZx7speaker;
