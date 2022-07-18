import React from "react";
import FooterNavigation from "../molecules/FooterNavigation";

export default {
	title: "Molecules/FooterNavigation",
	component: FooterNavigation,
};

const Template = (args) => <FooterNavigation {...args} />;

export const footerNavigation = Template.bind({});

footerNavigation.args = {
	iconClassName: '',
	footerNav: [
		{ icon: "home", iconImage: "/images/home.svg", title: "Home", active: true, },
		{ icon: "user", iconImage: "/images/services.svg", title: "Services", active: false, },
		{ icon: "lightbulb", iconImage: "/images/idea.svg", title: "Idea", active: true, },
		{ icon: "search", iconImage: "/images/articles.svg", title: "Explore", active: true, },
		{ icon: "user", iconImage: "/images/profile.svg", title: "Profile", active: true, },
	],
};