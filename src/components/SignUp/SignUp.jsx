import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();

  return (
    <>
      <div className="login">
        <h3>{t('Signup to create an account')}</h3>
        <p>
          {t("Already have an account ?") }
          <Link to="/Login">{t('Login')}</Link>
        </p>

        <form className="form-login">
          <input type="text" placeholder={t("Username")} required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm password" required />
          <button>{t('Signup')}</button>
        </form>
      </div>
    </>
  )
}

export default SignUp