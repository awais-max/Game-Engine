import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/auth/wishlist", {
        headers: { Authorization: token },
      });
      const data = await response.json();
      setWishlist(data);
    };
    fetchWishlist();
  }, []);

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((gameId, index) => (
          <li key={index}>{gameId}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
