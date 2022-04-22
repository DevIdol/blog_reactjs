import React, { Fragment } from "react";
import classes from "./BlogSubTitle.module.css";
// import { RegisterContext } from "../../../Context/RegisterContext";
const BlogSubTitle = ({ categories, date, username }) => {
  // const { user } = useContext(RegisterContext);
  return (
    <Fragment>
      <div className={classes.blogSubTitle}>
        <div className={classes.leftSide}>
          <div className={classes.divider}></div>
          {/* <h6 className={classes.category}>
            {categories.map((data) => data.name)}
          </h6> */}
          <h6 className={classes.category}>
            {categories}
          </h6>
        </div>
        <p className={classes.date}>{new Date(date).toDateString()}</p>
      </div>
      {/* <Link to={`/blog/?user=${user.data.username}`}>
            <h6 className={classes.category}>{categories}</h6>
          </Link> */}
    </Fragment>
  );
};

export default BlogSubTitle;
