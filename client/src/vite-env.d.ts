/// <reference types="vite/client" />
declare module "*";

type TNavLink = {
  label: string;
  link: string;
};

interface IProducts {
  product: {
    id: number;
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    category: string;
    categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
      quantity: number;
      item: string;
    }[];
    gallery: {
      first: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      second: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      third: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    };
    others: {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    }[];
  };
}
[];

interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}
