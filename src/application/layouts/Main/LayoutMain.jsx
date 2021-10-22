import React from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

const LayoutMain = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutMain;
