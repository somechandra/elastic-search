import React from "react";

import Classes from "./custom-button.styles.css";

const CustomButton = ({ children, ...otherProps }) => (
  <button
    type="button"
    className={"btn btn-default " + Classes.CustomButton}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
