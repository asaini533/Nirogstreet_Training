import React from "react";
import LinkButton from "../atoms/LinkButton";


export default {
  title: "Atoms/LinkButton",
  component: LinkButton
};

const Template = (args) => <LinkButton {...args} />;

export const linkButton = Template.bind({});

linkButton.args = {
  className: "text-sm font-medium text-blue-700",
  href: "/",
  children:"View All"
};
