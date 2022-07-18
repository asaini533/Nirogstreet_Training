import React from 'react';
import PropTypes from 'prop-types';


const RadioButton = ({...property}) => {
    return (
        <input type="radio" className={`${property.className} cursor-pointer`} />
    );
};

export default RadioButton;

RadioButton.propTypes = {
    className: PropTypes.string,
};