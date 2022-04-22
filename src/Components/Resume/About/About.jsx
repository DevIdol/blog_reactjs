import React from "react";
import AboutLeft from "./AboutLeft";
import "./AboutLeft.css";
import "./About.css";
import AboutRight from "./AboutRight";
import TextAnimation from "./TextAnimation";
const About = () => {
  return (
    <section className="about-section" id="home">
      <TextAnimation />
      <div className="container">
        <div className="row">
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </section>
  );
};

export default About;
