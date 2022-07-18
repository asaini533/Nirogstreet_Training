import React from "react";
import Avatar from "../atoms/Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};
const imgUrl =
  "https://media.designcafe.com/wp-content/uploads/2021/09/11103609/outdoor-furniture-ideas-for-your-home.jpg";

const Template = (args) => <Avatar {...args} />;

export const AvatarWithIcon = Template.bind({});

AvatarWithIcon.args = {
  imgClassName:"w-full h-full object-cover",
  className: "flex justify-center items-center w-12 h-12 inline-block text-center rounded-full bg-blue-600 overflow-hidden text-white text-xl",
  src:imgUrl,
  children: "H",
};