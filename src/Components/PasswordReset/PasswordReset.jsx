import axios from "axios";
import React, { useState, useEffect, Fragment, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../Screens/Input";
import Button from "../Screens/Button";
import Card from "../Screens/Card";
import style from "./PasswordReset.module.css";

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const param = useParams();
  const passwordRef = useRef();
  const url = `/password-reset/${param.id}/${param.token}`;
  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, {
        password: passwordRef.current.value,
      });
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
  return (
    <Fragment>
      {validUrl ? (
        <div className={style.container}>
          <Card className={style.passwordResetCard}>
            <h3>Add New Password</h3>
            {error && (
              <span style={{ color: "tomato", paddingTop: "10px" }}>
                {error}
              </span>
            )}
            {msg && (
              <span style={{ color: "teal", paddingTop: "10px" }}>{msg}</span>
            )}
            <form className={style.passwordResetForm} onSubmit={handleSubmit}>
              <label>New Password</label>
              <Input
                useref={passwordRef}
                type="password"
                placeholder="Enter Your New Password"
              />

              <Button type="submit" className={style.passwordResetSubmit}>
                Submit
              </Button>
            </form>
            {msg && (
              <Link
                className={style.link}
                to="/login"
                style={{ paddingTop: "10px", alignSelf: "flex-end" }}
              >
                Got To Login
              </Link>
            )}
          </Card>
        </div>
      ) : (
        <h1 className="text-center" style={{ paddingTop: "140px" }}>
          404 Not Found!!
        </h1>
      )}
    </Fragment>
  );
};

export default PasswordReset;
