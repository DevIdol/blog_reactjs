import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Screens/Card";
import Input from "../../Screens/Input";
import classes from "./Login.module.css";
import light from "../../../assets/light.gif";
import dark from "../../../assets/dark.gif";
import Button from "../../Screens/Button";
import { ThemeContext } from "../../../Context/ThemeContext";
import { RegisterContext } from "../../../Context/RegisterContext";
import axios from "axios";

const Login = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const { dispatch } = useContext(RegisterContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_STATE",
    });
    try {
      const { data } = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      setMsg(data.message);
      setError("");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  };
  return (
    <div className={classes.login}>
      {theme === "light" ? (
        <img className={classes.loginBackground} src={light} alt="" />
      ) : (
        <img className={classes.loginBackground} src={dark} alt="" />
      )}
      <Card className={classes.loginCard}>
        <h3>Login</h3>
        {error && (
          <span style={{ color: "tomato", paddingTop: "10px" }}>{error}</span>
        )}
        {msg && (
          <span style={{ color: "tomato", paddingTop: "10px" }}>{msg}</span>
        )}

        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <label>Email</label>
          <Input
            useref={emailRef}
            type="email"
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <Input
            useref={passwordRef}
            type="password"
            placeholder="Enter Your Password"
          />

          <Button type="submit" className={classes.loginSubmit}>
            Login
          </Button>
        </form>

        <div className={classes.loginFooter}>
          <Link className={classes.link} to="/forgot-password">
            Forgot Password
          </Link>
          <Link className={classes.link} to="/register">
            Go To Register
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
