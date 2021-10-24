import React from "react";
import FooterCol from "./FooterCol";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--xl">
        <div className="footer__col-list">
          <FooterCol title="Contact">Test text</FooterCol>
        </div>
        <div className="footer__bar"></div>
      </div>
    </footer>
  );
};

export default Footer;
