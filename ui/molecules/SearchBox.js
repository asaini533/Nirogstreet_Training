import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import  TextField  from "../atoms/TextField";

const SearchBox = ({id, placeholder,className="relative", ...properties}) => {
  return (

        <div className={className}>
          <Icon name={"search"} type="" className={`${properties.iconClassName}`}  />
          <TextField placeholder={placeholder} className={`${properties.inputClassName} `} />
        </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  likechildren: PropTypes.string,
  placeholder: PropTypes.string,
  iconClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};



