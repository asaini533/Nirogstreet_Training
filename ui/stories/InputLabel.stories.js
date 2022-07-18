import React from "react";
import InputLabel from "../atoms/InputLabel";

export default {
	title: "Atoms/InputLabel",
	component: InputLabel,
};

const Template = (args) => <InputLabel {...args} />;

export const Itype = Template.bind({});
Itype.args = {
	className: "font-normal text-xs text-gray-500",
	children: "label text",
};

