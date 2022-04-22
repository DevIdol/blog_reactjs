import React from "react";
import classes from "./TextAnimation.module.css";

const TextAnimation = () => {
  return (
    <div
      className={`${classes.text} ${classes["is-animation"]} ${classes["content"]}`}
    >
      <span>W</span>
      <span>E</span>
      <span>L</span>
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>E</span>
    </div>
  );
};

export default TextAnimation;
