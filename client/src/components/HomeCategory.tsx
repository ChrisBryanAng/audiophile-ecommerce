import HomeCategoryCard from "./HomeCategoryCard";

import HeadphoneImage from "/assets/image-removebg-category-headphones.png";
import SpeakerImage from "/assets/image-removebg-category-speakers.png";
import EarphoneImage from "/assets/image-removebg-category-earphones.png";

const HomeCategory = () => {
  return (
    <div className="flex flex-col md:mt-24 md:flex-row md:justify-between md:gap-3 px-8 md:px-[68px] lg:px-0 w-full lg:w-[80%]">
      <HomeCategoryCard
        label="Headphones"
        image={HeadphoneImage}
        link="/headphones"
      />
      <HomeCategoryCard
        label="Speakers"
        image={SpeakerImage}
        link="/speakers"
      />
      <HomeCategoryCard
        label="Earphones"
        image={EarphoneImage}
        link="/earphones"
      />
    </div>
  );
};

export default HomeCategory;
