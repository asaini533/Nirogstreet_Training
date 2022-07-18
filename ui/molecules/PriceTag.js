import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";

const PriceTag = ({ currency="rupee-sign", value, isnoteShow, ...properties }) => {
	return (
		<div className="flex flex-row  w-auto p-1 ">
			<div className="flex  w-max justify-between align-middle ">
				<div className={`flex justify-center items-center font-semibold text-sm  ${properties.linkclassName}`}>
					<Icon name={currency} />
					<Paragraph> {value}</Paragraph>
					{isnoteShow && (
						<Icon name={"info-circle"} className="ml-1" />
					)}
				</div>
			</div>
		</div>
	);
};

export default PriceTag;

PriceTag.propTypes = {
	currency: PropTypes.string,
	value: PropTypes.string,
	linkclassName: PropTypes.string,
	isnoteShow: PropTypes.bool,
};
