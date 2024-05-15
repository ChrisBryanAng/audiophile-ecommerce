import HomeCategoryCard from "./HomeCategoryCard";

import HeadphoneImage from "/assets/image-removebg-category-headphones.png";
import SpeakerImage from "/assets/image-removebg-category-speakers.png";
import EarphoneImage from "/assets/image-removebg-category-earphones.png";

const HomeCategory = () => {
  return (
    <>
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
    </>
  );
};

export default HomeCategory;
