import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Screens/Card";
import Input from "../../Screens/Input";
import light from "../../../assets/light.gif";
import dark from "../../../assets/dark.gif";
import Button from "../../Screens/Button";
import classes from "./Register.module.css";
import { ThemeContext } from "../../../Context/ThemeContext";
import axios from "axios";
const Register = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const { data: res } = await axios.post("/users/register", {
        username,
        email,
        password,
      });
      // res.data && window.location.replace("/login");
      setMsg(res.message);
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

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        username.trim().length > 2 &&
          email.includes("@") &&
          password.trim().length > 6
      );
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [username, email, password]);
  return (
    <div className={classes.register}>
      {theme === "light" ? (
        <img className={classes.registerBackground} src={light} alt="" />
      ) : (
        <img className={classes.registerBackground} src={dark} alt="" />
      )}
      <Card className={classes.registerCard}>
        <h3>Register</h3>
        {error && (
          <span style={{ color: "tomato", paddingTop: "10px" }}>{error}</span>
        )}
        {msg && (
          <span style={{ color: "teal", paddingTop: "10px" }}>{msg}</span>
        )}
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <label>Username</label>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className={classes.registerSubmit}
            disabled={!formIsValid}
          >
            Register
          </Button>
        </form>
        <div className={classes.registerFooter}>
          <Link className={classes.link} to="/login">
            Go To Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;
