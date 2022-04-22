import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { getNavItems } from "./NavBarItems";
import classes from "./NavCenter.module.css";
import { RegisterContext } from "../../Context/RegisterContext";

const NavCenter = () => {
  const { user } = useContext(RegisterContext);
  const [{ theme }] = useContext(ThemeContext);
  const navItems = getNavItems();

  const activeColor = theme === "dark" ? "#65fcdb" : "#db084e";
  return (
    <nav className={classes["nav-center"]}>
      {navItems.map((data) => (
        <NavLink
          className={classes["nav-item"]}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 800 : "",
              color: isActive ? activeColor : "",
            };
          }}
          to={data.link}
          key={data.id}
        >
          {data.name}
        </NavLink>
      ))}
      {user && (
        <NavLink
          className={classes["nav-item"]}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 800 : "",
              color: isActive ? activeColor : "",
            };
          }}
          to="/admin-dashboard"
        >
          ADMIN
        </NavLink>
      )}
    </nav>
  );
};

export default NavCenter;
