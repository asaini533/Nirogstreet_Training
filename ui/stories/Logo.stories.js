import React from "react";
import Logo from "../atoms/Logo";


export default {
  title: "Atoms/Logo",
  component: Logo,
};

const imgUrl =  "images/livspace_logo.svg";
const mobilelogoUrl =  "images/livespace_icon.svg";

const Template = (args) => <Logo {...args} />;

export const logo= Template.bind({});
logo.args = {
    src:imgUrl,
    mobilelogosrc:mobilelogoUrl,
    desktoplogoclassName: "hidden md:block",
    mobilelogoclassName: "inline-block md:hidden",
    width:'',
    height:'',
    alt:'LivSpace Logo',
};

