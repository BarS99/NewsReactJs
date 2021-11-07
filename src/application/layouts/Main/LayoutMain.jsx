import React from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

const LayoutMain = (props) => {
  return (
    <>
      <Header />
      <div className="layout">{props.children}</div>
      <Footer />
    </>
  );
};

export default LayoutMain;
