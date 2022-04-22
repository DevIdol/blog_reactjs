import React, { Fragment, useState } from "react";
import Button from "../../Screens/Button";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import OtherSkill from "./OtherSkill";
import classes from "./TechnicalButton.module.css";

const TechnicalButton = () => {
  const [skill, setSkill] = useState(<FrontEnd />);
  const [isActive, setIsActive] = useState("front");
  return (
    <Fragment>
      <div className={classes.btn}>
        <Button
          className={
            isActive === "front"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setSkill(<FrontEnd />);
            setIsActive("front");
          }}
        >
          FrontEnd
        </Button>
        <Button
          className={
            isActive === "back"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setSkill(<BackEnd />);
            setIsActive("back");
          }}
        >
          BackEnd
        </Button>
        <Button
          className={
            isActive === "other"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setSkill(<OtherSkill />);
            setIsActive("other");
          }}
        >
          Other
        </Button>
      </div>
      <div>{skill}</div>
    </Fragment>
  );
};

export default TechnicalButton;
