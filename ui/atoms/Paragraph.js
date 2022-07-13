import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({children, ...property}) => {
    return (
        <p className={`${property.className}`} >{children}</p>
    );
};

export default Paragraph;

Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
  }