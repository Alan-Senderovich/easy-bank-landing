import React from "react";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";
import MediaIcons from "../media/MediaIcons";
import LinksFooter from "../linksFooter/LinksFooter";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer className={classes.footer} id="contact">
      <div className={classes.footer__container}>
        <div className={classes.footer__social_container}>
          <div>
            <Logo isDark={true} />
          </div>
          <div className={classes.footer__social_media}>
            <MediaIcons />
          </div>
        </div>

        <LinksFooter />

        <div className={classes.footer__button_container}>
          <div className={classes.footer__button}>
            <Button />
          </div>
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
