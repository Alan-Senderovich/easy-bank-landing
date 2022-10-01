import React from "react";
import classes from "./LinksFooter.module.css"

const LinksFooter = () => {
  return (
    <div className={classes.linksFooter__container}>
      <div className={classes.linksFooter}>
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className={classes.linksFooter}>
        <ul>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Privacity Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinksFooter;
