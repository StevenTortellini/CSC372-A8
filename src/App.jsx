import { useState, useEffect } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";
import "./App.css";

const choices = ["rock", "paper", "scissors"];

const getWinner = (player, computer) => {
  if (player === computer) return "Tie";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player Wins!";
  }

  return "Computer Wins!";
};

export default function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const handlePlayerSelect = (choice) => {
    setPlayerThrow(choice);  // triggers useEffect
  };

  
  useEffect(() => {
    if (!playerThrow) return; // do nothing until player clicks

    setResult("");
    setComputerThrow("question-mark");

    let index = 0;

    // shuffle interval
    const interval = setInterval(() => {
      setComputerThrow(choices[index]);
      index = (index + 1) % choices.length;
    }, 500);

    // stop shuffle after 3 seconds and choose final
    const stop = setTimeout(() => {
      clearInterval(interval);

      const final = choices[Math.floor(Math.random() * 3)];
      setComputerThrow(final);

      const gameResult = getWinner(playerThrow, final);
      setResult(gameResult);

      // update score
      setScore((prev) => ({ // this implementation prevents race conditions
        player: prev.player + (gameResult === "Player Wins!" ? 1 : 0),
        computer: prev.computer + (gameResult === "Computer Wins!" ? 1 : 0),
      }));
    }, 3000);

    //  Cleanup on re-render or unmount
    return () => {
      clearInterval(interval);
      clearTimeout(stop);
    };
  }, [playerThrow]);

  return (
    <div className="app-container">
      <h1>Rock Paper Scissors</h1>

      <ScoreBoard score={score} />

      <div className="game-area">
        <PlayerThrow selected={playerThrow} onSelect={handlePlayerSelect} />
        <ComputerThrow choice={computerThrow} />
      </div>

      <ResultDisplay result={result} />
    </div>
  );
}
