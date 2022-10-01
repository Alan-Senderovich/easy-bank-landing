import React from "react";
import Link from "next/link";
import classes from "./Logo.module.css";
import VectorLeft from "../../styled/icons/vectorLeft";
import VectorMid from "../../styled/icons/vectorMid";
import VectorRight from "../../styled/icons/vectorRight";
import EasyBank from "../../styled/icons/easybank";
import VectorLeftDark from "../../styled/icons/vectorLeft-b-dark";
import VectorMidDark from "../../styled/icons/vectorMid-b-dark";
import VectorRightDark from "../../styled/icons/vectorRight-b-dark";
import EasyBankDark from "../../styled/icons/easybank-b-dark";

const Logo = ({ isDark }) => {
  return (
    <>
      <Link href="/">
        {isDark ? (
          <div className={classes.logo}>
            <div className={classes.logo__vector}>
              <VectorLeftDark />
            </div>
            <div className={classes.logo__vector}>
              <VectorMidDark />
            </div>
            <div>
              <VectorRightDark />
            </div>
            <EasyBankDark />
          </div>
        ) : (
          <div className={classes.logo}>
            <div className={classes.logo__vector}>
              <VectorLeft />
            </div>
            <div className={classes.logo__vector}>
              <VectorMid />
            </div>
            <div>
              <VectorRight />
            </div>
            <EasyBank />
          </div>
        )}
      </Link>
    </>
  );
};

export default Logo;
