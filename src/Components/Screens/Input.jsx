import React from "react";
import classes from "./Input.module.css";

const Input = ({useref, type, value, onChange, name, placeholder, className }) => {
  return (
    <input
      ref={useref}
      className={`${classes.input} ${className}`}
      type={type || "text"}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
