import React from "react";
import classes from "./NavBar.module.css";
import Button from "../button/Button";
import menuItems from "./navBar.data";
import { Link } from "react-scroll";
import Logo from "../logo/Logo";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div>
        <Logo />
      </div>

      <div className={classes.menu__container}>
        {menuItems &&
          menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              className={classes.menu__ul}
            >
              {menuItem.label}
            </Link>
          ))}
      </div>


      <div className={classes.button__container}>
        <Button />
      </div>
    </header>
  );
};

export default NavBar;
