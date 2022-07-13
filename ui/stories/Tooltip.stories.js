import React from "react";
import ToolTip from "../molecules/ToolTip";

export default {
  title: "Molecules/toolTip",
  component: ToolTip,
};
const Template = (args) => <ToolTip {...args} />;

export const toolTip = Template.bind({});
toolTip.args = {
  content: "Hello World",
  className: "bg-gray-600",
  position:'top',
  children: "🤠",
};
