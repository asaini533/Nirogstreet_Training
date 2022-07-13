import React from "react";
import Tab from '../atoms/Tab';

export default {
	title: "Atoms/Tab",
	component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Tabs = Template.bind({});

Tabs.args = {
	className: "",
	Tab: [
		{ title: "Tab1", active: false, },
		{ title: "Tab2", active: true, },
		{ title: "Tab3", active: true, },
		{ title: "Tab4", active: true, },
	],
};

