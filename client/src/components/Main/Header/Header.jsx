import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../../i18";

function Header({ setIsDark, isDark }) {
  const { t, i18n } = useTranslation();
  let [isOpened, setOpened] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (
    <header className="header p-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="text-decoration-none text-white" to="/">
            <h2 className={isDark ? "text-white m-0" : "text-dark m-0"}>
              ICollection
            </h2>
          </Link>
          <div className="header__input-wrapper w-25">
            <i className="bx text-dark bx-search"></i>
            <input
              className="form-control header__input"
              placeholder={t("Search by item or collection")}
              type="text"
            />
          </div>
          <div
            style={{ right: isOpened ? "0" : "-100%" }}
            className="header__features d-flex align-items-center"
          >
            <button className="header__btn" onClick={() => setIsDark(!isDark)}>
              <i
                className={
                  isDark ? "bx bx-sun text-white" : "bx bx-moon text-dark"
                }
              ></i>
            </button>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="form-select header__lang w-25"
            >
              <option value="en">English</option>
              <option value="uz">Uzbek</option>
            </select>
            <Link className="btn header__links" to="/Login">
              {t("Login")}
            </Link>
            <Link
              className="btn header__links header__links-second "
              to="/SignUp"
            >
              {t("Signup")}
            </Link>
          </div>
          <button onClick={() => setOpened(!isOpened)} className="header__menu">
            <i
              className={
                isOpened
                  ? "bx bx-x header__icons"
                  : "bx bx-menu-alt-right header__icons"
              }
            ></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
