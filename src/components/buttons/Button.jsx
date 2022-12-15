import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, text, type, className }) => {
  return (
    <button className={`btn  btn-${type} ${className ? className : ""}`}>
      <span className={`${children ? "mr-10" : ""} flex`}>{text}</span>{" "}
      {children}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
export default Button;
