import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameScreen() {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState({});
  useEffect(
    () => {
      async function fetchGameDetail() {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=c542e67aec3a4340908f9de9e86038af `
        );
        const data = await response.json();
        setGameDetail(data);
      }
      fetchGameDetail();
    },
    { id }
  );
  console.log(gameDetail);
  return (
    <div
      className="container h-screen px-5 "
      style={{
        backgroundImage: `url(${gameDetail.background_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div class="flex justify-center items-center  w-28">
        <div class="rounded bg-white px-5 py-2">Oct 23, 2023</div>
      </div>
      <h1 class="text-xl text-white">{gameDetail.name}</h1>
      <div id="about">
        <h3 class="text-white text-xlg">About</h3>
        <p class="text-white text-lg">
          The origin of stealth action returns. METAL GEAR SOLID: MASTER
          COLLECTION Vol. 1 unifies the beginning of the METAL GEAR gameplay
          experience in one single package.{" "}
        </p>
      </div>

      <div>
        <p class="text-white text-sm">Platforms</p>
      </div>
    </div>
  );
}
export default GameScreen;
