import React from "react";
import { Outlet } from "react-router-dom";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <div className={classes.navigation}>
        <NavLeft />
        <NavCenter />
        <NavRight />
      </div>
      <Outlet />
    </header>
  );
};

export default NavBar;
