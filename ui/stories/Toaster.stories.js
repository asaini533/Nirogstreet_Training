import React from "react";
import Toaster from "../atoms/Toaster";

export default {
  title: "Misc/Toaster",
  component: Toaster,
};

const Template = (args) => <Toaster {...args} />;

export const toaster1 = Template.bind({});
toaster1.args = {
  className: "bg-yellow-100 py-2 w-full absolute left-0 top-0 text-center text-sm font-light",
  body: "This is toaster body",
};

