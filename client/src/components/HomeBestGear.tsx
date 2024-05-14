const HomeBestGear = () => {
  return (
    <div className="flex flex-col items-center space-y-12 md:space-y-20 text-center">
      <div className="w-full h-[400px] rounded-lg overflow-clip bg-header-bestgear-mobile md:bg-header-bestgear-tablet lg:bg-header-bestgear-desktop bg-center bg-no-repeat bg-cover" />
      <p className="md:w-[80%] text-center text-black1 text-3xl md:text-5xl px-2 font-bold uppercase tracking-wider">
        Bringing you the <span className="text-primary-1">best</span> audio gear
      </p>
      <p className="md:w-[80%] md:text-base tracking-wide font-light px-2 text-black2/60">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default HomeBestGear;
