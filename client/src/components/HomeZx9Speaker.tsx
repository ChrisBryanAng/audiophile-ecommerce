import { Link } from "react-router-dom";

import SpeakerImage from "/assets/home/mobile/image-speaker-zx9.png";
import CirclePattern from "/assets/home/desktop/pattern-circles.svg";

const HomeZx9Speaker = () => {
  return (
    <div className="relative isolate flex flex-col bg-primary-1 rounded-lg justify-between items-center pt-6 pb-20 space-y-9 overflow-hidden">
      <div className="absolute inset-0 md:-top-80 -z-10">
        <img src={CirclePattern} className="scale-[1.7] md:scale-110" />
      </div>
      <div className="h-56 w-52">
        <img
          alt="zx9-speaker"
          src={SpeakerImage}
          className="h-full w-full object-contain block"
        />
      </div>
      <p className="uppercase pb-2 md:pb-0 pt-4 md:pt-10 text-center text-white text-4xl md:text-5xl font-bold tracking-wider">
        Zx9 <br /> speaker
      </p>
      <p className="text-center font-thin w-[80%] md:w-[40%] text-white/80 tracking-wider capitalize">
        upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Link
        to="/products/zx9-speaker"
        className="relative z-10 bg-black1 hover:bg-white py-4 px-8 text-sm text-white hover:text-black1 uppercase tracking-wider"
      >
        see product
      </Link>
    </div>
  );
};

export default HomeZx9Speaker;
