import React from 'react';
import PropTypes from 'prop-types';


const InputType = ({children, ...property}) => {
    return (
        <span className={`${property.className}`}>{children}</span>
    );
};

export default InputType;

InputType.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}