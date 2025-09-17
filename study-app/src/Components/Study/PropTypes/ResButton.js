import React from "react";
import PropTypes from 'prop-types';

const ResButton = ({ label, onClick, disabled, type, className }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${className} ${disabled ? 'disabled' : ''}`}
      >
        {label}
      </button>
    </>
  );
};

export default ResButton;


ResButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string, // Accepts a CSS class name
};

ResButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
  className: '', // Default to an empty string if not passed
};


// secound comp
export const Greeting = ({ name, age = 18 }) => {
  return (
    <div>
      Hello, {name}!
      {age !== undefined && ` You are ${age} years old.`}
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number, // optional, no default when you dont want set default age
};


