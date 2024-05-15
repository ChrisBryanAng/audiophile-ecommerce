import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

type TCategory = {
  label: string;
  image: string;
  link: string;
};

const HomeCategoryCard = ({ label, image, link }: TCategory) => {
  return (
    <div className="relative isolate flex flex-col w-full lg:w-[400px] pb-6 space-y-6 justify-center items-center rounded-lg">
      <div className="absolute bg-gray1 -z-50 inset-0 flex self-end h-[67%] w-full rounded-xl" />
      <div className="relative h-32 lg:h-36 w-24 lg:w-28">
        <img
          alt="image-category"
          src={image}
          className="h-full w-full block object-contain rounded-xl"
        />
        <div className="absolute inset-0 pointer-events-none -z-10 flex self-end w-full h-[20%] bg-black/60 rounded-full blur-xl" />
      </div>
      <p className="uppercase font-bold tracking-wider md:pt-4">{label}</p>
      <Link
        to={link}
        className="flex uppercase relative z-10 items-center text-black1/60 hover:text-primary-1 tracking-widest text-sm"
      >
        SHOP <FaAngleRight className="text-primary-1 ml-2" />
      </Link>
    </div>
  );
};

export default HomeCategoryCard;
