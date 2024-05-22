import { ProductCard, HomeBestGear, HomeCategory } from "../components";
import data from "../utils/data.json";

const Headphones = () => {
  return (
    <div className="h-max w-full flex flex-col">
      <p className="flex flex-shrink-0 uppercase text-white font-bold tracking-widest text-3xl md:text-4xl pb-8 md:pb-28 justify-center items-end bg-black2 h-[120px] md:h-[300px] lg:h-[250px] w-full">
        Headphones
      </p>
      <div className="flex flex-col gap-28 h-max w-full lg:w-[80%] self-center mt-24 px-8 lg:px-0">
        {data
          ?.filter((hp) => hp.category === "headphones")
          .reverse()
          .map((hps, idx) => (
            <div key={hps.id}>
              <ProductCard
                label={hps.name}
                isNew={hps.new}
                description={hps.description}
                image={hps.image.desktop}
                slug={hps.slug}
                category={hps.category}
                idx={idx}
              />
            </div>
          ))}
      </div>
      <div className="px-8 lg:px-0 mb-24 mt-10 flex items-center justify-center">
        <HomeCategory />
      </div>
      <div className="px-8 lg:px-0 my-16 flex items-center justify-center">
        <HomeBestGear />
      </div>
    </div>
  );
};

export default Headphones;
