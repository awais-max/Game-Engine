import { useState } from "react";
import "./App.css";

import MainGameScreen from "./components/custom/MainGameScreen";
import SideBar from "./components/custom/SideBar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(""); // State for selected genre
  const [selectedPlatform, setSelectedPlatform] = useState(""); // State for selected platform

  return (
    <>
      <div className="flex">
        <SideBar
          onGenreChange={setSelectedGenre} // Pass the function to update genre
          onPlatformChange={setSelectedPlatform} // Pass the function to update platform
        />
        <MainGameScreen
          selectedGenre={selectedGenre} // Pass the selected genre
          selectedPlatform={selectedPlatform} // Pass the selected platform
        />
      </div>
    </>
  );
}

export default App;
