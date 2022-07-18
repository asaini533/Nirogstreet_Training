import React, { useState } from "react";
import PropTypes from "prop-types";
const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      {props.children}
      {active && (
        <div
          className={`absolute text-gray-200 rounded  px-4 py-2 focus:outline-none ${props.className}`}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
Tooltip.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};
