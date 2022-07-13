import { useState } from "react";
import PropTypes from "prop-types";

const TextArea = ({ register, error, label, id, ...textareaProps }) => {
  const [labelTop, setLabelTop] = useState(false);
  const [focused, setFocued] = useState(false);
  return (
    <div className="relative w-full mb-3">
      <textarea
        {...register(id)}
        id={id}
        {...textareaProps}
        onFocus={() => {
          setLabelTop(true);
          setFocued(true);
        }}
        onBlur={(e) => {
          e.target.value.length === 0 && setLabelTop(false);
          setFocued(false);
        }}
        className={` ${error ? "focus:border-error" : ""} ${textareaProps.TextaresClass} p-3 focus:border-2 focus:border-primary  placeholder-iron-gray focus:outline-none border-gray-400 `}
      />
      {error && (
        <div className="text-red-500 text-xs font-semibold absolute left-1 pl-3">
          {error.message}
        </div>
      )}
      <label
        className={`${labelTop ? "labelTop" : ""
          } px-3 mx-1 transform text-base text-blueGray-500 absolute left-1  top-4 bg-white pointer-events-none transition-all duration-150 origin-top-left ease-out ${focused && error ? "text-error" : ""
          } ${focused ? "text-primary" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};
TextArea.propTypes = {
  error: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
 
};
export default TextArea;
