import React from "react";
import classes from "./banner.module.css";
import Button from "../../components/button/Button";
import BannerBack from "../../assets/bannerBack";
// import phones from "../images/image-mockups1.png";

const Banner = () => {
  return (
    <section className={classes.banner} id="home">
      <div className={classes.banner__container}>
        <div className={classes.banner__left}>
          <h1>
            Next generation <br/>digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, nvesting, and much
            more.
          </p>
          <div className={classes.btn}>
          <Button />
          </div>
        </div>
        <div className={classes.banner__right}>
            <BannerBack />
            <img src="images/image-mockups1.png" alt="phones"/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
