import React from "react";

function SideBar({ onGenreChange, onPlatformChange }) {
  return (
    <div className="w-64 h-screen p-4 px-5 mx-4 sticky text-white text-lg font-normal bottom-3">
      <div className="space-y-6">
        <div>
          <h2 className="font-bold text-3xl">Home</h2>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Genres</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <button onClick={() => onGenreChange("action")}>Action</button>
            </li>
            <li className="flex items-center">
              <button onClick={() => onGenreChange("indie")}>Indie</button>
            </li>
            <li className="flex items-center">
              <button onClick={() => onGenreChange("strategy")}>
                Strategy
              </button>
            </li>
            {/* Add more genres as needed */}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Platforms</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <button onClick={() => onPlatformChange("4")}>PC</button>
            </li>
            <li className="flex items-center">
              <button onClick={() => onPlatformChange("187")}>Xbox One</button>
            </li>
            <li className="flex items-center">
              <button onClick={() => onPlatformChange("18")}>
                PlayStation 4
              </button>
            </li>
            {/* Add more platforms as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
