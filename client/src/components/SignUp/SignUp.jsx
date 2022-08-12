import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from 'axios'

function SignUp() {
  const { t } = useTranslation();

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    try{
      const url = 'https://localhost:8080/api/users';
      const {data:res} =  axios.post(url, data);
      navigate('/Login')
      console.log(res.message);

    }catch(err){
      if(err.response && err.response.status >= 400 && err.response.status <= 500){
        setError(err.response.data.message)
      }
    }
  };

  return (
    <>
      <div className="login">
        <h3>{t('Signup to create an account')}</h3>
        <p>
          {t("Already have an account ?") }
          <Link to="/Login">{t('Login')}</Link>
        </p>

        <form className="form-login">
          <input onChange={handleChange} name='userName' type="text" placeholder={t("Username")} required />
          <input onChange={handleChange} name='email' type="email" placeholder="Email" required />
          <input onChange={handleChange} name='password' type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm password" required />
          {error && <p>{error}</p>}
          <button>{t('Signup')}</button>
        </form>
      </div>
    </>
  )
}

export default SignUp