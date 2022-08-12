import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from 'axios'

function Login() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    // userName: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
     
    try{
      const url = 'https://localhost:8080/api/auth';
      const {data:res} = await axios.post(url, data);
      localStorage.setItem("token", res.data)
      window.location = '/'
    }catch(err){
      if(err.response && err.response.status >= 400 && err.response.status <= 500){
        setError(err.response.data.message)
      }
    }
    
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
          onChange={handleChange}
          type="email"
          placeholder="Email"
          value={data.email}
          name="email"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={data.password}
          name="password"
          required
        />
        {error && <p>{error}</p>}
        <button>{t("Login")}</button>
      </form>
    </div>
  );
}

export default Login;
