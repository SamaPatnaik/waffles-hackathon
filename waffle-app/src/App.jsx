import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isMain, setIsMain] = useState(false);
  if (isMain) {
    return (
      <div>
        <MainPage></MainPage>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <LandingPage
          callback={() => {
            setIsMain(true);
          }}
        />
        {/* <MainPage /> */}
      </div>
    );
  }
}

export default App;
