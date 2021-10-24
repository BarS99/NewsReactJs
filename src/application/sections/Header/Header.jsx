import React, { useState } from "react";
import logo from "../../../static/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  function handleToggleNav() {
    setToggleNav((prevState) => !prevState);
  }

  return (
    <header className={`header${toggleNav ? " header--show-nav" : ""}`}>
      {toggleNav ? (
        <div className="header__nav-mask" onClick={handleToggleNav}></div>
      ) : (
        ""
      )}
      <div className="container container--xl">
        <div className="header__inner">
          <div className="header__left">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header__right">
            <nav className="header__nav">
              <div className="header__nav-close" onClick={handleToggleNav}>
                <div>Close Navigation</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <ul>
                <li>
                  <a href="/" title="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" title="Home">
                    Modules
                  </a>
                </li>
                <li>
                  <a href="/" title="Home">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="/" title="Home">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__toggle" onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
