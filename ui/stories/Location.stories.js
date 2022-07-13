import React from "react";
import Location from "../molecules/Location";
export default {
	title: "Molecules/Location",
	component: Location,
};

const Template = (args) => <Location {...args} />;

export const location = Template.bind({});
location.args = {
	className: "",
	icon: 'lightbulb',
	iconClassName: '',

};
