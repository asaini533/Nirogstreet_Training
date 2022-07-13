import React from "react";
import Paragraph from "../atoms/Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const PTag= Template.bind({});
PTag.args = {
  className: "text-black text-sm",
  children: "Use me as a Paragraph Text",
};

