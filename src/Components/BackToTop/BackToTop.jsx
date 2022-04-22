import React from "react";
import classes from "./BackToTop.module.css"
const BackToTop = ({href}) => {
  return (
    <a href={href} className={classes["to-top"]}>
    </a>
  );
};

export default BackToTop;
