import React from "react";
import PropTypes from "prop-types";

const Image = ({...property}) => {
    return (
        <img onClick={property.onClick} src={property.src} width={property.width} height={property.height} className={property.className}  />
    )
}

export default Image


Image.propTypes = {
    className: PropTypes.string,
  };