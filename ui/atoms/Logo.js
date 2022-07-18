import React from "react";
import PropTypes from "prop-types";

const Logo = ({...property}) => {
    return (
        <div className="logo_wrap">
            <img onClick={property.onClick} src={property.src} width={property.width} height={property.height} alt={property.alt} className={property.desktoplogoclassName}/>
            <img onClick={property.onClick} src={property.mobilelogosrc} width={property.width} height={property.height} alt={property.alt} className={property.mobilelogoclassName}  />
        </div>
    )
}

export default Logo


Logo.propTypes = {
    desktoplogoclassName: PropTypes.string,
    mobilelogoclassName: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
  };