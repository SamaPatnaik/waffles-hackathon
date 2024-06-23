import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isMain, setIsMain] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar></Navbar>
              <LandingPage></LandingPage>
            </>
          }
        ></Route>
        <Route path="/main" element={<MainPage></MainPage>}></Route>
        <Route
          path="/contacts"
          element={
            <>
              <Contact></Contact>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About></About>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
