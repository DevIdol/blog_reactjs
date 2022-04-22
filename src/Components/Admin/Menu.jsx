import React from "react";
import { FaBars} from "react-icons/fa";
import classes from "./Menu.module.css";

const Menu = ({ toggleMenu }) => {
  return (
    <div className={classes.toggle} onClick={toggleMenu}>
        <FaBars className={classes.openMenu} />
    </div>
  );
};

export default Menu;
