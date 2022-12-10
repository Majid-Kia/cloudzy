import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, text, type, className }) => {
  return (
    <button className={`btn typo-btn-small btn-${type} ${className}`}>
      <span>{text}</span> {children}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
export default Button;
