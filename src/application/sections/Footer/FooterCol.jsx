import React from "react";

const FooterCol = (props) => {
  return (
    <div className="footer__col">
      <h3 className="footer__col-title">{props.title}</h3>
      <div className="footer__col-content">{props.children}</div>
    </div>
  );
};

export default FooterCol;
