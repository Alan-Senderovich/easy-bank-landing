import React from 'react';
import classes from "./CardBlog.module.css";


const CardBlog = ({image, title, author, content}) => {
  return (
    <div className={classes.card}>
        <div className={classes.card__image_container}>
            <img src={image}/>
        </div>
        <div className={classes.card__content}>
            <span>{author}</span>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default CardBlog;