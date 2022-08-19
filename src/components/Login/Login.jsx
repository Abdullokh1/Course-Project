import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login({ isDark }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  let navigate = useNavigate()

  async function loginUser (e){
		e.preventDefault()
		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
    
		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			navigate('/')
      window.location.reload();
      toast("Wow so easy!")

		} else {
			alert('Username or password is wrong')
		}
	}

  return (
    <div className="login">
      <h3>{t("Login to your account")}</h3>
      <p>
        {t("Don't have an account yet?")}
        <Link className={isDark ? "text-white" : ""} to="/SignUp">
          {t("Signup")}
        </Link>
      </p>

      <form onSubmit={loginUser} className="form-login">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">{t("Login")}</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
