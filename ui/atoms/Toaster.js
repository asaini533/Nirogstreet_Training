import React from 'react';
import PropTypes from 'prop-types';

const Toaster = ({ body, ...property }) => {
    return (
        <div className={`${property.className}`}>
            {body}
        </div>
    )
}
export default Toaster;

Toaster.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}
