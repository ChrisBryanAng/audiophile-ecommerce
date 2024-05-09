import {
	Header,
	HomeCategory,
	HomeZx9Speaker,
	HomeZx7Speaker,
} from "../components";

import HeadphoneImage from "/assets/image-removebg-category-headphones.png";
import SpeakerImage from "/assets/image-removebg-category-speakers.png";
import EarphoneImage from "/assets/image-removebg-category-earphones.png";

const Home = () => {
	return (
		<div className="relative h-full">
			<Header />
			<div className="flex flex-col px-8">
				<HomeCategory
					label="Headphones"
					image={HeadphoneImage}
					link="/headphones"
				/>
				<HomeCategory label="Speakers" image={SpeakerImage} link="/speakers" />
				<HomeCategory
					label="Earphones"
					image={EarphoneImage}
					link="/earphones"
				/>
			</div>
			<div className="px-8 mt-28">
				<HomeZx9Speaker />
			</div>
			<div className="px-8 mt-8">
				<HomeZx7Speaker />
			</div>
		</div>
	);
};

export default Home;
