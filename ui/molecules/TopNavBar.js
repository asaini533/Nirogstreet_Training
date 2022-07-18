import Icon from "../atoms/Icon";
import  Heading from "../atoms/Heading";

const TopNavBar = ({ location }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center justify-center mx-4">
        <Icon name="map-marker-alt" className="mr-4 text-xl" />
        <Heading type="h4">{location ? location : "Enable Location"}</Heading>
      </div>
      <div className="flex mr-4">
        <Icon
          name="shopping-cart"
          className="mr-4 text-xl"
          onClick={() => {
            console.log("cart");
          }}
        ></Icon>
        <Icon name="bell" className="text-xl"
          onClick={() => {
            console.log("notification");
          }}
        ></Icon>
      </div>
    </div>
  );
};

export default TopNavBar;
