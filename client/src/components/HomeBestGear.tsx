const HomeBestGear = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center space-y-12 md:space-y-20 lg:space-y-0 lg:gap-4 md:w-[720px] lg:w-[1370px]">
      <div className="w-full h-[300px] lg:h-[588px] lg:w-[50%] rounded-lg overflow-clip bg-header-bestgear-mobile md:bg-header-bestgear-tablet lg:bg-header-bestgear-desktop bg-center bg-no-repeat bg-cover" />
      <div className="flex flex-col md:items-center lg:items-start gap-11 md:gap-16 lg:flex-col lg:gap-10 lg:w-[50%]">
        <p className="md:w-[90%] lg:w-[80%] text-center lg:text-start text-black1 text-3xl md:text-5xl px-2 lg:px-0 font-bold uppercase tracking-wider">
          Bringing you the <span className="text-primary-1">best</span> audio
          gear
        </p>
        <p className="md:w-[90%] lg:w-[71%] md:text-base tracking-wide text-center lg:text-start font-light px-2 lg:px-0 text-black2/60">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default HomeBestGear;
