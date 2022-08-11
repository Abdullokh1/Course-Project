import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NoPage from "./components/NoPage/NoPage";
import { useState } from "react";

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
      <Routes>
        <Route
          path="/"
          element={<Main setIsDark={setIsDark} isDark={isDark} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
