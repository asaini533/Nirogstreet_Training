import PropTypes from "prop-types";
import Paragraph from "../atoms/Paragraph";

const Story = ({ url, height, header, width, type, onClick, className, headingClass }) => {
  var divStyle = {
    backgroundImage: `url(${url})`,
    height,
    width,
  };

  return (
    <div
      className={`relative overflow-hidden h-52 w-40  flex  items-end bg-cover bg-no-repeat bg-center rounded-xl ${className}`} style={divStyle} onClick={onClick} >
      <div className="absolute w-full h-2/4 bg-gradient-to-t from-black left-0 bottom-0"> </div>
          <Paragraph className={`relative z-50 bottom-3  px-3 text-white ${headingClass}`} >{header}</Paragraph>
      </div>
  );
};
export default Story;

Story.propTypes = {
  url: PropTypes.string,
  height: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  headingClass: PropTypes.string,
  type: PropTypes.oneOf(["video", "img"]),
};

Story.defaultProps = {
  type: "img",
};
