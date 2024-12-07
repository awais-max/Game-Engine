import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function MainGameScreen() {
  const [gamesList, setGamesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchGames() {
    if (loading) return;
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page_size=20&page=${pageNumber}&genres=strategy`
    );

    const data = await response.json();
    setGamesList([...gamesList, ...data.results]);
    setLoading(false);
  }

  useEffect(() => {
    fetchGames();
  }, [pageNumber]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;

    if (scrollPosition >= scrollHeight) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  console.log(pageNumber);

  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gamesList.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}

export default MainGameScreen;
