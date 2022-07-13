import OtpInput from "react-otp-input";
import PropTypes from "prop-types";

const OTPInput = ({
  otpValue,
  length,
  isNumberInput,
  seperator,
  onChange,
  errored,
  shouldAutoFocus,
}) => {
  return (
    <div className="w-full">
      <OtpInput
        value={otpValue}
        onChange={onChange}
        numInputs={length}
        separator={seperator}
        containerStyle={{
          fontSize: "16px",
          color: "black",
        }}
        hasErrored={errored}
        inputStyle={{
          width: 56,
          height: 56,
          border: "1px solid #D4D4D8",
          marginRight: 16,
          borderRadius: "4px",
        }}
        isInputNum={isNumberInput}
        focusStyle={{
          outline: "none",
          border: "1px solid #3655F2",
        }}
        errorStyle={{
          border: "1px solid red",
        }}
        shouldAutoFocus={shouldAutoFocus}
      />
    </div>
  );
};
export default OTPInput;

OTPInput.propTypes = {
  otpValue: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  seperator: PropTypes.elementType,
  errored: PropTypes.bool,
  isNumberInput: PropTypes.bool,
  shouldAutoFocus: PropTypes.bool,
};
OTPInput.defaultProps = {
  errored: false,
  isNumberInput: true,
  shouldAutoFocus: true,
};
