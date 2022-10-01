import React from "react";
import classes from "./AboutItem.module.css";
import Circle from "../../styled/icons/circle";

const AboutItem = ({ icon, title, description, alt }) => {
  return (
    <div className={classes.about__item}>
      <div className={classes.about__item_image}>
        <img src={icon} alt={alt}/>
        <Circle />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AboutItem;
