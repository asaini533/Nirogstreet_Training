import TextField from "../atoms/TextField.js";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default {
  title: "Atoms/TextField",
  component: TextField,
};

const Template = (args) => {
  const schema = yup.object().shape({
    name: yup.string().required().min(6),
  });
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return <TextField {...{ register: register, error: errors.name, ...args }} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: "name",
  label: "Enter Name",
  className:"textField w-full p-3 text-black border rounded outline-none text-base transition duration-150 ease-in-out font-light h-14 bg-white border-solid focus:border-2 focus:border-primary  placeholder-iron-gray focus:outline-none border-gray-400",
};

