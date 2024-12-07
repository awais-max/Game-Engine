import React from "react";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center ">
      <h1 class="text-white text-3xl font-extrabold">Game Engine</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
