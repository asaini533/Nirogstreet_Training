import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ onClick, children, href, target, ...property }) => {
  return (
    <a href={href} onClick={onClick} className={`${property.className}`} target={target}>{children}</a>
  )
}

export default LinkButton;

LinkButton.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.string,
}