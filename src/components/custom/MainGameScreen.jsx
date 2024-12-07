import React, { useRef, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import GameCard from "./GameCard";

function MainGameScreen({ selectedGenre, selectedPlatform }) {
  const fetchGames = async ({ pageParam = 1 }) => {
    const genreQuery = selectedGenre ? `&genres=${selectedGenre}` : ""; // Append genre to the query if selected
    const platformQuery = selectedPlatform
      ? `&platforms=${selectedPlatform}`
      : ""; // Append platform to the query if selected
    const response = await fetch(
      `https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page_size=20&page=${pageParam}${genreQuery}${platformQuery}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetched data:", data); // Log the fetched data
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["games", selectedGenre, selectedPlatform], // Use an object for the query key
      queryFn: fetchGames, // Use the query function
      getNextPageParam: (lastPage) => {
        // Check if there are more pages based on the last fetched page
        if (lastPage.next) {
          return lastPage.page + 1; // Return the next page number
        }
        return undefined; // No more pages
      },
    });

  const gamesList = data ? data.pages.flatMap((page) => page.results) : [];
  const observer = useRef();

  const lastGameCardRef = useRef();

  useEffect(() => {
    const currentObserver = observer.current;

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 1.0, // Trigger when 100% of the target is visible
    };

    const callback = (entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage(); // Fetch the next page when the last game card is in view
      }
    };

    if (lastGameCardRef.current) {
      currentObserver.observe(lastGameCardRef.current);
    }

    observer.current = new IntersectionObserver(callback, options);

    return () => {
      if (currentObserver && lastGameCardRef.current) {
        currentObserver.unobserve(lastGameCardRef.current);
      }
    };
  }, [lastGameCardRef, hasNextPage, fetchNextPage]);

  if (isLoading && !data) return <p>Loading...</p>;
  if (isError) return <p>Error loading games.</p>;

  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gamesList.map((game, index) => {
          if (index === gamesList.length - 1) {
            return (
              <div ref={lastGameCardRef} key={index}>
                <GameCard game={game} />
              </div>
            );
          }
          return <GameCard key={index} game={game} />;
        })}
      </div>
      {isLoading && <p>Loading more games...</p>}
      {!hasNextPage && <p>No more games to load.</p>}
    </div>
  );
}

export default MainGameScreen;
