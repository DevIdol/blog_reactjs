import React from "react";
import classes from "./BlogView.module.css";
import BlogViewPost from "./BlogViewPost/BlogViewPost";
import SideBar from "./SideBar/SideBar";

const BlogView = () => {
  return (
    <section className={classes.blogView}>
      <BlogViewPost />
      <SideBar />
    </section>
  );
};

export default BlogView;
