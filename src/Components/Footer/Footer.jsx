import React from "react";
import SocialMedia from "../Resume/About/SocialMedia";
import logo from "../../assets/light.png";
import classes from "./Footer.module.css";
import BackToTop from "../BackToTop/BackToTop";

const Footer = ({href}) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["footer-content"]}>
        <h6>Hi There, I Am</h6>
        <h5>Web And Mobile Application Developer</h5>
      </div>

      <div className={classes["footer-contact"]}>
        <SocialMedia />
      </div>
      <div className={classes.copyright}>
        <h5>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100026052723303"
            target="_blank"
          >
            Developed By DevIdol
          </a>
        </h5>
        <h6>Copyright &copy; 2021 - {new Date().getFullYear()}</h6>
      </div>
      <div className={classes["back-top"]}>
        <BackToTop href={href}/>
      </div>
    </footer>
  );
};

export default Footer;
