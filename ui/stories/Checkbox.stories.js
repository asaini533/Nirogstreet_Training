import React from "react";
import Checkbox from "../atoms/Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  className: "",
};