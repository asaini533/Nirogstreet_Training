import React from "react";
import Icon from "../atoms/Icon";

export default {
	title: "Atoms/Icon",
	component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Basic = Template.bind({});

Basic.args = {
	...{
		className: "text-offBlackColor",
	},
	type: "solid",
	name: "eye",
};

export const Edit = Template.bind({});
Edit.args = {
	...{
		className: "text-offBlackColor",
	},
	type: "solid",
	name: "edit",
};