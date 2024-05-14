import { Link } from "react-router-dom";

type TFooterLink = {
	label: string;
	link: string;
};

const HomeFooterLinks = ({ label, link }: TFooterLink) => {
	return (
		<>
			<Link to={link} className="uppercase tracking-[0.2em] text-white hover:text-primary-1">
				{label}
			</Link>
		</>
	);
};

export default HomeFooterLinks;
