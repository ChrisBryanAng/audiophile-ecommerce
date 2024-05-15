import { Link } from "react-router-dom";

import SpeakerImageDesktop from "/assets/home/desktop/image-speaker-zx9.png";
import CirclePattern from "/assets/home/desktop/pattern-circles.svg";

const HomeZx9Speaker = () => {
  return (
    <div className="relative isolate h-full lg:w-[1370px] flex flex-col lg:flex-row lg:gap-6 bg-primary-1 rounded-lg justify-between lg:justify-center items-center pt-6 lg:pt-20 pb-20 lg:pb-0 space-y-9 lg:space-y-0 overflow-hidden">
      <div className="relative lg:w-[50%] pt-10 md:pt-0">
        <div className="absolute inset-0 top-14 md:top-0 lg:-top-8 -z-10">
          <img
            src={CirclePattern}
            className="scale-[3.3] md:scale-[4.5] lg:scale-125"
          />
        </div>
        <div className="flex h-48 md:h-56 lg:h-[400px] w-44 md:w-52 lg:w-full">
          <img
            alt="zx9-speaker"
            src={SpeakerImageDesktop}
            className="h-full w-full object-contain block"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[50%] h-full space-y-6 md:space-y-7 lg:space-y-8">
        <p className="uppercase pb-0 pt-4 md:pt-10 lg:pt-4 text-center lg:text-start text-white text-4xl md:text-5xl font-bold tracking-wider">
          Zx9 <br /> speaker
        </p>
        <p className="text-center self-center lg:text-start font-thin w-[90%] md:w-[40%] lg:w-[60%] text-white/80 tracking-wider">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          to="/products/zx9-speaker"
          className="relative z-10 bg-black1 self-center w-max hover:bg-hover-button py-4 px-8 text-sm text-white uppercase tracking-wider"
        >
          see product
        </Link>
      </div>
    </div>
  );
};

export default HomeZx9Speaker;
