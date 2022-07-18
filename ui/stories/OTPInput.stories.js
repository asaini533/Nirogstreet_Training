import React from "react";
import { useState } from "react";
import OTPInput from '../atoms/OTPInput'

export default {
  title: "Atoms/OTPInput",
  component: OTPInput,
};

const Template = (args) => {
  const [otpValue, setOtpValue] = useState("")
  const handleOtp = (otp) => {
    setOtpValue(otp)
  }
  return <OTPInput {...args}  otpValue={otpValue} onChange={handleOtp} />
};

export const FourDigitOtp = Template.bind({});

FourDigitOtp.args = {
  length: 4
};


