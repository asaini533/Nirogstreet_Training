import SocialAction from "../molecules/SocialAction";
import React from "react";
export default {
	title: "Molecules/SocialAction",
	component: SocialAction,
};


const Template = (args) => <SocialAction {...args} />;

export const socialAction = Template.bind({});
socialAction.args = {
	likechildren: "33 Likes",
	sharechildren: "8 Shares",
	bookmarkiconClassName: '',
	likelink: 'javascript:void(0)',
	sharelink: 'javascript:void(0)',
	// iconclassName:'',
};
