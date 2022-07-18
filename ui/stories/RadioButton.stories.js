import React from "react";
import RadioButton from "../atoms/RadioButton";

export default {
  title: "Atoms/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const radioButton = Template.bind({});
radioButton.args = {
  className: "",
};

