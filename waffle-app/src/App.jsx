import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <LandingPage/>
      {/* <MainPage/> */}
    </div>
  );
}

export default App;
