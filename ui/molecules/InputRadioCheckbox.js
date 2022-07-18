import React from 'react';
import PropTypes from 'prop-types';
import {InputType, InputLabel} from "../atoms/index";

const InputRadioCheckbox = ({...property}) => (
  <div className={`${property.className}`} >  
    <InputType/>
    <InputLabel/>
  </div>
);

export default InputRadioCheckbox;

InputRadioCheckbox.propTypes = {
  className: PropTypes.string,
}