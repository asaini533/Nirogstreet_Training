import React from 'react';
import PropTypes from 'prop-types';


const Checkbox = ({...property}) => {
    return (
        <input type ="checkbox" className={`${property.className} cursor-pointer`} />
    );
};

export default Checkbox;

Checkbox.propTypes = {
    className: PropTypes.string,
};