import React from "react";
import PriceTag from "../molecules/PriceTag";
export default {
	title: "Molecules/PriceTag",
	component: PriceTag,
};

const Template = (args) => <PriceTag {...args} />;

export const priceTag = Template.bind({});
priceTag.args = {
	currency: "rupee-sign",
	value: "16,400",
	linkclassName: 'text-offBlackColor ',
};
