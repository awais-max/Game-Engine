import React from "react";
import { Link } from "react-router-dom";
import AddToWishlist from "./AddToWishList"; // Import the AddToWishlist component

const getPlatformIcon = (slug) => {
  switch (slug) {
    case "pc":
      return "windows";
    case "playstation":
      return "playstation";
    case "xbox":
      return "xbox";
    case "nintendo":
      return "nintendo-switch";
    case "ios":
      return "apple";
    case "android":
      return "android";
    default:
      return "";
  }
};

const GameCard = ({ game }) => {
  // Defensive check to ensure game is defined
  if (!game) {
    return (
      <div className="bg-gray-800 rounded-lg p-4">Game data not available</div>
    );
  }

  return (
    <div className="bg-custom-myblack rounded-lg overflow-hidden shadow-lg text-white">
      <Link to={`/games/${game.id}`}>
        <img
          src={game.background_image}
          alt={game.alt}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {game.parent_platforms.map((platform, index) => (
              <i
                key={index}
                className={`fab fa-${getPlatformIcon(platform.platform.slug)}`}
              ></i>
            ))}
          </div>
          {game.metacritic !== null && (
            <div className="border border-green-500 text-white px-2 py-1 rounded">
              {game.metacritic}
            </div>
          )}
        </div>
        <Link to={`/games/${game.id}`}>
          <h3 className="text-xl font-bold">{game.name}</h3>
        </Link>
        <div className="flex items-center space-x-2 mt-2">
          <AddToWishlist game={game} />{" "}
          <button className="bg-gray-800 px-2 py-1 rounded">
            <i className="fas fa-gift"></i>
          </button>
          <button className="bg-gray-800 px-2 py-1 rounded">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
