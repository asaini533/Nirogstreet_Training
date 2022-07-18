import React from "react";
import Image from "../atoms/Image";

export default {
  title: "Atoms/Image",
  component: Image,
};

const imgUrl =
  "https://media.designcafe.com/wp-content/uploads/2021/09/11103609/outdoor-furniture-ideas-for-your-home.jpg";

const Template = (args) => <Image {...args} />;

export const image= Template.bind({});
image.args = {
    src:imgUrl,
    className: "rounded-2xl",
};

