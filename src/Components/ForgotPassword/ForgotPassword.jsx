import React, { useState, useRef } from "react";
import Input from "../Screens/Input";
import Button from "../Screens/Button";
import Card from "../Screens/Card";
import style from "./ForgotPassword.module.css";
import axios from "axios";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/password-reset", {
        email: emailRef.current.value,
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
    <div className={style.container}>
      <Card className={style.forgotPasswordCard}>
        <h3>Forgot Password</h3>
        {error && (
          <span style={{ color: "tomato", paddingTop: "10px" }}>{error}</span>
        )}
        {msg && (
          <span style={{ color: "teal", paddingTop: "10px" }}>{msg}</span>
        )}
        <form className={style.forgotPasswordForm} onSubmit={handleSubmit}>
          <label>Email</label>
          <Input
            useref={emailRef}
            type="email"
            placeholder="Enter Your Email"
          />
          <Button type="submit" className={style.forgotPasswordSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
