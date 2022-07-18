import Select from "react-select";
import PropTypes from "prop-types";



const Dropdown = ({
  options,
  name,
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
  isMulti,
  onChange,
  defaultValueIndex,
  className,
  ...properties
}) => {
  return (
    <div className="w-full">
      <Select
        isMulti={isMulti}
        classNamePrefix="select"
        placeholder={`${properties.placeholder ? properties.placeholder : "Select..."
          }`}
        defaultValue={options[defaultValueIndex]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        closeMenuOnSelect={!isMulti}
        options={options}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#3655F2",
          },
        })}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)",
          }),
        }}
        onChange={onChange}

        className={`  ${className}`}
      />
    </div>
  );
};
export default Dropdown;

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValueIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  isDisabled: false,
  isLoading: false,
  isClearable: false,
  isSearchable: false,
  isMulti: false,
};
