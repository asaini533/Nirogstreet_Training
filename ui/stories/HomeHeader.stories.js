import HomeHeader from "../components/HomeHeader";
import React from "react";
export default {
	title: "Components /HomeHeader",
	component: HomeHeader,
};

const Template = (args) => <HomeHeader {...args} />;

export const homeHeader = Template.bind({});
homeHeader.args = {
	...{
		className: "",
	},
};
