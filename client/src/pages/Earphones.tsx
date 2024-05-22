import { ProductCard, HomeBestGear, HomeCategory } from "../components";
import data from "../utils/data.json";

const Earphones = () => {
  return (
    <div className="h-max w-full flex flex-col">
      <p className="flex flex-shrink-0 uppercase text-white font-bold tracking-widest text-3xl md:text-4xl pb-8 md:pb-28 justify-center items-end bg-black2 h-[120px] md:h-[300px] lg:h-[250px] w-full">
        Earphones
      </p>
      <div className="flex flex-col gap-28 h-max w-full lg:w-[80%] self-center mt-24 px-8 lg:px-0">
        {data
          ?.filter((ep) => ep.category === "earphones")
          .reverse()
          .map((eps, idx) => (
            <div key={eps.id}>
              <ProductCard
                label={eps.name}
                isNew={eps.new}
                description={eps.description}
                image={eps.image.desktop}
                slug={eps.slug}
                category={eps.category}
                idx={idx}
              />
            </div>
          ))}
      </div>
      <div className="px-8 lg:px-0 mb-24 mt-10 flex items-center justify-center">
        <HomeCategory />
      </div>
      <div className="px-8 lg:px-0 flex my-16 items-center justify-center">
        <HomeBestGear />
      </div>
    </div>
  );
};

export default Earphones;
