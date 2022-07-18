import Heading from "../atoms/Heading";
import React from "react";
export default {
	title: "Atoms /Heading",
	component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const h1 = Template.bind({});
h1.args = {
	...{
		className: "text-black font-bold text-3xl",
	},
	type: "h1",
	children: "Heading content",
};
