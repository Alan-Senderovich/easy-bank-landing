import React, { useState } from "react";
// import Sticky from "react-stickynode";

import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main id="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
