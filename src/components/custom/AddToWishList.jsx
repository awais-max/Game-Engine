// components/AddToWishlist.js
import React, { useState } from "react";
import axios from "axios";

const AddToWishList = ({ game }) => {
  const [message, setMessage] = useState("");

  const addToWishlist = async () => {
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage

    if (!token) {
      setMessage("You must be signed in to add games to your wishlist.");
      return; // Exit if the user is not signed in
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/wishlist",
        {
          gameId: game.id,
          gameName: game.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to add game to wishlist");
    }
  };

  return (
    <div>
      <button onClick={addToWishlist} className="bg-gray-800 px-2 py-1 rounded">
        Add to Wishlist
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddToWishList;
