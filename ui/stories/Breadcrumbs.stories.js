import React from "react";
import Breadcrumbs from "../atoms/Breadcrumbs";

export default {
	title: "Atoms/Breadcrumbs",
	component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const breadcrumbs = Template.bind({});

breadcrumbs.args = {
	breadcrumbs: [
		{ title: "Home", active: false, },
		{ title: "Services", active: false, },
		{ title: "Painting", active: false, },
		{ title: "Painting Consultation", active: true, },
	],

	className: "text-base font-semibold leading-6 text-xs text-grey-400",
};