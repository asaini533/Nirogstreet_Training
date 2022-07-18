import React from "react";
import Card from "../atoms/Card";
export default {
  title: "Atoms/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const card = Template.bind({});
card.args = {
  className: " h-28 w-40"
};