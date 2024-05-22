import {
  Header,
  HomeCategory,
  HomeZx9Speaker,
  HomeZx7Speaker,
  HomeYx1Earphone,
  HomeBestGear,
} from "../components";

const Home = () => {
  return (
    <div className="relative min-h-full w-full flex flex-col items-center">
      <Header />
      <HomeCategory />

      <div className="px-8 mt-28">
        <HomeZx9Speaker />
      </div>
      <div className="px-8 mt-6">
        <HomeZx7Speaker />
      </div>
      <div className="px-8 mt-6">
        <HomeYx1Earphone />
      </div>
      <div className="px-8 md:px-[68px] mt-36">
        <HomeBestGear />
      </div>
    </div>
  );
};

export default Home;
