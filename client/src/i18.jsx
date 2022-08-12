import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import transEng from './lang/en.json'
import transUzb from './lang/uz.json'


const resources = {
  en: {
    translation: transEng
  },
  uz: {
    translation: transUzb
  }
};


i18n
.use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  

  export default i18n