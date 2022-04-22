import React from "react";
import "./AboutInfo.css";

const AboutInfo = (props) => {
  return (
    <div className="about-info">
      <div>
        <span className="icon">{props.icon}</span>
      </div>
      <div>
        <a
          href={props.href}
          target={props.target}
          rel={props.rel}
          className="content"
        >
          {props.content}
        </a>
      </div>
    </div>
  );
};

export default AboutInfo;
