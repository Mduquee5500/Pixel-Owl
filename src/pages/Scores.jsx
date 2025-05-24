import React, { useEffect, useState } from "react";
import backgroundImage from "../../src/assets/img/background.png";

const Title = () => {
  return (
    <h1 className="text-6xl font-bold font-mono mt-10 text-center leading-tight text-white drop-shadow-lg">
      Top 5 scores of Pixel Owl!
    </h1>
  );
};

const ScoresList = ({ scores }) => {
  return (
    <ul className="mt-6 space-y-3 max-w-md mx-auto bg-[#8f12a0] bg-opacity-50 rounded-lg p-6 text-white font-mono text-xl border-[#1c1c1c3c] border-10">
      {scores.map(({ username, score, date }) => (
        <li
          key={`${username}-${date}`}
          className="flex justify-between border-b border-gray-600 pb-2 last:border-none"
        >
          <span>{username}</span>
          <span>{score}</span>
        </li>
      ))}
    </ul>
  );
};

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/scores")
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md pt-8">
        <Title />
        <ScoresList scores={scores} />
      </div>
    </div>
  );
};

export default Scores;
