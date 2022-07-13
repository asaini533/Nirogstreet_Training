import React from "react";
import Tag from "../atoms/Tag";

export default {
	title: "Atoms/Tag",
	component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const square = Template.bind({});
square.args = {
	children: "Tag",
	classname: "duration-300 ease-in-out hover:bg-blue-500 hover:text-white rounded border inline-block py-1 px-2 border-gray-400 hover:border-blue-500 ml-2 text-xs-625 font-medium cursor-pointer uppercase flex items-center justify-center w-max",
	type: "square",
	name: "square",
};

export const filled = Template.bind({});
filled.args = {
	children: "MOST POPULAR",
	classname: "duration-300 ease-in-out hover:bg-blue-500 text-white hover:text-white rounded border inline-block py-1 px-2 ml-2 text-xs-625 font-medium cursor-pointer uppercase bg-grey-400 border-none flex items-center justify-center w-max",
	type: "filled",
	name: "filled",
  };
  
  export const radius = Template.bind({});
  radius.args = {
	children: "NEW",
	classname: "duration-300 ease-in-out rounded-full border border-offGrey hover:bg-offGrey hover:border-activeoffGrey inline-block py-2 px-4 ml-2 text-xs font-medium cursor-pointer uppercase text-offBlackColor font-semibold flex items-center justify-center w-max",
	type: "radius",
	name: "radius",
  };