import DropDown from '../atoms/Dropdown';
import React from "react";
export default {
  title: "Misc/DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const singleSelect = Template.bind({});
singleSelect.args = {
  name: 'sindleSelect',
  options: [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AS", label: "American Samoa" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District Of Columbia" },
    { value: "FM", label: "Federated States Of Micronesia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "GU", label: "Guam" },
  ],
  className: "h-14 ",
};

