import Story from "../molecules/StoryCard";
import React from "react";
export default {
  title: "Molecules/StoryCard",
  component: Story,
};
const imgUrl =
  "https://media.designcafe.com/wp-content/uploads/2021/09/11103609/outdoor-furniture-ideas-for-your-home.jpg";
const text1 = "3 things you do at living room";

const Template = (args) => <Story {...args} />;

export const storyCard = Template.bind({});
storyCard.args = {
  header: text1,
  url: imgUrl, 
  headingClass :'text-white text-sm'
};
