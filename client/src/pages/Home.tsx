import {
  Header,
  HomeCategory,
  HomeZx9Speaker,
  HomeZx7Speaker,
  HomeYx1Earphone,
  HomeBestGear,
  HomeFooter,
} from "../components";

const Home = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-col md:mt-24 md:flex-row md:justify-between md:gap-3 lg:gap-8 px-8 md:px-[68px] lg:px-0 w-full lg:w-[1370px]">
        <HomeCategory />
      </div>
      <div className="px-8 mt-28">
        <HomeZx9Speaker />
      </div>
      <div className="px-8 mt-6">
        <HomeZx7Speaker />
      </div>
      <div className="px-8 mt-6">
        <HomeYx1Earphone />
      </div>
      <div className="px-8 mt-36">
        <HomeBestGear />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
