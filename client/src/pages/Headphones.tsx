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
      <p className="flex flex-shrink-0 uppercase text-white font-bold tracking-widest text-3xl pb-8 justify-center items-end bg-black1 h-[200px] w-full">
        Headphones
      </p>
      <div className="flex flex-col gap-28 h-max w-full my-20 px-8">
        {data
          ?.filter((hp) => hp.category === "headphones")
          .reverse()
          .map((hps) => (
            <div key={hps.id}>
              <HeadphoneCard
                label={hps.name}
                isNew={hps.new}
                description={hps.description}
                image={hps.image.desktop}
              />
            </div>
          ))}
      </div>
      <div className="px-8 mb-24">
        <HomeCategory />
      </div>
      <div className="px-8">
        <HomeBestGear />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Headphones;
