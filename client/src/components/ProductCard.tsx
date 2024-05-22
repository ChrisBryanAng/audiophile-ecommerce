import { Link } from "react-router-dom";

type TProduct = {
  label: string;
  isNew: boolean;
  description: string;
  image: string;
  slug: string;
  category: string;
  idx: number;
};

const ProductCard = ({
  label,
  isNew,
  description,
  image,
  slug,
  category,
  idx,
}: TProduct) => {
  return (
    <div
      className={`flex flex-col ${
        idx % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:gap-28 justify-center items-center space-y-8`}
    >
      <div className="rounded-lg overflow-clip bg-gray1 md:h-[400px] md:w-full lg:h-full">
        <img src={image} className="h-full w-full block object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
        {isNew && (
          <p className="w-full text-primary-1 tracking-[0.8em] uppercase font-thin text-sm text-center lg:text-start">
            New product
          </p>
        )}
        <p className="w-[80%] md:w-[60%] text-3xl md:text-4xl uppercase text-center lg:text-start font-semibold tracking-wider">
          {label}
        </p>
        <p className="md:w-[70%] lg:w-[72%] text-sm font-thin text-black/80 text-center lg:text-start tracking-wider">
          {description}
        </p>

        <Link
          to={`/${category}/${slug}`}
          className="w-max px-8 py-4 bg-primary-1 text-white uppercase hover:bg-primary-2 text-center tracking-wider text-sm"
        >
          see product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
