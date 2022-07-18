import React from 'react';
import PropTypes from 'prop-types';


const Tag = ({ children, name, type, isActiveDot, onClick, ...property }) => {
	const tagType = {
		square: "square",
		filled: "filled",
		radius: "radius",
	};
	return (
		<div tag={[tagType[type], name]} onClick={onClick} className={property.classname}>{children}
		{isActiveDot && (
          <div className=" w-2 h-2  bg-orange-50 rounded-full ml-1"></div>
        )}
		</div>
	);
};

export default Tag;


Tag.propTypes = {
	isActiveDot: PropTypes.bool,
	classname: PropTypes.string,
	type: PropTypes.oneOf(["square", "filled", "radius"]),
	onClick: PropTypes.func,
	children: PropTypes.string
};

Tag.defaultProps = {
	type: "square",
};