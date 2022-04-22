import React, { Fragment, useContext, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import classes from "./AdminBlog.module.css";
import Button from "../Screens/Button";
import { RegisterContext } from "../../Context/RegisterContext";
import axios from "axios";
// import TextEditor from "../TextEditor/TextEditor"
const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(RegisterContext);
  const [error, setError] = useState("");
  // const decodedUser = jwt(user.data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.data.username,
      title,
      category,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + "--" + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        setError("Internal Server Error");
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/blog/" + res.data.data._id);
      setError("");
    } catch (error) {
      setError("Internal Server Error");
    }
  };
  return (
    <Fragment>
      <h2 className={classes.title}>Blog</h2>
      {file && (
        <img
          className={classes.adminBlogImg}
          src={URL.createObjectURL(file)}
          alt="blogImg"
        />
      )}

      <div className={classes.adminBlog}>
        <form className={classes.adminBlogForm} onSubmit={handleSubmit}>
          {error && (
            <span
              style={{
                alignSelf: "center",
                color: "tomato",
                padding: "20px 0px 0px 30%",
              }}
            >
              Internal Server Error
            </span>
          )}
          <div className={classes.adminBlogFormGroup}>
            <label htmlFor="fileInput">
              <MdAddCircleOutline className={classes.adminBlogIcon} />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title..."
              className={classes.blogInput}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.adminBlogFormGroup}>
            <input
              type="text"
              placeholder="Category..."
              className={`${classes.blogInput} ${classes.blogDesc}`}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.adminBlogFormGroup}>
            <textarea
              placeholder="Description..."
              type="text"
              className={`${classes.blogInput} ${classes.blogDesc}`}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            {/* <TextEditor onChange={(value) => setDesc(value)} /> */}
          </div>
          <Button type="submit" className={classes.blogSubmit}>
            Publish
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AdminBlog;
