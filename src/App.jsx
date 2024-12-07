import { useState } from "react";
import "./App.css";

import MainGameScreen from "./components/custom/MainGameScreen";
import SideBar from "./components/custom/SideBar";

function App() {
  return (
    <>
      <div class="flex">
        <SideBar />
        <MainGameScreen />
      </div>
    </>
  );
}

export default App;
