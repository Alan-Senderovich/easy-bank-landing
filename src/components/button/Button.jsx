import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({ href, text = "Request Invite", isFullWidth }) => {
  return (
    <div>
      {isFullWidth ? (
        <button type="submit" className={classes.button__full_width}>
          {text}
        </button>
      ) : (
        <Link href="/add-new-article">
          <button className={classes.button}>{text}</button>
        </Link>
      )}
    </div>
  );
};

export default Button;
