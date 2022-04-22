import React, { Fragment, useContext } from "react";
import darklogo from "../../assets/dark.png";
import lightlogo from "../../assets/light.png";
import { ThemeContext } from "../../Context/ThemeContext";
import classes from "./NavLeft.module.css"

const NavLeft = () => {
  const [{ theme }] = useContext(ThemeContext);
  const logo = theme === "dark" ? lightlogo : darklogo;
  return (
    <Fragment>
      <img className={classes.logo} src={logo} alt="" />
    </Fragment>
  );
};

export default NavLeft;
