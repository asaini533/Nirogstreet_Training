import React from "react";
import FileUploader from "../atoms/FileUploader";
export default {
  title: "Misc/FileUploader",
  component: FileUploader,
};

const Template = (args) => <FileUploader {...args} />;

export const fileUploader = Template.bind({});

fileUploader.args = {
  className: "text-black h-4",
  type:"file"
};
