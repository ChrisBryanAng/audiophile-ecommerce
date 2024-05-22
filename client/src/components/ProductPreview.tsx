import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../utils/data.json";

const ProductPreview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filteredProduct, setFilteredProduct] = useState<IProduct>();

  useEffect(() => {
    const product = data?.find((prd) => prd.slug === id);
    setFilteredProduct(product);
  }, [id]);

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full w-full lg:w-[80%] gap-24">
      <button
        onClick={handlePreviousPage}
        className="capitalize hover:underline text-start -mb-16 text-black1/80 hover:text-primary-1"
      >
        Go back
      </button>

      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="h-[350px] md:h-[480px] w-full md:w-[500px] bg-gray1 rounded-lg overflow-clip">
          <img
            src={filteredProduct?.image.desktop}
            alt="zx9-speaker"
            className="h-full w-full object-contain block"
          />
        </div>

        <div className="flex flex-col gap-8 md:justify-center md:w-full">
          {filteredProduct?.new && (
            <p className="uppercase text-sm text-primary-1 tracking-[0.7em] font-thin">
              New Product
            </p>
          )}
          <p className="uppercase font-bold text-3xl tracking-widest">
            {filteredProduct?.name}
          </p>
          <p className="text-black1/80 font-thin tracking-wider leading-relaxed">
            {filteredProduct?.description}
          </p>
          <p className="font-semibold text-lg tracking-widest">
            $ {filteredProduct?.price}
          </p>
          <div className="flex gap-4">
            <div className="flex bg-gray1">
              <button type="button" className="w-10 text-black1 text-center">
                -
              </button>
              <p className="w-10 text-black1 items-center flex justify-center">
                1
              </p>
              <button type="button" className="w-10 text-black1 text-center">
                +
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  console.log("Added to Cart!");
                }}
                className="uppercase bg-primary-1 hover:bg-primary-2 text-white tracking-widest text-sm text-center px-6 py-3"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** Features */}
      <div className="flex flex-col gap-6">
        <p className="font-bold text-2xl md:text-3xl tracking-wider uppercase">
          Features
        </p>
        <p className="font-thin tracking-wider leading-relaxed whitespace-pre-line">
          {filteredProduct?.features}
        </p>
      </div>

      {/* In the Box */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
        <p className="uppercase text-2xl md:text-3xl font-semibold tracking-wide md:w-[500px]">
          in the box
        </p>
        <div className="flex flex-col gap-3 md:w-full">
          {filteredProduct?.includes.map((incl, idx) => (
            <p key={idx} className="font-thin tracking-wider">
              <span className="text-primary-1 mr-6 font-semibold">
                {incl.quantity}x
              </span>
              {incl.item}
            </p>
          ))}
        </div>
      </div>

      {/* images */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 h-[400px] w-full rounded-lg overflow-clip">
          <img
            src={filteredProduct?.gallery.first.desktop}
            className="h-[50%] w-full object-cover block rounded-lg"
          />
          <img
            src={filteredProduct?.gallery.second.desktop}
            className="h-[50%] w-full object-cover block rounded-lg"
          />
        </div>
        <div className="h-[400px] w-full rounded-lg overflow-clip">
          <img
            src={filteredProduct?.gallery.third.desktop}
            className="h-full w-full object-cover block"
          />
        </div>
      </div>

      {/* suggestions */}
      <div className="flex flex-col gap-8 w-full justify-center items-center">
        <p className="uppercase w-full text-2xl font-semibold tracking-wider text-center">
          You may also like
        </p>
        <div className="flex flex-col md:flex-row w-full gap-3">
          {filteredProduct?.others.map((sugg, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full gap-8 justify-center items-center"
            >
              <div className="h-[150px] md:h-[350px] w-full bg-gray1 rounded-lg overflow-clip">
                <img
                  src={sugg.image.desktop}
                  alt=""
                  className="h-full w-full object-contain block rounded-lg"
                />
              </div>
              <p className="tracking-wider text-2xl font-semibold uppercase">
                {sugg.name}
              </p>
              <Link
                to={`/${filteredProduct.category}/${sugg.slug}`}
                className="uppercase text-sm w-fit px-5 py-3 bg-primary-1 hover:bg-primary-2 text-white tracking-wider"
              >
                See product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
