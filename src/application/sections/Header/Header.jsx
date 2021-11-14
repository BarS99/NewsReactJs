import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" className="header__logo">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="header__right">
            <nav className="header__nav">
              <div className="header__nav-close" onClick={handleToggleNav}>
                <div>Close Navigation</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    title="Home"
                    onClick={() => {
                      setToggleNav((prevState) => false);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    title="Home"
                    onClick={() => {
                      setToggleNav((prevState) => false);
                    }}
                  >
                    Contact
                  </NavLink>
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
