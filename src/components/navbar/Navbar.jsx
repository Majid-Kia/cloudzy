import React, { useState } from "react";
import * as styles from "./navbar.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "components/buttons/Button";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`container flex-a-c ${styles.navWrapper}`}>
        <div className={styles.logo}>
          <StaticImage src="../../images/nav/logo.png" alt="Cloudzy logo" />
        </div>
        <button className="hide-laptop-up" onClick={() => setOpenNav(!openNav)}>
          <div
            className={`${styles.menuButton} ${openNav && styles.active}`}
          ></div>
        </button>
        <div
          className={`flex-a-c w-100  ${styles.navbarItems} ${
            openNav ? styles.active : ""
          }`}
        >
          <ul className={`flex grow-1 flex-a-c ${styles.navList}`}>
            <li>
              <Link to="/vps">VPS</Link>
            </li>
            <li>
              <Link to="/cloud">Cloud</Link>
            </li>
            <li>
              <Link to="#pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
          <Button
            className={`text--white ${styles.signInBtn}`}
            text="SIGN IN"
            type="primary"
          ></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
