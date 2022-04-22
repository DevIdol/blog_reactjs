import React, { Fragment, useState } from "react";
import Button from "../Screens/Button";
import AllPortfolio from "./All/AllPortfolio";
import MobilePortfolio from "./Mobile/MobilePortfolio";
import classes from "./PortfolioButton.module.css";
import WebPortfolio from "./Web/WebPortfolio";

const PortfolioButton = () => {
  const [porfolio, setPortfolio] = useState(<AllPortfolio />);
  const [isActive, setIsActive] = useState("all");
  return (
    <Fragment>
      <div className={classes.btn}>
        <Button
          className={
            isActive === "all"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setPortfolio(<AllPortfolio />);
            setIsActive("all");
          }}
        >
          All
        </Button>
        <Button
          className={
            isActive === "mobile"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setPortfolio(<MobilePortfolio />);
            setIsActive("mobile");
          }}
        >
          Mobile
        </Button>
        <Button
          className={
            isActive === "web"
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={() => {
            setPortfolio(<WebPortfolio />);
            setIsActive("web");
          }}
        >
          Web
        </Button>
      </div>
      <div>{porfolio}</div>
    </Fragment>
  );
};

export default PortfolioButton;
