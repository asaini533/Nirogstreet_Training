import React from "react";
import HeaderCard from "../molecules/HeaderCard";
export default {
	title: "Molecules/HeaderCard",
	component: HeaderCard,
};

const Template = (args) => <HeaderCard {...args} />;

export const headerCard = Template.bind({});
headerCard.args = {
	className: "w-full bg-peach",
	title: 'Card ',
	description: '1700+ items',
	icon: 'lightbulb',
	iconClassName: 'text-red-400',
	headingClassName: 'font-semibold',
};
