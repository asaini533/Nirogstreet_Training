import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";
import Image from "../atoms/Image";
import LinkButton from "../atoms/LinkButton";

const Profile = ({ icon, src, onClick, name = "Adrian", ...properties }) => {
	return (
		<div >
			<LinkButton href="javascript:void(0)" onClick={onClick} className={`flex justify-items-center items-center text-offBlackColor transition duration-150 ease-in-out w-max ${properties.className}`}>
				<Image src="/images/usericon.svg" />
				<Paragraph className="ml-1 mr-3 font-semibold">{name}</Paragraph>
				<Icon name="chevron-down"></Icon>
			</LinkButton>
		</div>
	);
};

export default Profile;
Profile.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string,
};
