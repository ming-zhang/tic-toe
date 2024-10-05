import React from "react";
import Square from "./Square";
import Move from "./Move";

type Props = {
  moves: Array<Move>;
  onClick: (i: number) => void;
};
interface SquareDisplay {
  player: "x" | "o" | "";
  expiring: boolean;
}
const Board: React.FC<Props> = ({ moves, onClick }: Props) => {
  const defaultSquareDisplay = { player: "", expiring: false } as SquareDisplay;
  const squareDisplays = Array(9).fill(defaultSquareDisplay) as SquareDisplay[];
  for (var index in moves) {
    const { player, square } = moves[index];
    squareDisplays[square] = { player, expiring: moves.length === 6 && index === "0" };
  }
  const renderSquare = (i: number) => (
    <Square value={squareDisplays[i]?.player} onClick={() => onClick(i)} expiring={squareDisplays[i].expiring} />
  );
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
