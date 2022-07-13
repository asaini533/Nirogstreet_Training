import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ children, ...property }) => {
    return (
        <div className={`${property.className}`}>
            {property.src ? <img onClick={property.onClick} src={property.src} width={property.width} height={property.height} className={property.imgClassName}  /> : <span className="font-bold leading-10 align-middle text-primary-600 group-hover:table-cell ">{children}</span>}
        </div>
    )
}

export default Avatar;

Avatar.propTypes = {
    className: PropTypes.string,
    imgClassName: PropTypes.string,
    children: PropTypes.string,
};
