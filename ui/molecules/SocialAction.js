import PropTypes from "prop-types";
import Paragraph from "../atoms/Paragraph";
import Icon from "../atoms/Icon";
import LinkButton from "../atoms/LinkButton";

const SocialAction = ({ className, bookmarkActive, sharechildren, href, likechildren, onClick, ...properties }) => {
	return (
		<div className="flex flex-row  w-auto  justify-between ">
			<div className="flex  ">
				<LinkButton href={properties.likelink} onClick={onClick} className="flex justify-items-center">
					<Icon name={"thumbs-up"} className={` ${properties.iconclassName} hover:text-blue-600 text-offBlackColor`} type="regular" />
					<Paragraph className={` ${properties.iconclassName} ml-1 text-xs text-grey-400 `} >{likechildren}</Paragraph>
				</LinkButton>

				<LinkButton href={properties.sharelink} onClick={onClick} className="flex ml-4 justify-items-center">
					<Icon name={"share-alt"} className={`${properties.iconclassName} hover:text-blue-600 text-offBlackColor`} />
					<Paragraph className={` ${properties.iconclassName}  ml-1 text-xs text-grey-400 `}>{sharechildren}</Paragraph>
				</LinkButton>
			</div>
			<LinkButton href={href} onClick={onClick} className="cursor-pointer">
				<Icon name={"bookmark"} type={bookmarkActive ? "solid" : "regular"} className={`${properties.bookmarkiconClassName} hover:text-blue-600 ${bookmarkActive ? "text-blue-600" : "text-offBlackColor"}`} />
			</LinkButton>
		</div>
	);
};

export default SocialAction;

SocialAction.propTypes = {
	likelink: PropTypes.string,
	sharelink: PropTypes.string,
	bookmarkActive: PropTypes.bool,
	onClick: PropTypes.func,
	sharechildren: PropTypes.string,
	likechildren: PropTypes.string,
	bookmarkiconClassName: PropTypes.string,
	// iconclassName: PropTypes.string,
};
