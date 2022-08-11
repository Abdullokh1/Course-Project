import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Login() {
  const { t } = useTranslation();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="login">
      <h3>{t("Login to your account")}</h3>
      <p>
        {t("Don't have an account yet?")}
        <Link to="/SignUp">{t("Signup")}</Link>
      </p>

      <form onSubmit={submitHandler} className="form-login">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={t("Username")}
          required
        />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button>{t("Login")}</button>
      </form>
    </div>
  );
}

export default Login;
