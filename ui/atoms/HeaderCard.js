import Icon from "./Icon";
import Heading from "./Heading";
import TextField from "./TextField";
const HeaderCard = ({ bgcolor, icon, title, description, ...properties }) => {
  return (
    <div className="flex space-x-3">
      <div
        className={`flex ${properties.className} rounded-lg items-center p-4 cursor-pointer`}
        style={{ background: bgcolor }}
      >
        <Icon
          name={icon}
          className={`text-xl mr-2 mb-4 ${properties.iconClassName}`}
        ></Icon>
        <div className="flex flex-col ">
          <Heading type="h4" className={properties.headingClassName}>{title}</Heading>
          <TextField content={description} className="font-light text-sm"></TextField>
        </div>
      </div>


    </div>
  );
};

export default HeaderCard;
