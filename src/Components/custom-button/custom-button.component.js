import React from "react";

import Classes from "./custom-button.styles.css";

const CustomButton = ({ children, ...othetProps }) => (
  <button className="" {...othetProps}>
    {children}
  </button>
);

export default CustomButton;
