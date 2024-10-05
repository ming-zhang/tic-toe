import React, { useState, ReactElement } from "react";
import Board from "./Board";
import "./App.css";
import Move from "./Move";

function App() {
  const [moves, setMoves] = useState([] as Move[]);
  const xIsNext = moves.length < 1 || moves[moves.length - 1]["player"] === "o";
  const winner = calculateWinner(moves);
  const handleClick = (i: number) => {
    if (winner) {
      return;
    }
    for (var { square } of moves) {
      if (square === i) {
        return;
      }
    }
    const newMove = { player: xIsNext ? "x" : "o", square: i } as Move;
    setMoves([...moves.slice(-5), newMove]);
  };
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");
  return (
    <div className="game">
      <div className="game-info">
        <div>{status}</div>
      </div>
      <Board
        moves={moves}
        onClick={i => handleClick(i)}
      />
    </div>
  );
}
function calculateWinner(moves: Move[]) {
  const squares = new Array(9);
  for (var { player, square } of moves) {
    squares[square] = player;
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const length = lines.length;
  for (let i = 0; i < length; i++) {
    const [a, b, c] = lines[i];
    const player = squares[a];
    if (player && player === squares[b] && player === squares[c]) {
      return player;
    }
  }
  return null;
}

export default App;
