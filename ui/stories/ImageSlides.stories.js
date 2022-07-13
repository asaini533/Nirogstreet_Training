import ImageSlides from "../atoms/ImageSlides";
import React from "react";

export default {
	title: "Molecules/ImageSlides",
	component: ImageSlides,
};

const slide = [
	"/images/slider1.jpg",
	"/images/slider2.jpg",
	"/images/slider3.png",
	"/images/slider4.jpg",
];
const text1 = "3 things you do at living room";

const Template = (args) => <ImageSlides {...args} />;

export const imageSlides = Template.bind({});
imageSlides.args = {
	images: slide,
	className: 'h-85 w-full',
	delay: 5000
};
