import React from "react";
import SearchBox from "../molecules/SearchBox";

export default {
  title: "Molecules/SearchBox",
  component: SearchBox,
};

const Template = (args) => <SearchBox {...args} />;

export const searchBox = Template.bind({});
searchBox.args = {
  placeholder:'What are you looking?',
  iconClassName: 'absolute z-50 left-4 top-1/2 text-textgrey transform -translate-y-2/4 text-base md:text-lg md:text-textlightBlack',
  inputClassName:'rounded-full h-9 w-full placeholder-textgrey bg-offWhite-100 focus:outline-none py-2 text-sm pl-11 pr-3 md:h-12 overflow-ellipsis',
};