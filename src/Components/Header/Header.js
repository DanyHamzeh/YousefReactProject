import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.headerCont}>
      <nav>
        <ul className={classes.ul_list}>
          <div className={classes.headersLink}>
          <div className={classes.circleName}>

            <span className={classes.nameInside}>RK</span>
          </div>
            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Temukan Lokasi
              </Link>
            </li>
            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Jenis Ruang
              </Link>
            </li>
            <div className={classes.lineSeperate} />

            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Komunitas
              </Link>
            </li>
            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Blog
              </Link>
            </li>
          </div>
          <div className={classes.headersLink1}>
            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Untuk Startup
              </Link>
            </li>

            <li className={classes.navigateTabs}>
              <Link to="" className={classes.list_word}>
                Login
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
