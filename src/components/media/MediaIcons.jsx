import React from "react";
import classes from "./MediaIcons.module.css";
import FacebookIcon from "../../styled/icons/facebook";
import YoutubeIcon from "../../styled/icons/youtube";
import TwitterIcon from "../../styled/icons/twitter";
import PinterestIcon from "../../styled/icons/pinterest";
import InstagramIcon from "../../styled/icons/instagram";

const MediaIcons = () => {
  return (
    <>
      <a>
        <FacebookIcon />
      </a>
      <a>
        <YoutubeIcon />
      </a>
      <a>
        <TwitterIcon />
      </a>
      <a>
        <PinterestIcon />
      </a>
      <a>
        <InstagramIcon />
      </a>
    </>
  );
};

export default MediaIcons;
