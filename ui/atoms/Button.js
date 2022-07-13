import PropTypes from "prop-types";
const Button = ({ children, onClick, isLoading, ...property }) => {

  return (
    <div className="w-full">
      <button
        className={`${property.className} flex items-center justify-center focus:outline-none hover:opacity-95 transition-all duration-150 ease-linear shadow outline-none hover:shadow-lg w-full `}
        onClick={onClick}
      >
        {isLoading && (
          <div className=" w-4 h-4 border-b-2 border-white rounded-full left-4 animate-spin mr-1"></div>
        )}
        {children}
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
};
