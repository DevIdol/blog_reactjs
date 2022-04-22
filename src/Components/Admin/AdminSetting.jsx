import React, { Fragment, useContext, useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import classes from "./AdminSetting.module.css";
import axios from "axios";
import Button from "../Screens/Button";
import { RegisterContext } from "../../Context/RegisterContext";

const AdminSetting = () => {
  const PF = "http://localhost:8000/images/";
  const { user, dispatch } = useContext(RegisterContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_STATE" });
    const updateUser = {
      userId: user.data._id,
      username,
      email,
      password,
    };
    console.log(updateUser);

    if (file) {
      const data = new FormData();
      const filename = Date.now() + "--" + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        setError("Internal Server Error");
      }
    }
    try {
      const res = await axios.put(`/users/${user.data._id}`, updateUser);
      setMsg("Successfully Updated!");
      setInterval(() => {
        setMsg("");
      }, 3000);
      setError("");
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setUsername("");
      setEmail("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
      dispatch("UPDATE_FAILURE");
    }
    e.target.reset();
  };

  const onDelete = async () => {
    // const deleteUser = {
    //   userId: user._id,
    //   username: user.username,
    // };
    // console.log(deleteUser);
    try {
      await axios.delete(`/users/${user.data._id}`, {
        data: { userId: user.data._id, username: user.data.username },
      });

      setError("");
      dispatch({ type: "DELETE_USER" });
      window.location.replace("/");
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
    <Fragment>
      <div className={classes.settingTitle}>
        <span className={classes.settingUpdateTitle}>Update Account</span>
        <span onClick={onDelete} className={classes.settingDeleteTitle}>
          Delete Account
        </span>
      </div>
      <form action="" className={classes.settingForm} onSubmit={handleSubmit}>
        <label htmlFor="">Profile Picture</label>
        <div className={classes.settingImg}>
          <img
            src={file ? URL.createObjectURL(file) : PF + user.data.profilePic}
            alt=""
          />
          <label htmlFor="fileInput">
            <BiUserCircle className={classes.settingPPIcon} />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        {error && (
          <span
            style={{ color: "tomato", padding: "10px 0", alignSelf: "center" }}
          >
            {error}
          </span>
        )}
        {msg && (
          <span
            style={{ color: "teal", padding: "10px 0", alignSelf: "center" }}
          >
            {msg}
          </span>
        )}
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          placeholder={user.data.username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder={user.data.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className={classes.settingSubmit}
          disabled={!formIsValid}
        >
          Update
        </Button>
      </form>
    </Fragment>
  );
};

export default AdminSetting;
