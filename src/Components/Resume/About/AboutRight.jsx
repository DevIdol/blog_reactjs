import React, { Fragment } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt, FaUserGraduate } from "react-icons/fa";
import { Mail } from "../../ContactIcon/ContactIcons";
import AboutInfo from "./AboutInfo";
import resume from "../../../assets/storage/Resume.pdf";
import "./AboutRight.css";
const AboutRight = () => {
  return (
    <Fragment>
      <div className="col-md-6 about-right">
        <h4 className="info-title">Personal Information</h4>
        <div>
          <AboutInfo
            icon={<MdLocationOn />}
            content="Thazin 2/103 | Kalaymyo"
            href="https://www.google.com/maps/place/Kale/@23.190485,94.0235495,13z/data=!3m1!4b1!4m5!3m4!1s0x374b731d35ea19ab:0x3928e86b766be577!8m2!3d23.1941702!4d94.0235718"
            target="__back"
            rel="nofollow noopener noreferrer"
          />

          <AboutInfo
            icon={<Mail />}
            content="devidol.mm@gmail.com"
            href="mailto:devidol.mm@gmail.com"
            target="__back"
            rel="nofollow noopener noreferrer"
          />
          <AboutInfo
            icon={<FaMobileAlt />}
            content="09891489955"
            href="tel:09891489955"
            target="__back"
            rel="nofollow noopener noreferrer"
          />
          <AboutInfo
            icon={<FaUserGraduate />}
            content=" Final Year (B.C.Sc - kalay)"
            href="http://www.ucskalay.edu.mm"
            target="__back"
            rel="nofollow noopener noreferrer"
          />
        </div>
        <div className="download">
          <a href={resume} download>
            Get My CV
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutRight;
