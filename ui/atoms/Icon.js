import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const Icon = ({ name, type, onClick=()=>{}, ...property }) => {
	const iconType = {
		solid: "fas",
		regular: "far",
	};
	return (
		<FontAwesomeIcon
			icon={[iconType[type], name]}
			className={`${property.className} ${onClick ? "cursor-pointer" : ""} `}
			onClick={onClick}
			onMouseEnter={property.onMouseEnter}
			onMouseLeave={property.onMouseLeave}
		></FontAwesomeIcon>
	);
};
export default Icon;

Icon.propTypes = {
	name: PropTypes.string,
	type: PropTypes.oneOf(["solid", "regular"]),
	onClick: PropTypes.func,
};

Icon.defaultProps = {
	type: "solid",
};
