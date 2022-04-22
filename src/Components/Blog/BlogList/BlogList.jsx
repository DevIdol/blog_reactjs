import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Screens/Button";
import BlogSubTitle from "../BlogSubTitle/BlogSubTitle";
import classes from "./BlogList.module.css";

const BlogList = ({ posts }) => {
  const PF = "http://localhost:8000/images/";
  const blogs = posts;

  const [loadMore, setLoadMore] = useState(2);
  const reverseBlogs = blogs.slice(0).reverse();

  const sliceBlogs = reverseBlogs.slice(0, loadMore);

  const onLoadMore = () => {
    setLoadMore((pre) => pre + 2);
  };
  const isLoadMore = blogs.length > loadMore;

  return (
    <div className={classes.blogList}>
      <div className="container">
        <div className={classes.blogTitle}>
          <h4>Blog Detail</h4>
        </div>
        <div className="row">
          {sliceBlogs.map((data) => (
            <div
              className="col-md-6"
              style={{
                marginBottom: "30px",
              }}
              key={data._id}
            >
              <div className={classes.blogListItems}>
                {data.photo && (
                  <img
                    src={PF + data.photo}
                    className={classes.blogListImg}
                    alt="BlogImage"
                  />
                )}

                <BlogSubTitle
                  categories={data.category}
                  date={data.createdAt}
                  username={data.username}
                />
                <Link to={data._id} className={classes.blogListTitle}>
                  <h5>{data.title}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoadMore && (
        <div className={classes.loadBtn}>
          <Button type="button" onClick={onLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
