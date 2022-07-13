import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";

const HeaderCard = ({ color, icon, title, description, ...properties }) => {
	return (
		<div className="w-full">
			<div className={`flex bg-peach rounded-xl px-5 cursor-pointer p-4 ${properties.className}`}>
				<Icon name={icon} className={`text-xl mt-1.5 ${properties.iconClassName}`}></Icon>
				<div className="flex flex-col  ml-2">
					<Heading type="h4" className={properties.headingClassName}>
						{title}
					</Heading>
					<Paragraph className="font-light text-sm mt-1.2">{description}</Paragraph>
				</div>
			</div>
		</div>
	);
};

export default HeaderCard;
HeaderCard.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	className:PropTypes.string,
};
