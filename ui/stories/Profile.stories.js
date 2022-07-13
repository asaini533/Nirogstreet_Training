import React from "react";
import Profile from "../molecules/Profile";
export default {
	title: "Molecules/Profile",
	component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const profile = Template.bind({});
profile.args = {
	className: "",
	icon: 'lightbulb',
	iconClassName: '',

};
