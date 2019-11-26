import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import Classes from "./search-input-field.styles.css";

const SearchInputField = ({
  handleChange,
  toggleCustomSearch,
  toggleContainer
}) => {
  const caret = toggleContainer ? "fa-caret-up" : "fa-caret-down";
  return (
    <div className={"input-group " + Classes.InputContainer}>
      <input
        type="search"
        className={"form-control " + Classes.InputField}
        placeholder="Search for..."
        onChange={handleChange}
      />
      <span className="input-group-btn">
        <CustomButton onClick={toggleCustomSearch}>
          <i className={"fa " + caret}></i>
        </CustomButton>
        <CustomButton>
          <i className="fa fa-search"></i>
        </CustomButton>
      </span>
    </div>
  );
};

export default SearchInputField;
