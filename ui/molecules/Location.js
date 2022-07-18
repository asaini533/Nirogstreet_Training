import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";
import Image from "../atoms/Image";
import LinkButton from "../atoms/LinkButton";

const Location = ({ src, onClick, ...properties }) => {
	return (
		<LinkButton href="javascript:void(0)" onClick={onClick} className={`flex justify-items-center items-center w-max text-offBlackColor hover:text-primary-100  transition duration-150 ease-in-out ${properties.className}`}>
			<Image src="/images/location.svg" />
			<Paragraph className="ml-1 mr-2 font-semibold">Set location</Paragraph>
			<Icon name="chevron-down" />
		</LinkButton>
	);
};

export default Location;
Location.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string,
};
