import React from "react";

function SearchBar() {
  return (
    <div className="w-[700px] flex items-center justify-center">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search 873,812 games"
          className="w-full py-2 px-9 pl-10 pr-20 bg-gray-700 text-gray-300 rounded-full focus:outline-none"
        />
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
          <div className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
            alt
          </div>
          <div className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
            enter
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
