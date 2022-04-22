import React, { useState, useEffect } from "react";
import classes from "./Blog.module.css";
import BlogList from "./BlogList/BlogList";
import SideBar from "./SideBar/SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: res } = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <section className={classes.blog}>
      <BlogList posts={posts} />
      <SideBar />
    </section>
  );
};

export default Blog;
