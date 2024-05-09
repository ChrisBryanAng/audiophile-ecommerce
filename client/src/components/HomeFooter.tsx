import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { HomeFooterLink } from "./";

const HomeFooter = () => {
	const footerLinks = [
		{ label: "Home", link: "/" },
		{ label: "Headphones", link: "/headphones" },
		{ label: "Speakers", link: "/speakers" },
		{ label: "Earphones", link: "/earphones" },
	];

	return (
		<div className="flex flex-col mt-32 items-center space-y-14 pb-12 bg-black1">
			<div className="h-1 w-[25%] bg-primary-1" />
			<p className="text-white font-extrabold text-3xl">audiophile</p>
			<div className="flex flex-col space-y-6 text-sm">
				{footerLinks?.map((url) => (
					<div key={url?.label} className="w-full text-center">
						<HomeFooterLink label={url?.label} link={url?.link} />
					</div>
				))}
			</div>
			<p className="text-gray1/80 text-center font-thin px-10 w-full tracking-wide">
				Audiophile is an all in one stop to fulfill your audio needs. We're a
				small team of music lovers and sound specialists who are devoted to
				helping you get the most out of personal audio. Come and visit our demo
				facility - we’re open 7 days a week.
			</p>
			<p className="text-gray2/80 tracking-wide">
				Copyright 2021. All Rights Reserved
			</p>
			<div className="flex space-x-4 justify-center items-center text-white">
				<IoLogoFacebook className="h-8 w-8" />
				<IoLogoTwitter className="h-8 w-8" />
				<IoLogoInstagram className="h-8 w-8" />
			</div>
		</div>
	);
};

export default HomeFooter;
