import React from "react";

function SideBar() {
  return (
    <div className="w-64 h-screen p-4 px-5 mx-4 sticky text-white text-lg font-normal bottom-3">
      <div className="space-y-6">
        <div>
          <h2 className="font-bold text-3xl">Home</h2>
        </div>

        <div>
          <h2 className="font-bold text-2xl">New Releases</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <i className="fas fa-star mr-2"></i> Last 30 days
            </li>
            <li className="flex items-center">
              <i className="fas fa-play mr-2"></i> This week
            </li>
            <li className="flex items-center">
              <i className="fas fa-forward mr-2"></i> Next week
            </li>
            <li className="flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i> Release calendar
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Top Games</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <i className="fas fa-trophy mr-2"></i> Best of the year
            </li>
            <li className="flex items-center">
              <i className="fas fa-chart-line mr-2"></i> Popular in 2023
            </li>
            <li className="flex items-center">
              <i className="fas fa-crown mr-2"></i> All time top 250
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">All Games</h2>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Browse</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <i className="fas fa-gamepad mr-2"></i> Platforms
            </li>
            <li className="flex items-center">
              <i className="fas fa-store mr-2"></i> Stores
            </li>
            <li className="flex items-center">
              <i className="fas fa-folder mr-2"></i> Collections
            </li>
            <li className="flex items-center">
              <i className="fas fa-chevron-down mr-2"></i> Show all
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Platforms</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <i className="fas fa-desktop mr-2"></i> PC
            </li>
            <li className="flex items-center">
              <i className="fas fa-playstation mr-2"></i> PlayStation 4
            </li>
            <li className="flex items-center">
              <i className="fas fa-xbox mr-2"></i> Xbox One
            </li>
            <li className="flex items-center">
              <i className="fas fa-chevron-down mr-2"></i> Show all
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Genres</h2>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center">
              <i className="fas fa-gamepad mr-2"></i> Free Online Games
            </li>
            <li className="flex items-center">
              <i className="fas fa-fist-raised mr-2"></i> Action
            </li>
            <li className="flex items-center">
              <i className="fas fa-chess mr-2"></i> Strategy
            </li>
            <li className="flex items-center">
              <i className="fas fa-chevron-down mr-2"></i> Show all
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
