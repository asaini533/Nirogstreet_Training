import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ children, ...property }) => {
	return (
		<span className={`${property.className}`} >{children}</span>
	);
};

export default Span;

Span.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
}