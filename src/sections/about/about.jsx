import React from "react";
import classes from "./about.module.css";
import Circle from "../../styled/icons/circle";
import AboutItem from "../../components/aboutItem/AboutItem";
import aboutItems from "../../utils/aboutItem.data";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <div className={classes.about__container}>
        <div className={classes.about__heading}>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank acount into your
            financial hub. <br /> Control your finances like never before.
          </p>
        </div>
        <div className={classes.about__content}>
          {aboutItems &&
            aboutItems.map((aboutItem, i) => (
              <AboutItem
                icon={aboutItem.icon}
                title={aboutItem.title}
                description={aboutItem.description}
                alt={aboutItem.alt}
                key={i}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
