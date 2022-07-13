import React from "react";
import Span from "../atoms/Span";

export default {
  title: "Atoms/Span",
  component: Span,
};

const Template = (args) => <Span {...args} />;

export const span = Template.bind({});
span.args = {
  className: "text-black  text-sm",
  children: "Text content",
  size:"text-sm",
};

