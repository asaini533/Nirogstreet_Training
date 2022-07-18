import TextArea from "../atoms/TextArea";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default {
  title: "Atoms/TextArea",
  component: TextArea,
};

const Template = (args) => {
  const schema = yup.object().shape({
    name: yup.string(),
  });
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return <TextArea {...{ register: register, error: errors.name, ...args }} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: "name",
  label: "Message",
  TextaresClass: "w-full text-black border rounded outline-none text-base transition duration-150 ease-in-out font-light bg-white border-solid focus:border-2 focus:border-primary  placeholder-iron-gray focus:outline-none h-40"
};

