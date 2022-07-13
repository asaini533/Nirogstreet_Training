import React from "react";
import MainMenu from '../atoms/MainMenu';

export default {
	title: "Atoms/MainMenu",
	component: MainMenu,
};

const Template = (args) => <MainMenu {...args} />;

export const mainMenu = Template.bind({});

mainMenu.args = {
	className: "",
	MainMenu: [
		{ title: "Services", active: false, },
		{ title: "Ideas", active: true, },
		{ title: "Articles", active: true, },
	],
	href:'#'
};

