import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NoPage from "./components/NoPage/NoPage";
import { useState } from "react";
import Header from "./components/Main/Header/Header";
import Collection from "./components/Collection/Collection";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <style>
        {isDark ? "body { background-color: #010409; color: #fff }" : ""}
      </style>
      <style>
        {isDark ? ".header { background-color: #161B22; color: #fff }" : ""}
      </style>
      <style>
        {isDark ? "button { background-color: #161B22; color: #fff }" : ""}
      </style>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route
          path="/"
          element={<Main setIsDark={setIsDark} isDark={isDark} />}
        />
        <Route path="/Login" element={<Login isDark={isDark} />} />
        <Route path="/SignUp" element={<SignUp isDark={isDark} />} />
        <Route path="/Collection" element={<Collection isDark={isDark}/>} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
