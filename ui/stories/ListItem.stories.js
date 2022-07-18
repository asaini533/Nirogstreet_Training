import React from "react";
import ListItem from "../molecules/ListItem";

export default {
  title: "Molecules/ListItem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const listItem = Template.bind({});

listItem.args = {
  className: 'text-black',
  list:['MODERN', 'CONTEMPORARY', 'RUSTIC', 'CLASSIC', 'MINIMAL'],
};

