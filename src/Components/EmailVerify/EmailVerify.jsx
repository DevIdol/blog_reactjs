import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Screens/Button";
import classes from "./EmailVerify.module.css";
import success from "../../assets/success.png";
const EmailVerify = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const param = useParams();
  console.log(msg)
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const { data } = await axios.get(
          `/users/${param.id}/verify/${param.token}`
        );
        setMsg(data.message);
        setError("");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
          setMsg("");
        }
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <Fragment>
      {msg && (
        <div className={classes.container}>
          <img src={success} alt="success_img" className={classes.successImg} />
          <h1>{msg}</h1>
          <Link to="/login">
            <Button className={classes.loginLink} type="text">
              Login
            </Button>
          </Link>
        </div>
      )}
      {error && (
        <h2 className="text-center" style={{ paddingTop: "140px" }}>
          {error}
        </h2>
      )}
    </Fragment>
  );
};

export default EmailVerify;
