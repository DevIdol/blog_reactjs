import React from "react";
import { FaRegStar } from "react-icons/fa";
import Title from "../../Screens/Title";
import classes from "./ContactTitle.module.css";
const ContactTitle = () => {
  return (
    <div className={`${classes["contact-title"]}`}>
      <Title
        title="CONTACT ME"
        icon={<FaRegStar className={classes.icon} />}
        className={classes.underline}
      />
    </div>
  );
};

export default ContactTitle;
