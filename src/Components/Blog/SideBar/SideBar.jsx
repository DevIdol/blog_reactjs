import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../../Resume/About/SocialMedia";
import classes from "./SideBar.module.css";
const SideBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCategory(res.data.data);
    };
    getCats();
  }, []);
  return (
    <div className={classes.sideBar}>
      <h6 className={classes.sideBarTitle}>Categories</h6>
      <ul className={classes.sideBarList}>
        {category.map((data) => (
          <Link
            to={`?cat=${data.name}`}
            key={data._id}
            className={classes.sideBarListItem}
          >
            {data.name}
          </Link>
        ))}
      </ul>
      <div className={classes.sideBarFooter}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideBar;
