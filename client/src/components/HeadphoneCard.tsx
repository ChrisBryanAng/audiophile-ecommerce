import { Link } from "react-router-dom";

type THeadphone = {
  label: string;
  isNew: boolean;
  description: string;
  image: string;
};

const HeadphoneCard = ({ label, isNew, description, image }: THeadphone) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <div className="rounded-lg overflow-clip bg-gray1">
        <img src={image} className="h-full w-full block object-contain" />
      </div>
      {isNew && (
        <p className="w-full text-primary-1 tracking-[0.8em] uppercase font-thin text-sm text-center">
          New product
        </p>
      )}
      <p className="w-[80%] text-3xl uppercase text-center font-semibold tracking-wider">
        {label}
      </p>
      <p className="text-sm font-thin text-black/80 text-center tracking-wider">
        {description}
      </p>

      <Link
        to=""
        className="w-max px-8 py-4 bg-primary-1 text-white uppercase hover:text-primary-2 text-center tracking-wider text-sm"
      >
        see product
      </Link>
    </div>
  );
};

export default HeadphoneCard;
