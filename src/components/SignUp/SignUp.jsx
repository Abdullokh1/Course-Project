import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SignUp({ isDark }) {
  const { t } = useTranslation();
  let navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate('/Login')
    }
  }

  return (
    <>
      <div className="login">
        <h3>{t("Signup to create an account")}</h3>
        <p>
          {t("Already have an account ?")}
          <Link className={isDark ? "text-white" : ""} to="/Login">
            {t("Login")}
          </Link>
        </p>

        <form onSubmit={submitHandler} className="form-login">
          <input
            onChange={(e) => setName(e.target.value)}
            name="userName"
            value={name}
            type="text"
            placeholder={t("Username")}
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">{t("Signup")}</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
