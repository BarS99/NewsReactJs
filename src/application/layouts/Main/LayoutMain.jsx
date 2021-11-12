import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

const LayoutMain = (props) => {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutMain;
