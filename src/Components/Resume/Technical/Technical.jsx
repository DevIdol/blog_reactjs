import React from "react";
import { RiMedalFill } from "react-icons/ri";
import Title from "../../Screens/Title";
import classes from "./Technical.module.css";
import TechnicalButton from "./TechnicalButton";

const Technical = () => {
  return (
    <section className={classes["technical-section"]}>
     <div className={classes["technical-title"]}>
     <Title
        title="MY SKILLS"
        icon={<RiMedalFill className={classes.icon} />}
        className={classes.underline}
      />
     </div>
      <TechnicalButton />
    </section>
  );
};

export default Technical;
