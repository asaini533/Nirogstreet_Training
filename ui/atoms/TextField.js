import { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({  error, label, id, ...inputProps }) => {
  const [labelTop, setLabelTop] = useState(false);
  const [focused, setFocued] = useState(false);
  return (
    <div className="relative w-full mb-3">
      <input 
        // {...register(id)}
        id={id}
        {...inputProps}
        onFocus={() => {
          setLabelTop(true);
          setFocued(true);
        }}
        onBlur={(e) => {
          e.target.value.length === 0 && setLabelTop(false);
          setFocued(false);
        }}
        className={` ${error ? "focus:border-error" : "" } ${inputProps.className} `}
      />
      {error && (
        <div className="text-red-500 text-xs font-semibold absolute left-1 pl-3">
          {error.message}
        </div>
      )}
      <label
        className={`${labelTop ? "labelTop" : ""
          } px-3 mx-1 transform text-base text-blueGray-500 absolute left-1  top-1/2 bg-white -translate-y-2/4 pointer-events-none transition-all duration-150 origin-top-left ease-out ${focused && error ? "text-error" : ""
          } ${focused ? "text-primary" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
TextField.propTypes = {
  // register: PropTypes.func.isRequired,
  error: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};