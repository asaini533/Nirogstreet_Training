import React from 'react';
import PropTypes from 'prop-types';

const TabSection = ({ label, ...property }) => {
	return (
		<div className={`${property.className}`}>{label}</div>
	)
}

export default TabSection;

TabSection.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
}