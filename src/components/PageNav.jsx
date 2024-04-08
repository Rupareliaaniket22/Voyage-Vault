import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function PageNav() {
  const [isclicked, setclicked] = useState(false);
  function DisplayOptions() {
    setclicked(isclicked !== true ? true : false);
  }
  return (
    <div className={styles.head}>
      <nav className={styles.nav}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/Pricing">PRICING</NavLink>
          </li>
          <li>
            <NavLink to="/Product">PRODUCT</NavLink>
          </li>
          <li className={styles.Login}>
            <NavLink to="/Login" style={{ color: "black" }}>
              LOGIN
            </NavLink>
          </li>
          <p>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white" }}
              className={styles.icon}
              onClick={DisplayOptions}
            />
          </p>
        </ul>
      </nav>
      {isclicked && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <NavLink to="/Pricing">PRICING</NavLink>
            </li>
            <li>
              <NavLink to="/Product">PRODUCT</NavLink>
            </li>
            <li className={styles.Login}>
              <NavLink to="/Login" style={{ color: "black" }}>
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PageNav;
