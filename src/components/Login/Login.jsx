import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <>
      <div className="login">
        <h3>{t('Login to your account')}</h3>
        <p>
          {t("Don't have an account yet?") }
          <Link to="/SignUp">{t('Signup')}</Link>
        </p>

        <form className="form-login">
          <input type="text" placeholder={t("Username")} required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{t('Login')}</button>
        </form>
      </div>
    </>
  );
}

export default Login;
