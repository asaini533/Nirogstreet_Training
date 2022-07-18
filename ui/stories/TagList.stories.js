import React from "react";
import TagList from "../molecules/TagList";
export default {
	title: "Molecules/TagList",
	component: TagList,
};

const Template = (args) => <TagList {...args} />;

export const tagList = Template.bind({});
tagList.args = {
	...{
		className: 'text-black'
	},
	tags: ['MODERN', 'CONTEMPORARY', 'RUSTIC', 'CLASSIC', 'MINIMAL'],
};