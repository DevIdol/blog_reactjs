import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Title from "../Screens/Title";
import classes from "./Portfolio.module.css";
import PortfolioButton from "./PortfolioButton";
import Footer from "../Footer/Footer";
const Portfolio = () => {
  return (
    <section id="myportfo" className={classes["portfolio-section"]}>
      <div className={classes.title}>
        <Title
          title="My Projects"
          icon={<RiMedalFill className={classes.icon} />}
          className={classes.underline}
        />
      </div>
      <PortfolioButton />
      <Footer href="#myportfo" />
    </section>
  );
};

export default Portfolio;
