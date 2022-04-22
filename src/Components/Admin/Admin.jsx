import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AdminBlog from "./AdminBlog";
import classes from "./Admin.module.css";
import Menu from "./Menu";
import AdminSetting from "./AdminSetting";
import { RegisterContext } from "../../Context/RegisterContext";
const Admin = () => {
  const PF = "http://localhost:8000/images/";
  const { user, dispatch } = useContext(RegisterContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("blog");
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [button, setButton] = useState(<AdminBlog />);



  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <section className={classes.admin}>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      <ul
        className={
          isOpen ? `${classes.adminLeft} ${classes.active}` : classes.adminLeft
        }
      >
        <li
          className={classes.adminHeader}
          onClick={() => {
            setButton(<AdminSetting />);
            setIsOpen(false);
            setIsActive("setting");
          }}
        >
          <div className={classes.adminHeaderTop}>
            <img
              className={classes.me}
              src={PF + user.data.profilePic}
              alt=""
            />
            <h5 className={classes.adminName}>{user.data.username}</h5>
          </div>
          <h6 className={classes.adminMail}>{user.data.email}</h6>
        </li>
        <li
          className={
            isActive === "blog"
              ? `${classes.adminItem} ${classes.active}`
              : classes.adminItem
          }
          onClick={() => {
            setButton(<AdminBlog />);
            setIsOpen(false);
            setIsActive("blog");
          }}
        >
          Blog
        </li>
        <li
          className={
            isActive === "setting"
              ? `${classes.adminItem} ${classes.active}`
              : classes.adminItem
          }
          onClick={() => {
            setButton(<AdminSetting />);
            setIsOpen(false);
            setIsActive("setting");
          }}
        >
          Setting
        </li>
        <li className={classes.adminItem} onClick={handleLogout}>
          <Link to="/" className={classes.logout}>
            Logout
          </Link>
        </li>
      </ul>
      <div className={classes.adminRight}>{button}</div>
      {isOpen && <div onClick={closeMenu} className={classes.overflow}></div>}
    </section>
  );
};

export default Admin;
