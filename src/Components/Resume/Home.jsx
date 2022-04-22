import React, { Fragment } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Technical from "./Technical/Technical";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Technical />
      <Contact />
      <Footer href="#home" />
    </Fragment>
  );
};

export default Home;
