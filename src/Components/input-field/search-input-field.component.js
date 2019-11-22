import React from "react";

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
        <button
          className={"btn btn-default " + Classes.InputFieldBtn}
          type="button"
          onClick={toggleCustomSearch}
        >
          <i className={"fa " + caret}></i>
        </button>
        <button
          className={"btn btn-default " + Classes.InputFieldBtn}
          type="button"
        >
          <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  );
};

export default SearchInputField;
