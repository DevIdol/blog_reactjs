import React, { useContext } from "react";
import {BsMoonStarsFill} from "react-icons/bs"
import {RiSunFill} from "react-icons/ri"
import { ThemeContext } from "../../Context/ThemeContext";
import { GitHub, Mail } from "../ContactIcon/ContactIcons";
import classes from "./NavRight.module.css";
const NavRight = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const themeMode = theme === "dark" ? <BsMoonStarsFill /> : <RiSunFill />;
  return (
    <div className={classes["nav-right"]}>
      <div>
        <GitHub className={classes.github} />
        <a
          href="mailto:devidol.mm@gmail.com"
          target="__back"
          rel="nofollow noopener noreferrer"
        >
          <Mail className={classes.mail} />
        </a>
      </div>
      <div className={classes["toggle-theme"]} onClick={toggleTheme}>
        {themeMode}
      </div>
    </div>
  );
};

export default NavRight;
