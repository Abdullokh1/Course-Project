import React from "react";
import './Hero.scss'
import hero from '../../../assets/hero.png'
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const token = localStorage.getItem("token");

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner d-flex align-items-center">
          <div className="hero__info">
            <h1 className="hero__title">{t('Create your own collection and manage them.')}</h1>
            <Link to={token ? '/Collection' : '/Login'}>
              <button className="hero__btn">{t('Create now')}</button>
            </Link>
          </div>
          <img className="hero__img" src={hero} alt="hero"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
