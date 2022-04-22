import React, { Fragment } from "react";
import me from "../../../assets/me.png";

import SocialMedia from "./SocialMedia";
const AboutLeft = () => {
  return (
    <Fragment>
      <div className="col-md-6 text-center">
        <div>
          <img className="me" src={me} alt="" />
          <h4 className="my-name">Ha Shing Thang</h4>
          <h6 className="my-position">Web And Mobile Application Developer</h6>
          <SocialMedia />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutLeft;
