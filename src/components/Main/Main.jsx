import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function Main({ setIsDark, isDark }) {

  return (
    <>
      {/* <Header setIsDark={setIsDark} isDark={isDark} /> */}
      <Hero />
    </>
  );
}

export default Main;
