import { ProductPreview, HomeBestGear, HomeCategory } from "../components";

const Product = () => {
  return (
    <div className="flex flex-col gap-28 h-max w-full px-6 md:px-8 lg:px-0 pt-8 lg:justify-center lg:items-center">
      <ProductPreview />
      <HomeCategory />
      <HomeBestGear />
    </div>
  );
};

export default Product;
