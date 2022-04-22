import { Fragment } from "react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

export const GitHub = (props) => {
  return (
    <Fragment>
      <a
        href="https://github.com/DevIdol"
        target="__back"
        rel="nofollow noopener noreferrer"
      >
        <AiOutlineGithub className={props.className} style={props.style} />
      </a>
    </Fragment>
  );
};

export const Mail = (props) => {
  return (
    <Fragment>
      <ImMail4 size={props.size} className={props.className} />
    </Fragment>
  );
};
export const Facebook = (props) => {
  return (
    <Fragment>
      <FaFacebookF className={props.className} />
    </Fragment>
  );
};
export const Instagram = (props) => {
  return (
    <Fragment>
      <BsInstagram className={props.className} />
    </Fragment>
  );
};
export const Twitter = (props) => {
  return (
    <Fragment>
      <BsTwitter className={props.className} />
    </Fragment>
  );
};
export const Telegram = (props) => {
  return (
    <Fragment>
      <FaTelegramPlane className={props.className} />
    </Fragment>
  );
};
