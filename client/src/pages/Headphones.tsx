import {
  HeadphoneCard,
  HomeFooter,
  HomeBestGear,
  HomeCategory,
} from "../components";
import data from "../utils/data.json";

const Headphones = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <p className="flex flex-shrink-0 uppercase text-white font-bold tracking-widest text-3xl md:text-4xl pb-8 md:pb-28 justify-center items-end bg-black1 h-[200px] md:h-[350px] lg:h-[400px] w-full">
        Headphones
      </p>
      <div className="flex flex-col gap-28 h-max w-full lg:w-[80%] self-center mt-24 px-8 lg:px-0">
        {data
          ?.filter((hp) => hp.category === "headphones")
          .reverse()
          .map((hps, idx) => (
            <div key={hps.id}>
              <HeadphoneCard
                label={hps.name}
                isNew={hps.new}
                description={hps.description}
                image={hps.image.desktop}
                idx={idx}
              />
            </div>
          ))}
      </div>
      <div className="px-8 lg:px-0 mb-24 flex items-center justify-center">
        <HomeCategory />
      </div>
      <div className="px-8 lg:px-0 flex items-center justify-center">
        <HomeBestGear />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Headphones;
