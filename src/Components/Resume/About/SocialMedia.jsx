import React, { Fragment } from "react";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
} from "../../ContactIcon/ContactIcons";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <Fragment>
      <a
        rel="nofollow noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100026052723303"
        target="_blank"
      >
        <Facebook className="facebook" />
      </a>
      <a
        rel="nofollow noopener noreferrer"
        href="https://www.instagram.com/jostthang/"
        target="_blank"
      >
        <Instagram className="instagram" />
      </a>
      <a
        rel="nofollow noopener noreferrer"
        href="https://twitter.com/johst21"
        target="_blank"
      >
        <Twitter className="twitter" />
      </a>
      <a
        rel="nofollow noopener noreferrer"
        href="https://t.me/devidolmm"
        target="_blank"
      >
        <Telegram className="telegram" />
      </a>
    </Fragment>
  );
};

export default SocialMedia;
