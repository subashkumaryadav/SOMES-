import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
