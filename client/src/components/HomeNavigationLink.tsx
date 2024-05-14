import { Link } from "react-router-dom";

type TNavigationLink = {
  label: string;
  link: string;
};

const HomeNavigationLink = ({ label, link }: TNavigationLink) => {
  return (
    <>
      <Link
        to={link}
        className="uppercase lg:text-sm tracking-[0.2em] text-white hover:text-primary-1"
      >
        {label}
      </Link>
    </>
  );
};

export default HomeNavigationLink;
