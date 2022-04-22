import axios from "axios";
import React, { useEffect, useState, useContext, Fragment } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import classes from "./BlogViewPost.module.css";
import Button from "../../Screens/Button";
import { RegisterContext } from "../../../Context/RegisterContext";
const BlogViewPost = () => {
  const PF = "http://localhost:8000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(RegisterContext);
  const [title, setTitleUpdate] = useState("");
  const [desc, setDescUpdate] = useState("");
  const [updateBlog, setUpdateBlog] = useState(false);
  const getMetaTagElements = (stringContent) => {
    const el = document.createElement("div");
    el.innerHTML = stringContent;
    return el.getElementsByTagName("meta");
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + path);
      setTitleUpdate(res.data.data.title);
      setDescUpdate(getMetaTagElements(res.data.data.desc));
      setPost(res.data.data);
    };
    getPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.data.username },
      });
      window.location.replace("/blog/");
    } catch (err) {
      console.log("Fail");
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.data.username,
        title,
        desc,
      });

      setUpdateBlog(false);
    } catch (err) {
      console.log("Fail");
    }
  };
  return (
    <div className={classes.blogViewPost}>
      <div className={classes.blogViewPostImg}>
        {post.photo && <img src={PF + post.photo} alt="BlogImage" />}
      </div>
      {updateBlog ? (
        <div className={classes.blogEdit}>
          <div className={classes.blogSubTitleEdit}>
            <div className={classes.leftSide}>
              <div className={classes.divider}></div>
              <h6 className={classes.category}>{post.category}</h6>
            </div>
            <p className={classes.date}>
              {new Date(post.createdAt).toDateString()}
            </p>
          </div>
          <input
            onChange={(e) => setTitleUpdate(e.target.value)}
            type="text"
            value={title}
            className={classes.blogTitleEdit}
            autoFocus={true}
          />

          <textarea
            onChange={(e) => setDescUpdate(e.target.value)}
            className={classes.blogDescEdit}
            value={desc}
          />

          <Button
            onClick={handleUpdate}
            type="submit"
            className={classes.updateSubmit}
          >
            Update
          </Button>
        </div>
      ) : (
        <Fragment>
          <div className={classes.blogSubTitle}>
            <div className={classes.leftSide}>
              <div className={classes.divider}></div>
              <h6 className={classes.category}>{post.category}</h6>
            </div>
            <p className={classes.date}>
              {new Date(post.createdAt).toDateString()}
            </p>

            {post.username === user?.data.username && (
              <div className={classes.rightSide}>
                <FaRegEdit
                  onClick={(e) => setUpdateBlog(true)}
                  style={{
                    color: "teal",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
                <RiDeleteBin5Line
                  onClick={handleDelete}
                  style={{ color: "tomato", cursor: "pointer" }}
                />
              </div>
            )}
          </div>
          <h3 className={classes.blogViewTitle}>{title}</h3>
          <div className={classes.desc}>{desc}</div>
        </Fragment>
      )}
    </div>
  );
};

export default BlogViewPost;
