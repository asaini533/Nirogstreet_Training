import React from "react";
import Button from '../atoms/Button'
export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  ...{
  },
  children: 'Click Here',
  className: "text-white py-3 px-5 text-base rounded-full bg-blue-600 font-normal ",
};
